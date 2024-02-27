import Features from "../../components/Features";
import Pricing from "../../components/Pricing";
import NavBar from "../../components/Nav";
import ToggleSwitch from "../../components/ToggleSwitch";
import "./landing.css";
import { Link } from "react-router-dom";
import axios from "axios";
// import QRCode from "qrcode.react";

import InputLink from "../../assets/link.png";
import QuestionCircle from "../../assets/question-circle.png";
import LaptopTable from "../../assets/Frame 39.png";
import MobileTable from "../../assets/Frame 39 (1).png";
import Footer from "../../components/Footer";
import { useState } from "react";

const LandingPage: React.FC = () => {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [qrCode, setQrCode] = useState("");

  const handleToggle = (checked: boolean) => {
    console.log("Checked: ", checked);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/shorten", {
        url,
      });
      setShortUrl(response.data.shortUrl);
      setQrCode(response.data.qrCode);
    } catch (err) {
      console.error(err);
    }
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
          <form onSubmit={handleSubmit}>
            <div className="sm:w-[30em] w-[90%]  rounded-full flex items-center justify-center gap-2 bg-primaryGrey px-[0.3em] h-[3.3em] border-[3px] border-stroke">
              <img
                src={InputLink}
                alt="Link Icon"
                className="h-[1.2em] w-[2em] pl-[0.5em]"
              />
              <input
                className="bg-transparent outline-none sm:w-[28em] w-[70%]"
                placeholder="Enter the link here"
                id="url"
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              ></input>
              <button
                className="bg-primaryBlue text-white font-semibold px-4 py-2 rounded-full shadow-2xl shadow-primaryBlue"
                type="submit"
              >
                Shorten!
              </button>
            </div>
          </form>

          {/* Toggle switch and Texts */}
          <div className="flex flex-col justify-center items-center text-primaryLite gap-[1.3em]">
            <div className="flex gap-4 items-center justify-center">
              <ToggleSwitch onChange={handleToggle} />
              <p className="text-base">Auto Paste from Clipboard </p>
            </div>
            <p className="text-sm flex justify-center items-center text-center gap-2 text-primaryLite">
              <span>
                You can create{" "}
                <span className="text-primaryPink font-semibold">05</span> more
                links.
                <br className="md:hidden block"></br>{" "}
                <Link
                  to="/register"
                  className="underline sm:no-underline font-semibold sm:font-normal cursor-pointer sm:hover:underline"
                >
                  Register Now
                </Link>{" "}
                to enjoy Unlimited usage
              </span>

              <span>
                <img
                  src={QuestionCircle}
                  className="w-[1em] h-[1em] hidden md:block"
                  alt="Question Mark in a Circle"
                />
              </span>
            </p>
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
