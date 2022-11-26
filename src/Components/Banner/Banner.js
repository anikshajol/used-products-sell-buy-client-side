import React from "react";
import Lottie from "lottie-react";
import lottie from "../../lottie/77169-buy-and-sell-online.json";

const Banner = () => {
  return (
    <div className="flex items-center flex-col justify-center md:flex-row container mx-auto ">
      <section className="md:w-full ">
        <Lottie
          className="w-full h-[60vh]"
          animationData={lottie}
          loop={true}
        />
      </section>
      <section className="text px-12">
        <h2 className="text-5xl font-semibold">
          Buy And Sell Used Products With Us. Best Deal Best Offers Only for
          you.
        </h2>
      </section>
    </div>
  );
};

export default Banner;
