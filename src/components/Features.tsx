import Reason4 from "../assets/FeaturesAssets/Frame 1000001695 (1).svg";
import Reason2 from "../assets/FeaturesAssets/Frame 1000001695.svg";
import Reason3 from "../assets/FeaturesAssets/Frame 1000001718.svg";
import Reason1 from "../assets/FeaturesAssets/Group 6.svg";

const Features: React.FC = () => {
  return (
    <section
      className=" md:mt-[6em] mt-[5em] text-primaryLite flex justify-center items-center pb-[4em] "
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
      <div>
        {/* 1st Reason */}
        <div>
          <div>
            <img src={Reason1} alt="Link Icon" />
          </div>

          <h3 className="font-semibold">URL Shortening</h3>
        </div>

        {/* 2nd Reason */}
        <div>
          <div>
            <img src={Reason4} alt="" />
          </div>
        </div>

        {/* 3rd Reason */}
        <div>
          <div>
            <img src={Reason2} alt="Reason2" />
          </div>
        </div>

        {/* 4th Reason */}
        <div>
          <div>
            <img src={Reason3} alt="Reason3" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
