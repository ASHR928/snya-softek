import textStyle from "../textstyles/textstyle";
import CardCarousel from "../Carousel/CardCarousel";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <section id="projects" className="flex justify-center text-center flex-col">
      <div
        className="flex justify-center items-center flex-col mx-4 md:mx-8"
        data-aos="fade-right"
      >
        <h3
          style={{ letterSpacing: "0.5rem" }}
          className={`${textStyle.g_heading} mt-2 md:mt-4 text-base md:text-xl tracking-widest leading-normal`}
        >
          Past Triumphs, Future Innovations
        </h3>
        <h1
          style={{ letterSpacing: "0.4rem" }}
          className={`${textStyle.b_heading} mt-2 md:mt-4 tracking-widest text-3xl md:text-5xl`}
        >
          OUR STORIED JOURNEY AT ANYA SOFTEK
        </h1>
        <p
          style={{ letterSpacing: "0.3rem" }}
          className={`${textStyle.b_para} w-full md:w-[80%] tracking-widest mt-4 md:mt-8 text-sm md:text-base leading-normal`}
        >
          Step into the legacy of success with ASCPL as we proudly showcase our
          past projects. Each venture is a testament to our commitment to
          excellence and innovation. From groundbreaking web and mobile app
          development to creating unforgettable brand identities.
        </p>
      </div>
      <div className="mt-4 md:mt-8 pb-8">
        <CardCarousel />
      </div>
    </section>
  );
};

export default Projects;
