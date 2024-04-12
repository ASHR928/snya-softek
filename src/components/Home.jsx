import React from "react";
import { services } from "../constants";
import EmailContact from "../contact/emailContact";

const Home = () => {
  return (
    <section
      id="home"
      className="mt-28 flex flex-col justify-center text-center">
      <div className=" max-w-4xl mx-auto  item-center flex flex-col  ">
        <h3
          className="font-montserrat font-medium text-tertiary pr-8  text-2xl  "
          style={{ letterSpacing: "0.5rem" }}>
          WE ARE ANYA SOFTEK
        </h3>
        <h1 className="font-montserrat font-normal m-5  text-6xl  ">
          BRINGING SOFTWARE IDEAS TO LIVE
        </h1>
        <p
          style={{ wordSpacing: "0.3rem" }}
          className="font-poppins mt-5px font-normal text-black text-center mx-auto text-xl ">
          A pioneering Indian company with 12 years of expertise in software
          consultancy. Based in Dehradun, Uttarakhand, ASCSPL excels in web
          development, mobile app development, branding, UI/UX, and cloud
          solutions. Experience innovation and excellence with ASCSPL – your
          trusted partner in the digital realm!
        </p>
      </div>
      <div className=" mx-auto flex flex-wrap justify-center gap-8 mt-20 mb-20 ">
        {services.map((service) => (
          <div
            key={service.id}
            className="flex flex-col w-40 items-center  transition-transform hover:scale-110 ">
            <img
              src={service.icon}
              alt={service.title}
              className="w-81px h-80px mb-2  cursor-pointer "
            />
            <div className="flex flex-wrap justify-center">
              <p className="font-poppins  flex-wrap text-2xl text-center">
                {service.title}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mx-auto flex flex-wrap justify-center gap-8 mt-15 mb-20">
        <EmailContact />
      </div>
    </section>
  );
};

export default Home;
