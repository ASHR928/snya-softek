import React from "react";
import { services } from "../constants";
import EmailContact from "../contact/emailContact";

const Home = () => {
  return (
    <section
      id="home"
      className="mt-28  flex flex-col justify-center text-center">
      <div className="flex flex-col">
        {/* <div className="Elipse"></div> */}
        <div className="mt-20">
          <h3
            style={{
              fontFamily: "Montserrat",
              letterSpacing: "5px",
              fontSize: "30px",
              fontWeight: "500",
            }}
            className=" text-tertiary  font-medium ">
            WE ARE ANYA SOFTEK
          </h3>
        </div>
        <div className="mx-auto text-center justify-center items-center max-w-7xl">
          <h1
            style={{
              fontFamily: "Montserrat",
              letterSpacing: "9px",
              fontSize: "65px",
              fontWeight: "400px",
              maxWidth: " 1598px;",
            }}
            className=" text-black  text-center justify-center items-center font-normal ">
            BRINGING SOFTWARE IDEAS TO LIVE
          </h1>
        </div>
        <div>
          <p
            style={{
              fontFamily: "Hind Madurai",
              letterSpacing: "5%",
              maxWidth: "1073px",
              maxBlockSize: "187px",
              fontSize: "26px",
            }}
            className=" mx-auto justify-left">
            A pioneering Indian company with 12 years of expertise in software
            consultancy. Based in Dehradun, Uttarakhand, ASCSPL excels in web
            development, mobile app development, branding, UI/UX, and cloud
            solutions. Experience innovation and excellence with ASCSPL – your
            trusted partner in the digital realm!
          </p>
        </div>
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
              <p className="font-montserrat  flex-wrap text-2xl text-center">
                {service.title}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mx-auto flex  flex-wrap justify-center gap-8 mt-15 mb-20">
        <EmailContact />
      </div>
    </section>
  );
};

export default Home;
