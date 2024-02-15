import NavBar from "../../components/Nav";
import "./landing.css";
// import bgImage from "../../assets/Group 17.png";

const LandingPage: React.FC = () => {
  return (
    <section className="landingPage  font-inter h-screen">
      <NavBar />

      <div>
        {/* <img src={bgImage} className="w-full " /> */}
        {/* <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img src={bgImage} alt="logo" className="w-[20em] h-[10em]" />
            <h1 className="text-3xl font-bold text-white ml-2">Linkly</h1>
          </div>
          <div>
            <button className="bg-white text-primaryPink text-sm font-bold px-4 py-2 rounded-lg">
              Sign In
            </button>
          </div>
        </div>
        <div className="mt-20">
          <h1 className="text-5xl font-bold text-white">
            Shorten your link and track it.
          </h1>
          <p className="text-white mt-4">
            A simple and easy to use tool to shorten your links, and track how
            many people clicked on it.
          </p>
          <div className="flex mt-8">
            <input
              type="text"
              placeholder="Shorten your link"
              className="w-1/2 px-4 py-2 rounded-l-lg"
            />
            <button className="bg-secondaryPink text-white px-4 py-2 rounded-r-lg">
              Shorten
            </button>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default LandingPage;
