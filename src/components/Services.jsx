import React from "react";

import { services2 } from "../constants";
import img1 from "../assets/services1/img1.svg";
import img2 from "../assets/services1/img2.svg";
import textStyle from "../textstyles/textstyle";

const ServicePage = () => {
  return (
    <section
      id="services"
      className="flex justify-center mr-4 text-center relative flex-col mb-20">
      <div className="flex relative flex-col md:flex-row justify-between">
        <div className="md:ml-40 mt-20 md:mt-40 flex flex-col justify-center text-center max-w-4xl relative">
          <h3
            style={{ letterSpacing: "0.5rem" }}
            className={`${textStyle.g_heading} text-xl md:text-3xl justify-start`}>
            SERVICES
          </h3>
          <h1
            style={{ letterSpacing: "0.5rem" }}
            className={`${textStyle.b_heading} text-3xl md:text-7xl mt-4 justify-start`}>
            What We Do
          </h1>
          <div className="w-full md:w-[848px] h-auto md:h-[93px] text-center flex justify-center mt-10">
            <p className="justify-center font-poppins font-normal text-center md:text-left tracking-wide text-black leading-6 md:leading-9 text-sm md:text-xl px-4 md:px-0">
              At ASCSPL, we propel businesses towards success with our strategic
              expertise, cutting-edge solutions, offered services and an
              unwavering commitment to excellence.
            </p>
          </div>
          <div className="flex flex-wrap justify-center md:justify-between mt-10">
            {services2.slice(0, 4).map((service) => (
              <div
                key={service.id}
                className="flex flex-col transition-transform hover:scale-110 cursor-pointer max-w-[394px] px-4 md:px-0">
                <img
                  className="mt-10"
                  src={service.icon}
                  alt={service.title}
                  style={{ width: "65px", height: "65px" }}
                />
                <h3 className="mt-2 border-b border-gray-600 text-black font-montserrat text-xl md:text-2xl text-center md:text-left">
                  {service.title}
                </h3>
                <p className="mt-2 text-black font-poppins text-center md:text-left text-sm md:text-base font-normal leading-normal tracking-wide">
                  {service.content}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="md:mr-40 md:pl-20  md:ml-20  md:mt-60 relative w-full md:w-[555px] md:h-[730px] hidden md:block">
          <img src={img2} alt="img1" className="max-w-full h-auto" />
        </div>
      </div>

      {/* Right Section */}
      <div className="relative flex flex-col md:flex-row justify-between mt-10 md:mt-20">
        <div className="md:ml-40 md:mr-2 max-w-[400px] mt-10 mx-auto hidden md:block">
          <img
            src={img1}
            alt="img2"
            className="max-w-full  md:max-w-none h-auto"
          />
        </div>

        <div className="md:mr-40 flex flex-col justify-center text-center max-w-4xl relative service-section-right">
          <div className="flex flex-wrap justify-center md:justify-between mt-10">
            {services2.slice(4).map((service) => (
              <div
                key={service.id}
                className="flex flex-col  transition-transform hover:scale-110 cursor-pointer max-w-[394px] px-4 md:px-0">
                <img
                  className="mt-10"
                  src={service.icon}
                  alt={service.title}
                  style={{ width: "65px", height: "65px" }}
                />
                <h3 className="mt-2 border-b border-gray-600 text-black font-montserrat text-xl md:text-2xl text-center md:text-left">
                  {service.title}
                </h3>
                <p className="mt-2 text-black font-poppins text-center md:text-left text-sm md:text-base font-normal leading-normal tracking-wide">
                  {service.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicePage;
