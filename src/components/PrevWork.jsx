import React from "react";
import textStyles from "../textstyles/textstyle";
import Slider from "../Carousel/Slider";

const PrevWork = () => {
  return (
    <section className="flex-col flex ">
      <div className="flex flex-col ml-4 md:ml-20">
        <h1
          className={`${textStyles.g_heading} tracking-widest uppercase mb-2 text-lg md:text-xl lg:text-2xl`}>
          Our Esteemed Clients
        </h1>
        <p
          className={`${textStyles.b_para} text-sm max-w-5xl md:text-base lg:text-lg`}>
          We take pride in collaborating with visionary organizations across
          industries, transforming challenges into opportunities. Join our
          distinguished clientele and experience the impact of innovative
          solutions tailored to elevate your business in the digital landscape.
        </p>
      </div>
      <div className="mt-4 mb-8 max-w-full">
        <Slider />
      </div>
    </section>
  );
};

export default PrevWork;
