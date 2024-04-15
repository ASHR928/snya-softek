import React from "react";
import { services } from "../constants";
import EmailContact from "../contact/emailContact";

const Home = () => {
  return (
    <section
      id="home"
      className="mt-28 flex flex-col mx-auto px-4 sm:px-6 lg:px-8 justify-center text-center">
      <div className="flex flex-col">
        <div className="mt-4">
          <h3
            style={{
              fontFamily: "Montserrat",
              letterSpacing: "5px",
              fontSize: "30px",
              fontWeight: "500",
            }}
            className="text-tertiary font-medium">
            WE ARE ANYA SOFTEK
          </h3>
        </div>
        <div className="mx-auto text-center justify-center items-center max-w-7xl">
          <h1
            style={{
              fontFamily: "Montserrat",
            }}
            className="text-black tracking-widest max-w-5xl text-6xl font-normal">
            BRINGING SOFTWARE IDEAS TO LIVE
          </h1>
        </div>
        <div>
          <p
            style={{
              fontFamily: "Hind Madurai",
              letterSpacing: "5%",
            }}
            className="mx-auto max-w-4xl text-center text-xl justify-center items-center">
            A pioneering Indian company with 12 years of expertise in software
            consultancy. Based in Dehradun, Uttarakhand, ASCSPL excels in web
            development, mobile app development, branding, UI/UX, and cloud
            solutions. Experience innovation and excellence with ASCSPL – your
            trusted partner in the digital realm!
          </p>
        </div>
      </div>
      <div className="mx-auto flex  justify-center gap-8 mt-20 mb-20">
        {services.map((service) => (
          <div
            key={service.id}
            className="flex items-center  flex-col transition-transform hover:scale-110"
            style={{ width: "25%" }}>
            <img
              style={{ width: "70%" }}
              src={service.icon}
              alt={service.title}
              className=" h-auto mb-2 cursor-pointer" // Adjust width
            />
            <div className="flex flex-col justify-center">
              <p className="font-montserrat text-lg text-center">
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
