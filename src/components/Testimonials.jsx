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
      <div className="bg-tbg test-shadow">
        <div
          className="flex flex-col justify-center items-center"
          data-aos="fade-left"
        >
          <h3
            className={`${textStyles.g_heading} tracking-wider md:tracking-[0.4rem] md:pt-8 pt-4 md:mt-10 mt-4 text-2xl sm:text-5xl text-white font-normal`}
          >
            TESTIMONIALS
          </h3>

          <h2
            style={{
              fontWeight: "600",
            }}
            className={`${textStyles.b_heading} tracking-wider md:tracking-[11.61px] text-white text-base sm:text-xl `}
          >
            What People Say
          </h2>

          <p
            style={{
              fontWeight: "400",
              fontFamily: "Hind Madurai",
              letterSpacing: "0.21px",
            }}
            className={`${textStyles.b_para} md:w-[40%] w-[60%] md:pt-4 pt-2 pb-10 mb-20 md:pb-32 md:mb-40  text-base sm:text-xl text-white justify-center items-center text-center  font-normal mx-auto`}
          >
            Explore the voices of satisfaction. Our clients speak through 5
            million reviews, sharing stories of success and partnership.
          </p>
        </div>
      </div>
      <div className="relative flex sm:mr-0 mr-[30px] sm:ml-20 top-56">
        <div className="absolute sm:bottom-0 bottom-[70px] left-0">
          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
