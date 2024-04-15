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
            style={{ letterSpacing: "0.4rem", fontSize: "1.5rem" }}
            className={`${textStyles.g_heading} pt-10 mt-20  text-white  font-normal`}>
            TESTIMONIALS
          </h3>
          <h2
            style={{
              letterSpacing: "11.61px",
              fontSize: "2.5rem",
              fontWeight: "600",
            }}
            className={`${textStyles.b_heading} text-white `}>
            What People Say
          </h2>
          <p
            style={{
              fontWeight: "400",
              fontFamily: "Hind Madurai",
              letterSpacing: "0.21px",
            }}
            className={`${textStyles.b_para} w-[40%] pt-4 pb-32 mb-40 text-white justify-center items-center text-center  font-normal`}>
            Explore the voices of satisfaction. Our clients speak through 5
            million reviews, sharing stories of success and partnership.
          </p>
        </div>
      </div>
      <div className="relative flex ml-32  top-36">
        <div className="absolute   bottom-0 left-0">
          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
