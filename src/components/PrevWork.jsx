import textStyles from "../textstyles/textstyle";
import Slider from "../Carousel/Slider";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const PrevWork = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <section className="flex-col flex mt-14 ">
      <div className="flex flex-col mx-14" data-aos="fade-up">
        <h1
          className={`${textStyles.g_heading} tracking-wide sm:tracking-widest uppercase mb-2 text-2xl sm:text-5xl`}
        >
          Our Esteemed Clients
        </h1>

        <p
          className={`${textStyles.b_para} text-sm max-w-5xl sm:text-base md:text-lg`}
        >
          We take pride in collaborating with visionary organizations across
          industries, transforming challenges into opportunities. Join our
          distinguished clientele and experience the impact of innovative
          solutions tailored to elevate your business in the digital landscape.
        </p>
      </div>

      <div className="md:mt-4 mt-4 mr-4 md:pr-6 mb-8 md:max-w-full">
        <Slider />
      </div>
    </section>
  );
};

export default PrevWork;
