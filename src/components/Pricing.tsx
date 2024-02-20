import BlueCheck from "../assets/PricingAssets/check-circle.svg";
import WhiteCheck from "../assets/PricingAssets/check-circle (1).svg";

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

  return (
    <section
      className="flex justify-center items-center flex-col pt-[5em] pb-[3em] gap-[4em] scroll-m-11"
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
      <div className="flex flex-col md:flex-row gap-[1.6em] md:gap-0">
        {/* Free Pricing Div */}
        <div className="border border-stroke rounded-lg p-7 py-8 flex justify-center items-left flex-col text-primaryLite hover:shadow-lg hover:shadow-primaryGrey">
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
        <div className="border border-stroke rounded-lg p-7 py-8 flex justify-center items-left flex-col text-primaryLite hover:shadow-lg hover:shadow-primaryGrey bg-primaryGrey">
          <h2 className=" font-medium text-base pb-[0.6em]">Professional</h2>
          <h3 className="font-bold pb-[0.3em] text-3xl">$5/month</h3>

          <p className="font-medium text-base pb-[0.4em]">
            Ideal for business creators
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
