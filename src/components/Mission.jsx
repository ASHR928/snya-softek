import React from "react";
import Circle from "../customs/Circle";
import frame1 from "../assets/frame1.svg";
import frame2 from "../assets/frame2.svg";
import frame3 from "../assets/frame3.svg";
import frame4 from "../assets/frame4.svg";

const Mission = () => {
  return (
    <section className="flex justify-start text-center relative" id="mission">
      <div className="relative w-full flex">
        <div className="ml-40 mt-32 flex flex-col justify-start text-center mb-40 max-w-9xl relative">
          <h3
            style={{ fontfamily: "Montserrat", letterSpacing: "0.5rem" }}
            className="flex justify-start font-montserrat font-normal text-tcolor pr-8 text-2xl">
            ABOUT US
          </h3>
          <h2
            style={{ fontfamily: "Montserrat", letterSpacing: "0.5rem" }}
            className="mt-0 flex justify-start font-montserrat font-normal text-black pr-8 text-6xl">
            Our Mission
          </h2>
          <div className="w-[594px] h-[390px] text-center flex justify-center mt-10 pt-4">
            <p
              style={{
                fontFamily: "Hind Madurai",
                letterSpacing: "2.2px",
                fontSize: "22px",
                maxWidth: "594px",
                maxHeight: "390px",
                textAlign: "justify",
              }}
              className="justify-center   font-normal text-left  text-black pr-8">
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

        <div className=" flex flex-col relative mt-32 ml-96 z-10">
          <div className="flex ">
            <img src={frame3} alt="frame3" className="" />
            <img src={frame2} alt="frame2" className="ml-4  mt-20 pt-2" />
          </div>
          <div className="flex mb-20 ">
            <img src={frame4} alt="frame4" className="mb-32" />
            <img src={frame1} alt="frame1" className="ml-4 mt-2  " />
          </div>
        </div>

        <Circle
          width="500px"
          height="500px"
          top="118px"
          left="1200px"
          className="bg-circlebg"
        />
      </div>
    </section>
  );
};

export default Mission;
