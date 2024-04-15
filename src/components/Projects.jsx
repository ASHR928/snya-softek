import React from "react";
import textStyle from "../textstyles/textstyle";
import { projects } from "../constants";
import ProCircle from "../customs/ProCircle";
import textStyles from "../textstyles/textstyle";
import CardCarousel from "../Carousel/CardCarousel";

const Projects = () => {
  return (
    <section id="projects" className="flex justify-center text-center flex-col">
      <div className="flex justify-center items-center flex-col mx-4 md:mx-8">
        <h3
          style={{ letterSpacing: "0.5rem" }}
          className={`${textStyle.g_heading} mt-2 md:mt-4 text-base md:text-xl tracking-widest leading-normal`}>
          Past Triumphs, Future Innovations
        </h3>
        <h1
          style={{ letterSpacing: "0.4rem" }}
          className={`${textStyle.b_heading} mt-2 md:mt-4 tracking-widest text-3xl md:text-5xl`}>
          OUR STORIED JOURNEY AT ANYA SOFTEK
        </h1>
        <p
          style={{ letterSpacing: "0.3rem" }}
          className={`${textStyle.b_para} w-full md:w-[80%] tracking-widest mt-4 md:mt-8 text-sm md:text-base leading-normal`}>
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
{
  /* <div className="pt-40">
{projects.map((project, index) => (
  <div
    key={project.id}
    className={`flex items-center  ${
      index % 2 === 0 ? "justify-start" : "justify-end"
    }`}>
    {project.Number % 2 === 0 ? (
      <>
        <div>
          <h2
            style={{ letterSpacing: "0.8rem" }}
            className={` ${textStyles.bl_heading} text-6xl tracking-wider mb-2`}>
            {project.title}
          </h2>
          <p
            style={{ letterSpacing: "0.1rem" }}
            className={`${textStyles.b_para} max-w-4xl text-xl`}>
            {project.content}
          </p>
        </div>

        <span
          className={`text-9xl font-bold ${textStyles.num_style} ${
            index % 2 === 0 ? "mr-5" : "ml-5"
          }`}>
          {project.Number}
        </span>
      </>
    ) : (
      <>
        <div
          className={`text-9xl font-bold ${textStyles.num_style} ${
            index % 2 === 0 ? "mr-5" : "ml-5"
          }`}>
          {project.Number}
        </div>
        <div>
          <h2
            style={{ letterSpacing: "0.8rem" }}
            className={` ${textStyles.bl_heading}  text-6xl  mb-2`}>
            {project.title}
          </h2>
          <p
            style={{ letterSpacing: "0.1rem" }}
            className={`${textStyles.b_para} max-w-4xl text-xl`}>
            {project.content}
          </p>
        </div>
      </>
    )}
  </div>
))}
</div> */
}
