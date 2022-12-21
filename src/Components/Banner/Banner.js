import React from "react";
import Lottie from "lottie-react";
import lottie from "../../lottie/77169-buy-and-sell-online.json";

const Banner = () => {
  return (
    <div className="flex items-center flex-col justify-center md:flex-row container mx-12 md:mx-auto">
      <section className="md:w-full mt-32 md:mt-12 ">
        <Lottie
          className=" w-1/2 md:w-full h-[60vh]"
          animationData={lottie}
          loop={true}
        />
      </section>
      <section className="mx-8 md:px-12 ">
        <h2 className=" text-3xl text-center md:text-left md:text-5xl font-semibold">
          Buy And Sell Used Products With Us. Best Deal Best Offers Only for
          you.
        </h2>
      </section>
    </div>
  );
};

export default Banner;
