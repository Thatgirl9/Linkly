import Features from "../../components/Features";
import NavBar from "../../components/Nav";
import "./landing.css";
// import bgImage from "../../assets/Group 17.png";
import InputLink from "../../assets/link.png";

const LandingPage: React.FC = () => {
  return (
    <section className="landingPage font-inter">
      <NavBar />
      <div className="hero pt-[8em] lg:pt-[10em] justify-center items-center flex flex-col gap-[3.7em]">
        <div className="hero-text text-center flex flex-col gap-2 w-[90%] md:w-[95%] lg:w-fit">
          <h1 className="text-4xl lg:text-5xl  font-extrabold text-white hero__p">
            Shorten Your Loooong Links :)
          </h1>

          <p className="text-primaryLite text-base">
            Linkly is an efficient and easy-to-use URL shortening service that
            streamlines your<br className="hidden lg:block"></br> online
            experience.
          </p>
        </div>

        <div className="sm:w-[30em] w-[96%]  rounded-full flex items-center justify-center gap-2 bg-primaryGrey px-[0.3em] h-[3.3em] border-[3px] border-stroke">
          <img
            src={InputLink}
            alt="Link Icon"
            className="h-[1.2em] w-[2em] pl-[0.5em]"
          />
          <input
            className="bg-transparent outline-none w-[28em]"
            placeholder="Enter the link here"
          ></input>
          <button className="bg-primaryBlue text-white font-semibold px-4 py-2 rounded-full shadow-2xl shadow-primaryBlue">
            Shorten!
          </button>
        </div>
      </div>

      <Features />
    </section>
  );
};

export default LandingPage;
