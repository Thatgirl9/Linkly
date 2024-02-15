import NavBar from "../../components/Nav";
import "./landing.css";
// import bgImage from "../../assets/Group 17.png";

const LandingPage: React.FC = () => {
  return (
    <section className="landingPage font-inter border-2 border-red-400 text-white">
      <NavBar />
      <div className="hero pt-[8em] lg:pt-[10em] justify-center items-center flex flex-col gap-[3.7em]">
        <div className="hero-text text-center flex flex-col gap-2">
          <h1 className="text-4xl lg:text-5xl  font-extrabold text-white hero__p">
            Shorten Your Loooong Links :)
          </h1>

          <p className="text-primaryLite text-base">
            Linkly is an efficient and easy-to-use URL shortening service that
            streamlines your<br className="hidden lg:block"></br> online
            experience.
          </p>
        </div>

        <div className="bg-primaryPink py-4  rounded-3xl">
          <input></input>
          <button className="bg-primaryLite text-white px-4 py-2 rounded-md">
            Shorten
          </button>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
