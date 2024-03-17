import Features from "../../components/Features";
import Pricing from "../../components/Pricing";
import NavBar from "../../components/Nav";
import Form from "../../components/FormUrl";
import ShortLink from "../../components/ShortenedLink";
import Footer from "../../components/Footer";
import "./landing.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import LaptopTable from "../../assets/Frame 39.png";
import MobileTable from "../../assets/Frame 39 (1).png";
import Spinner from "../../components/Spinner";

const LandingPage: React.FC = () => {
  const [shortUrl, setShortUrl] = useState("");
  const [qrCode, setQrCode] = useState("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [invalidLink, setInValidLink] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<null>(null);
  const [count, setCount] = useState<number>(0);
  const [countMessage, setCountMessage] = useState<boolean>(false);

  const handleFormSubmit = async (longUrl: string) => {
    setIsLoading(true);

    // Check if the input is a valid URL
    const linkValid = /^https?:\/\/[^\s/$.?#].[^\s]*$/.test(longUrl);

    if (!linkValid) {
      setInValidLink(true);
      setIsLoading(false);
      return;
    }

    // Ensure the link has http:// or https:// prefix
    const updateLinkValid =
      longUrl.startsWith("http://") || longUrl.startsWith("https://")
        ? longUrl
        : `https://${longUrl}`;

    setInValidLink(false);
    console.log(updateLinkValid);

    try {
      const response = await fetch(
        "https://api.tinyurl.com/create?api_token=sX9Z93j8f6BRAy10xkh4esULwnyvDrUO5LaMgmLjGFLKSiMJenrmFsmiv0jD",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            url: updateLinkValid,
            domain: "tinyurl.com",
            description: "string",
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        const result = data.data.tiny_url;
        console.log(result);
        setShortUrl(result);
        const qrCode = data.data.tiny_url;
        console.log(qrCode);
        setQrCode(qrCode);

        // Increment link count after successfully shortening a link
        setCount((prevCount) => prevCount + 1);

        // Check if the user has shortened two links, then show the popup
        if (count + 1 >= 2) {
          setCountMessage(true);
        }
      } else {
        console.error("Error", response.statusText);
      }
    } catch (err: any) {
      console.error(err.message);
      setErrorMessage(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputFocus = () => {
    setInValidLink(false);
  };

  return (
    <section className="landingPage font-inter">
      <NavBar />
      <div className="hero pt-[8em] lg:pt-[10em] justify-center items-center flex flex-col gap-[3.5em] landing-page-div ">
        {/* Texts */}
        <div className="hero-text text-center flex flex-col gap-2 w-[90%] md:w-[95%] lg:w-fit">
          <h1 className="text-4xl lg:text-5xl  font-extrabold text-white hero__p">
            Shorten Your Loooong Links :)
          </h1>

          <p className="text-primaryLite text-base">
            Linkly is an efficient and easy-to-use URL shortening service that
            streamlines your<br className="hidden md:block"></br> online
            experience.
          </p>
        </div>

        {/* Link Input, Toggle Switch and so.... */}
        <div className="flex flex-col gap-[1.9em] lg:gap-[1.5em] justify-center items-center">
          {/* Link Input */}

          <Form
            onSubmit={handleFormSubmit}
            onFocus={handleInputFocus}
            style={{ width: "90%", maxWidth: "30em" }}
          />
          <p className="text-red-500">
            {invalidLink ? "Please enter a valid link" : ""}
          </p>
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
          <Spinner isLoading={isLoading} />

          {shortUrl && <ShortLink url={shortUrl} qrCode={qrCode} />}

          {/* Toggle switch and Texts */}
          <div className="flex flex-col justify-center items-center text-primaryLite gap-[1.3em]">
            {countMessage && (
              <p className="text-sm flex justify-center items-center text-center gap-2 text-primaryLite">
                <span>
                  <Link
                    to="/register"
                    className="underline decoration-primaryBlue sm:no-underline font-semibold sm:font-normal cursor-pointer sm:hover:underline"
                  >
                    <span className="linkly-text font-semibold">
                      Register Now
                    </span>
                  </Link>{" "}
                  to enjoy Unlimited usage
                </span>
              </p>
            )}
          </div>

          {/* Pictures */}
          <div className="table-div flex justify-center items-center w-[90%] lg:w-[80%] mt-[2em]">
            <div className="laptop-img-div hover:cursor-pointer hidden md:block">
              <img
                src={LaptopTable}
                alt="Table showing Links Shortened on Desktop Screen"
              />
              <p className="text-sm text-primaryLite text-center mt-[-2em]">
                <Link
                  to="/register"
                  className="text-primaryBlue underline pr-1"
                >
                  Register Now
                </Link>
                to enjoy Unlimited History
              </p>
            </div>
            <div className="mobile-img-div hover:cursor-pointer block md:hidden">
              <img
                src={MobileTable}
                alt="Table showing Links Shortened on Mobile Screen"
              />
            </div>
          </div>
        </div>
      </div>

      <Features />
      <Pricing />
      <Footer />
    </section>
  );
};

export default LandingPage;
