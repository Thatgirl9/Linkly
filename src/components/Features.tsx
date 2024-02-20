import Reason3 from "../assets/FeaturesAssets/Frame 1000001695 (1).svg";
import Reason2 from "../assets/FeaturesAssets/Frame 1000001695.svg";
import Reason4 from "../assets/FeaturesAssets/Frame 1000001718.svg";
import Reason1 from "../assets/FeaturesAssets/Group 6.svg";

const Features: React.FC = () => {
  const ReasonsForLinkly = [
    // 1st Reason
    {
      image: Reason1,
      alt: "Link Icon",
      title: "URL Shortening",
      description:
        "Linkly allows you to shorten URLs of your business, events. Shorten your URL at scale, URL redirects.",
    },

    // 2nd Reason
    {
      image: Reason2,
      alt: "Editing Icon",
      title: "Custom URLs",
      description:
        "With Linkly, you can create custom URLs, with the length you want! A solution for socials and businesses.",
    },

    // 3rd Reason
    {
      image: Reason3,
      alt: "QR Codes Icon",
      title: "QR Codes",
      description:
        " Generate QR codes to your business, events. Bring your audience and customers to your doorstep with this scan and go solution.",
    },

    // 4th Reason
    {
      image: Reason4,
      alt: "Data Analytics Icon",
      title: "Data Analytics",
      description:
        "Receive data on the usage of either your shortened URL, custom URLs or generated QR codes. Embedded to monitor progress.",
    },
  ];

  return (
    <section
      className=" md:pt-[6em] pt-[5em] text-primaryLite flex md:flex-row flex-col justify-center items-center md:items-start gap-[4em] pb-[4em] scroll-m-16"
      id="features"
    >
      {/* Why choose Linkly */}
      <div>
        <h2 className="text-4xl font-bold text-center ">
          Why choose <span className="linkly-text font-[800]">Linkly</span>
        </h2>
        <p className=" text-left mt-4 sm:w-[32ch] w-[100%] px-[2em] sm:px-0">
          Linkly is the hub of everything that has to do with your link
          management. We shorten your URLs, allow you creating custom ones for
          your personal, business, event usage. Our swift QR code creation,
          management and usage tracking with advance analytics for all of these
          is second to none.
        </p>
      </div>

      {/* Reasons  */}
      <div className="grid  lg:grid-cols-2 grid-cols-1 gap-[2em]">
        {ReasonsForLinkly.map((reason, index) => {
          return (
            <div
              key={index}
              className="flex flex-col gap-[1em] border border-primaryGrey rounded-xl p-4 hover:cursor-pointer hover:shadow-lg hover:shadow-primaryGrey"
            >
              <div>
                <img src={reason.image} alt={reason.alt} />
              </div>

              <h3 className="font-semibold">{reason.title}</h3>
              <p className="w-[33ch] text-sm">{reason.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Features;
