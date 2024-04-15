import React from "react";
import link from "../assets/link.svg";
import twitter from "../assets/twitter.svg";
import logo2 from "../assets/logo2.svg";
import EmailContact from "../contact/emailContact";
import textStyles from "../textstyles/textstyle";
import gps from "../assets/gps.svg";
import phone from "../assets/phone.svg";
import cmi from "../assets/cmi.svg";
import mail from "../assets/mail.svg";
import { chunkArray } from "../utils/chunkArray";
import { services2 } from "../constants";
import bg from "../assets/home/bg.svg";
const Footer = () => {
  return (
    <section className="relative" id="footer">
      <div className="p-20 ">
        <div className=" absolute black-shadow justify-center flex-col  w-[50%] end-0 rounded-l-3xl  h-[25%] bg-tbg">
          <h3
            style={{
              letterSpacing: "0.4rem",
              fontWeight: "400",
              fontSize: "1rem",
            }}
            className={`${textStyles.b_heading} pl-8 pt-4 text-white`}>
            WE ARE HERE FOR YOU
          </h3>
          <h1
            style={{
              letterSpacing: "0.4rem",
              fontWeight: "700",
              fontSize: "1.5rem",
            }}
            className={`${textStyles.b_heading} pl-8  font-bold  text-white`}>
            Let’s Get Back To Work
          </h1>
          <p
            style={{
              letterSpacing: "0.3rem",
              fontFamily: "Hind Madurai",
              fontSize: "0.7rem",
            }}
            className={`${textStyles.b_para} pl-8 font-bold  w-[90%] text-white`}>
            Fuelled with inspiration and armed with strategic insights, let's
            embark on the journey of progress together. It's time to roll up our
            sleeves{" "}
          </p>
        </div>
      </div>

      <div
        style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover" }}
        className="flex justify-between pt-20 pr-20 pl-20 ">
        <div className="flex flex-col mt-8 ">
          <div className="flex ">
            <img
              src={logo2}
              alt="logo2"
              className="w-[60%] h-[70%] mb-4  ml-4"
            />
            <div className="w-[60%] h-[70%]  ml-4 mb-4">
              <img src={cmi} alt="cmi" className="mt-2" />
            </div>
          </div>
          <div className="mb-4  mt-4 ml-4">
            <EmailContact />
          </div>
        </div>

        <div className="ml-32 mt-10 w-[50%] ">
          <h1
            style={{ fontFamily: "Montserrat", fontWeight: "600" }}
            className={`${textStyles.b_heading} text-black mb-8  `}>
            Service
          </h1>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {chunkArray(services2, 5).map((chunk, index) => (
              <ul
                key={index}
                style={{ listStyle: "none", marginRight: "2rem" }}>
                {chunk.map((service) => (
                  <li
                    key={service.id}
                    style={{
                      fontSize: "0.8rem",
                      marginBottom: "1rem",
                      fontFamily: "Hind Madurai",
                    }}>
                    {service.title}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        <div className=" w-[50%] mt-10">
          <h2
            style={{ fontFamily: "Montserrat", fontWeight: "600" }}
            className={`${textStyles.b_heading} text-black mb-8  `}>
            Stay Connected
          </h2>
          <div className="flex flex-col ">
            <div className="flex mb-10 ">
              <img src={gps} alt="gps " className="w-[33px] h-[33px]" />
              <p
                style={{ fontFamily: "Hind Madurai", fontSize: "0.8rem" }}
                className="ml-4 w-[70%]">
                151/16-B, Doon Vihar, Rajpur Road, Jakhan Dehradun - 248001 (UK)
              </p>
            </div>
            <div className="flex mb-4">
              <img src={phone} alt="phone" />
              <span style={{ fontSize: "0.8rem" }} className="ml-4  ">
                +91 7454802551
              </span>
            </div>
            <div className="flex mb-10">
              <img src={mail} alt="mail" />
              <span
                style={{ fontFamily: "Hind Madurai", fontSize: "0.8rem" }}
                className="ml-4">
                info@anyasoftek.in
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col mb-2 mt-8  ">
          <h2
            style={{ fontFamily: "Montserrat", fontWeight: "600" }}
            className={`${textStyles.b_heading} text-black mb-8 `}>
            Socials
          </h2>
          <div className="flex">
            <button className="transition-transform hover:scale-110 ">
              <img src={twitter} alt="twitter" className="w-[80%]" />
            </button>
            <button className="transition-transform hover:scale-110">
              <img src={link} alt="linkedin" className="w-[80%]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
