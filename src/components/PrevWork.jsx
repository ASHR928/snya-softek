import React from "react";
import textStyles from "../textstyles/textstyle";
import Slider from "../Carousel/Slider";

const PrevWork = () => {
  return (
    <section className="flex-col flex ">
      <div className="flex  flex-col ml-32">
        <h1
          style={{ letterSpacing: "0.7rem" }}
          className={`${textStyles.g_heading} uppercase mb-4 text-normal text-5xl`}>
          Our Esteemed Clients
        </h1>
        <p
          style={{ textAlign: "justify" }}
          className={`${textStyles.b_para} w-[1300px]  text-xl`}>
          We take pride in collaborating with visionary organizations across
          industries, transforming challenges into opportunities. Join our
          distinguished clientele and experience the impact of innovative
          solutions tailored to elevate your business in the digital landscape.
        </p>
      </div>
      <div className="mt-10 mb-20">
        <Slider />
      </div>
    </section>
  );
};

export default PrevWork;
