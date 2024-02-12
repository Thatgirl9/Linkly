import "./landing.css";
import bgImage from "../../assets/Group 17.png";

const LandingPage = () => {
  return (
    <section
      className=" landing-page h-screen border-red-700 border-4"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* <h1>Wassup! I'm here</h1> */}
    </section>
  );
};

export default LandingPage;
