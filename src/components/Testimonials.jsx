import React from "react";
import textStyles from "../textstyles/textstyle";
import { TestimonialCarousel } from "../Carousel/FeedbackCard";
import { testimonials } from "../constants";

const Testimonials = () => {
  return (
    <section>
      <div
        className="bg-tbg test-shadow
">
        <div className="flex flex-col justify-center items-center">
          <h3
            style={{ letterSpacing: "0.4rem" }}
            className={`${textStyles.g_heading} pt-20 mt-20 pb-3 text-white text-2xl font-normal`}>
            TESTIMONIALS
          </h3>
          <h1
            style={{ letterSpacing: "0.6rem" }}
            className={`${textStyles.b_heading} text-white text-4xl font-normal`}>
            What People Say
          </h1>
          <p
            className={`${textStyles.b_para} w-[40%] p-5 pb-60 mb-40 text-white justify-center items-center text-center text-xl font-normal`}>
            Explore the voices of satisfaction. Our clients speak through 5
            million reviews, sharing stories of success and partnership.
          </p>
        </div>
      </div>
      <div className="relative flex w-full  top-36">
        <div className="absolute pl-4  bottom-0 left-96">
          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
