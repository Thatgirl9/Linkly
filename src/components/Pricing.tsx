import BlueCheck from "../assets/PricingAssets/check-circle.svg";
import WhiteCheck from "../assets/PricingAssets/check-circle (1).svg";
import { Link } from "react-router-dom";

const Pricing: React.FC = () => {
  const FreePlan = [
    {
      image: BlueCheck,
      alt: "Check Icon",
      title: "Unlimited URL Shortening",
    },

    {
      image: BlueCheck,
      alt: "Check Icon",
      title: "Basic Link Analytics",
    },

    {
      image: BlueCheck,
      alt: "Check Icon",
      title: "Customizable Short Links",
    },

    {
      image: BlueCheck,
      alt: "Check Icon",
      title: "Standard Support",
    },
  ];

  const ProfessionalPlan = [
    {
      image: WhiteCheck,
      alt: " White Check Icon",
      description: "Enhanced Link Analytics",
    },

    {
      image: WhiteCheck,
      alt: " White Check Icon",
      description: "Custom Branded Domains",
    },

    {
      image: WhiteCheck,
      alt: " White Check Icon",
      description: "Advanced Link Customization",
    },

    {
      image: WhiteCheck,
      alt: " White Check Icon",
      description: "Priority Support",
    },
  ];

  const TeamsPlan = [
    {
      image: BlueCheck,
      alt: "Blue Check Icon",
      description: "Team Collaboration",
    },

    {
      image: BlueCheck,
      alt: "Blue Check Icon",
      description: "User Roles and Permissions",
    },
    {
      image: BlueCheck,
      alt: "Blue Check Icon",
      description: "Enhanced Security",
    },

    {
      image: BlueCheck,
      alt: "Blue Check Icon",
      description: "Dedicated Account Manager",
    },
  ];

  return (
    <section
      className="flex justify-center items-center flex-col pt-[5em] pb-[4em] gap-[4em] scroll-m-11"
      id="pricing"
    >
      <div className="text-center w-[90%] md:w-fit">
        <h2 className="linkly-text text-4xl font-[800] pb-[0.7em]">Pricing</h2>
        <p className="md:w-[50ch]">
          Choose a plan that works for you, from catering for your personal,
          business, event, socials needs, you can be rest assured we have you in
          mind in our pricing.
        </p>
      </div>

      {/* Pricing Div */}
      <div className="flex flex-col md:flex-row flex-wrap gap-[1.6em] lg:gap-0 justify-center items-center pt-[2em]">
        {/* Free Pricing Div */}
        <div className="border border-stroke rounded-lg p-7 py-[3.6em] flex justify-center items-left flex-col text-primaryLite hover:shadow-lg hover:shadow-primaryGrey">
          <h2 className=" font-medium text-base pb-[0.6em]">Basic</h2>
          <h3 className="font-bold pb-[0.3em] text-3xl">Free</h3>

          <p className="font-medium text-base pb-[0.4em]">
            Free plans for all users
          </p>

          <ul className="text-left pt-3 flex flex-col gap-4">
            {FreePlan.map((free, index) => {
              return (
                <li key={index} className="flex gap-2 items-center">
                  <span>
                    <img src={free.image} alt={free.alt} />
                  </span>{" "}
                  <span>{free.title}</span>
                </li>
              );
            })}
          </ul>
        </div>

        {/* 5 dollars Pricing Div */}
        <div className="border border-stroke rounded-lg p-7  py-[3.6em] lg:py-[4.6em] flex justify-center items-left flex-col text-primaryLite hover:shadow-lg hover:shadow-primaryGrey bg-primaryGrey lg:scale-110 scale-100">
          <h2 className=" font-medium text-base pb-[0.6em]">Professional</h2>
          <h3 className="font-bold pb-[0.3em] text-3xl">$5/month</h3>

          <p className="font-medium text-base pb-[0.4em]">
            Ideal for business creators
          </p>
          <ul className="text-left pt-3 flex flex-col gap-4">
            {ProfessionalPlan.map((professional, index) => {
              return (
                <li key={index} className="flex gap-2 items-center">
                  <span>
                    <img src={professional.image} alt={professional.alt} />
                  </span>{" "}
                  <span>{professional.description}</span>
                </li>
              );
            })}
          </ul>
        </div>

        {/* 15 dollars Pricing Div
         */}
        <div className="border border-stroke rounded-lg p-7 py-[3.6em] flex justify-center items-left flex-col text-primaryLite hover:shadow-lg hover:shadow-primaryGrey">
          <h2 className=" font-medium text-base pb-[0.6em]">Teams</h2>
          <h3 className="font-bold pb-[0.3em] text-3xl">$15/month</h3>

          <p className="font-medium text-base pb-[0.4em]">
            Share with up to 10 users
          </p>
          <ul className="text-left pt-3 flex flex-col gap-4">
            {TeamsPlan.map((team, index) => {
              return (
                <li key={index} className="flex gap-2 items-center">
                  <span>
                    <img src={team.image} alt={team.alt} />
                  </span>{" "}
                  <span>{team.description}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* Register */}
      <div className="pt-[1em]">
        <p className="text-base text-primaryLite text-center mt-[-2em] font-medium">
          <Link to="/register" className="linkly-text pr-1">
            Register
          </Link>
          to get started
        </p>
      </div>
    </section>
  );
};

export default Pricing;
