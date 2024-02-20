import BlueCheck from "../assets/PricingAssets/check-circle.svg";
import WhiteCheck from "../assets/PricingAssets/check-circle (1).svg";

const Pricing: React.FC = () => {
  const FreePlan = [
    {
      image: WhiteCheck,
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
      <div>
        {/* Free Pricing Div */}
        <div className="border border-stroke p-7 flex justify-center items-left flex-col">
          <h2 className="text-primaryLite font-bold text-3xl ">Basic</h2>
          <h3>Free</h3>

          <p>Free plans for all users</p>

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
      </div>
    </section>
  );
};

export default Pricing;
