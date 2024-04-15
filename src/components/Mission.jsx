import React from "react";
import Circle from "../customs/Circle";
import frame1 from "../assets/frame1.svg";
import frame2 from "../assets/frame2.svg";
import frame3 from "../assets/frame3.svg";
import frame4 from "../assets/frame4.svg";

const Mission = () => {
  return (
    <section className="flex justify-start text-center relative" id="mission">
      <div className="relative  flex">
        <div className="ml-32 mt-32 flex flex-col justify-start text-center mb-40  relative">
          <h3
            style={{ fontfamily: "Montserrat", letterSpacing: "0.5rem" }}
            className="flex justify-start font-montserrat font-normal text-tcolor pr-8 text-xl">
            ABOUT US
          </h3>
          <h2
            style={{ fontfamily: "Montserrat", letterSpacing: "0.5rem" }}
            className="mt-0 flex justify-start font-montserrat font-normal text-black pr-8 text-4xl">
            Our Mission
          </h2>
          <div className="max-w-l text-center flex justify-center mt-10 ">
            <p
              style={{
                fontFamily: "Hind Madurai",
                letterSpacing: "2.2px",

                textAlign: "justify",
              }}
              className="justify-center max-w-xl   font-normal text-left  text-black pr-8">
              To make software development simple and accessible.
              <br /> With a collective experience of around 13 years in the
              industry, we embark on every project with a commitment to
              excellence that goes beyond just coding and design – it's about
              crafting digital experiences that leave a lasting impression .
              <br /> We understand that every project is a unique opportunity to
              create something extraordinary. From concept to execution, we are
              committed to delivering solutions that not only meet but exceed
              your expectations.
            </p>
          </div>
        </div>
        <div className="max-w-xl mx-auto">
          <div className="max-w-4xl mx-auto mt-32 px-4 lg:ml-12 lg:px-0 flex flex-col relative z-10">
            <div className="flex flex-wrap justify-center">
              <img
                src={frame3}
                alt="frame3"
                className="max-w-full h-auto lg:mt-6 lg:mr-2  lg:mb-0"
                style={{ maxHeight: "175px" }}
              />
              <img
                src={frame2}
                alt="frame2"
                className="max-w-full h-auto lg:mt-20 lg:mb-0"
                style={{ maxHeight: "125px" }}
              />
            </div>
            <div className="flex flex-wrap justify-center">
              <img
                src={frame4}
                alt="frame4"
                className="max-w-full h-auto mb-4 lg:mt-2  lg:mr-2   lg:mb-0"
                style={{ maxHeight: "125px" }}
              />
              <img
                src={frame1}
                alt="frame1"
                className="max-w-full h-auto lg:mt-2 mb-4 lg:mb-0"
                style={{ maxHeight: "200px" }}
              />
            </div>
          </div>

          <Circle
            width="400px"
            height="400px"
            top="118px"
            left="780px"
            className="bg-circlebg"
          />
        </div>
      </div>
    </section>
  );
};

export default Mission;
