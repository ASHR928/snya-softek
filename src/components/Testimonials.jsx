import React from "react";
import textStyles from "../textstyles/textstyle";
import { TestimonialCarousel } from "../Carousel/FeedbackCard";
import { testimonials } from "../constants";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <div
        className="bg-tbg test-shadow
">
        <div className="flex flex-col justify-center items-center">
          <h3
            style={{ letterSpacing: "0.4rem" }}
            className={`${textStyles.g_heading} md:pt-10 pt-8 md:mt-20 mt-10 md:text-2xl text-xl  text-white  font-normal`}>
            TESTIMONIALS
          </h3>
          <h2
            style={{
              letterSpacing: "11.61px",

              fontWeight: "600",
            }}
            className={`${textStyles.b_heading} text-white md:text-4xl text-2xl `}>
            What People Say
          </h2>
          <p
            style={{
              fontWeight: "400",
              fontFamily: "Hind Madurai",
              letterSpacing: "0.21px",
            }}
            className={`${textStyles.b_para} w-[40%] md:pt-4 pt-2 pb-20 mb-20 md:pb-32 md:mb-40  md:text-base text-xs text-white justify-center items-center text-center  font-normal`}>
            Explore the voices of satisfaction. Our clients speak through 5
            million reviews, sharing stories of success and partnership.
          </p>
        </div>
      </div>
      <div className="relative flex md:ml-20 top-36">
        <div className="absolute   bottom-0 left-0">
          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
