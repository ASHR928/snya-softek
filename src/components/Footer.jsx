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
import { services2 } from "../constants";
import bg from "../assets/home/bg.svg";
const Footer = () => {
  return (
    <section className="relative">
      <div className="p-36">
        <div className=" absolute black-shadow justify-center flex-col  w-[1500px] end-0 rounded-l-3xl  h-[216px] bg-tbg">
          <h3
            style={{ letterSpacing: "0.4rem" }}
            className={`${textStyles.b_heading} pl-8 pt-8 text-2xl text-white`}>
            WE ARE HERE FOR YOU
          </h3>
          <h1
            style={{ letterSpacing: "0.4rem" }}
            className={`${textStyles.b_heading} pl-8 font-bold text-4xl text-white`}>
            Let’s Get Back To Work
          </h1>
          <p
            style={{ letterSpacing: "0.3rem" }}
            className={`${textStyles.b_para} pl-8 font-bold text-l w-[55%] text-white`}>
            Fuelled with inspiration and armed with strategic insights, let's
            embark on the journey of progress together. It's time to roll up our
            sleeves{" "}
          </p>
        </div>
      </div>

      <div
        style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover" }}
        className="flex justify-between pt-8 mt-4">
        <div className="flex flex-col ml-32 mt-8">
          <div className="flex flex-col">
            <img src={logo2} alt="logo2" className="w-[267px] h-[123px] pb-4" />
            <div className="w-[200px] h-[123px] ml-4 mb-4">
              <img src={cmi} alt="cmi" />
            </div>
          </div>
          <div className="mb-4 mt-4 ml-4">
            <EmailContact />
            <div className="flex mb-8  mt-12">
              <button className="transition-transform hover:scale-110">
                <img src={twitter} alt="twitter" className="mr-8" />
              </button>
              <button className="transition-transform hover:scale-110">
                <img src={link} alt="linkedin" />
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-32 mb-10">
          <div>
            <h1
              className={`${textStyles.b_heading} text-black mb-8 text-2xl font-bold`}>
              Service
            </h1>
            <ul>
              {services2.map((service) => (
                <li className="mb-4" key={service.id}>
                  {service.title}
                </li>
              ))}
            </ul>
          </div>
          <div className="mr-52 ml-32">
            <h1
              className={`${textStyles.b_heading} text-black mb-8 text-2xl font-bold`}>
              Stay Conected
            </h1>
            <div className="flex flex-col">
              <div className="flex p-2">
                <img src={gps} alt="gps " className="w-[33px] h-[33px]" />
                <p className=" w-[300px] ml-4  h-[60px]">
                  151/16-B, Doon Vihar, Rajpur Road, Jakhan Dehradun - 248001
                  (UK)
                </p>
              </div>
              <div className="flex p-2">
                <img src={phone} alt="phone" />
                <span className="ml-4 ">+91 7454802551</span>
              </div>
              <div className="flex p-2">
                <img src={mail} alt="mail" />
                <span className="ml-4 ">info@anyasoftek.in</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
