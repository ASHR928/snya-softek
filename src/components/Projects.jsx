import textStyle from "../textstyles/textstyle";
import CardCarousel from "../Carousel/CardCarousel";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import projectsBg from "../assets/projects-bg.svg";

const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <section
      id="projects"
      className="mt-4 flex justify-center text-center flex-col bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${projectsBg})` }}>
      <div
        className="flex justify-center items-center flex-col mx-4 md:mx-8"
        data-aos="fade-right">
        {/* <h3
          style={{ letterSpacing: "0.5rem" }}
          className={`${textStyle.g_heading} mt-2 md:mt-4 text-base md:text-xl tracking-wide sm:tracking-widest leading-normal`}
        >
          Past Triumphs, Future Innovations
        </h3> */}

        <h1
          style={{ letterSpacing: "0.4rem" }}
          className={`${textStyle.b_heading} text-white mt-2 md:mt-4 tracking-wide sm:tracking-widest text-3xl md:text-5xl`}>
          OUR PROJECTS
        </h1>

        {/* <p
          style={{ letterSpacing: "0.3rem" }}
          className={`${textStyle.b_para} w-full md:w-[80%] tracking-wide sm:tracking-widest mt-4 md:mt-8 mx-auto text-base leading-normal`}
        >
          Step into the legacy of success with ASCPL as we proudly showcase our
          past projects. Each venture is a testament to our commitment to
          excellence and innovation. From groundbreaking web and mobile app
          development to creating unforgettable brand identities.
        </p> */}
      </div>
      <div className="mt-8 md:mt-14 pb-8 relative" data-aos="zoom-out">
        <div className="absolute -top-3 left-2 sm:-top-3 sm:left-10 md:-top-6 md:left-16 w-[200px] sm:w-[310px] md:w-[510px] h-40 sm:h-52 md:h-80 rounded-xl border-4 border-white "></div>
        <div className="absolute bottom-8 sm:bottom-10 md:bottom-12 right-4 sm:right-8 md:right-14 w-[200px] sm:w-[310px] md:w-[510px] h-20 sm:h-32 md:h-40 border-4 rounded-xl border-white "></div>
        <div className="h-full w-full flex flex-row items-center mb-4 md:mb-10 ">
          <CardCarousel className="z-10" />
        </div>
      </div>
    </section>
  );
};

export default Projects;
