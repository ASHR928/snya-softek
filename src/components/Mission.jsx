import React from "react";
import Circle from "../customs/Circle";

const Mission = () => {
  return (
    <section className="flex justify-start text-center relative">
      <div className="relative w-full">
        <div className="ml-40 mt-40 flex flex-col justify-start text-center mb-40 max-w-4xl relative">
          <h3
            style={{ letterSpacing: "0.5rem" }}
            className="flex justify-start font-montserrat font-normal text-tcolor pr-8 text-2xl">
            ABOUT US
          </h3>
          <h1
            style={{ letterSpacing: "0.5rem" }}
            className="mt-5 flex justify-start font-montserrat font-normal text-black pr-8 text-6xl">
            Our Mission
          </h1>
          <div className="w-[594px] h-[390px] text-center flex justify-center mt-10">
            <p className="justify-center font-poppins font-normal text-left tracking-wide text-black pr-8 leading-9 text-xl">
              To make software development simple and accessible. With a
              collective experience of around 13 years in the industry, we
              embark on every project with a commitment to excellence that goes
              beyond just coding and design – it's about crafting digital
              experiences that leave a lasting impression. We understand that
              every project is a unique opportunity to create something
              extraordinary. From concept to execution, we are committed to
              delivering solutions that not only meet but exceed your
              expectations.
            </p>
          </div>
        </div>
        <Circle
          width="600px"
          height="600px"
          top="118px"
          left="1200px"
          className="bg-white"
        />
      </div>
    </section>
  );
};

export default Mission;
