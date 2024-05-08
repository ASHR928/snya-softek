import textStyles from "../textstyles/textstyle";
import { TestimonialCarousel } from "../Carousel/FeedbackCard";
import { testimonials } from "../constants";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Testimonials = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <section id="testimonials">
      <div
        className="bg-tbg test-shadow
"
      >
        <div
          className="flex flex-col justify-center items-center"
          data-aos="fade-left"
        >
          <h3
            style={{ letterSpacing: "0.4rem" }}
            className={`${textStyles.g_heading} md:pt-10 pt-8 md:mt-16 mt-10 md:text-2xl text-[18px]  text-white  font-normal`}
          >
            TESTIMONIALS
          </h3>

          <h2
            style={{
              letterSpacing: "11.61px",

              fontWeight: "600",
            }}
            className={`${textStyles.b_heading} text-white md:text-4xl text-[15px] `}
          >
            What People Say
          </h2>

          <p
            style={{
              fontWeight: "400",
              fontFamily: "Hind Madurai",
              letterSpacing: "0.21px",
            }}
            className={`${textStyles.b_para} md:w-[40%] w-[60%] md:pt-4 pt-2 pb-10 mb-20 md:pb-32 md:mb-40  md:text-base text-[10px] text-white justify-center items-center text-center  font-normal mx-auto`}
          >
            Explore the voices of satisfaction. Our clients speak through 5
            million reviews, sharing stories of success and partnership.
          </p>
        </div>
      </div>
      <div className="relative flex  md:mr-0 mr-[30px] md:ml-20 top-36">
        <div className="absolute md:bottom-0 bottom-[70px] left-0">
          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
