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
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <section className="relative" id="footer">
      <div className="md:p-20 p-20 mt-40 ">
        <div
          className=" absolute black-shadow justify-center flex-col md:top-[90px] top-[120px] md:w-[50%] w-[64%] end-0 rounded-l-3xl h-[13%] sm:h-[25%]  bg-tbg"
          data-aos="fade-left"
        >
          <h3
            style={{
              fontWeight: "400",
            }}
            className={`${textStyles.b_heading} tracking-wide md:tracking-widest md:pl-8 pl-4 pt-2 md:pt-4 md:text-base text-xs  text-white`}
          >
            WE ARE HERE FOR YOU
          </h3>

          <h1
            style={{
              fontWeight: "700",
            }}
            className={`${textStyles.b_heading} md:pl-8 md:tracking-widest tracking-[4px] md:text-2xl sm:text-base text-sm  pl-4  font-bold  text-white`}
          >
            Let&apos;s Get Back To Work
          </h1>
          <p
            style={{
              fontFamily: "Hind Madurai",
            }}
            className={`${textStyles.b_para} md:pl-8 md:tracking-widest md:pb-0 pb-4 tracking-wide pl-4 font-bold md:text-base sm:text-[12px] text-sm sm:w-[90%] w-[100%] text-white`}
          >
            Fuelled with inspiration and armed with strategic insights,
            let&apos;s embark on the journey of progress together. It&apos;s
            time to roll up our sleeves{" "}
          </p>
        </div>
      </div>

      <div
        style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover" }}
        className="flex justify-between pt-10 sm:pt-14 md:pt-20 pr-6 sm:pr-10 md:pr-20 pl-10 sm:pl-14 md:pl-20 "
      >
        <div className="flex flex-col mt-6 md:mt-8 ">
          <div className="flex">
            <img
              src={logo2}
              alt="logo2"
              className="md:w-[60%] w-[40%] sm:h-[70%] md:mb-4 md:ml-4"
            />
            <div className="md:w-[60%] w-[40%] sm:h-[70%] ml-2 md:ml-4 mb-2 md:mb-4">
              <img src={cmi} alt="cmi" className="md:mt-2 mt-2" />
            </div>
          </div>

          <div className="md:mb-4 mb-2  md:mt-4 md:ml-10">
            <EmailContact />
          </div>
        </div>

        <div className="md:ml-32  md:mt-10 mt-8 w-[70%] md:w-[50%] ">
          <h1
            style={{ fontFamily: "Montserrat", fontWeight: "600" }}
            className={`${textStyles.b_heading} text-black text-[10px] sm:text-base md:text-xl md:mb-8 mb-4  `}
          >
            Service
          </h1>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {chunkArray(services2, 5).map((chunk, index) => (
              <ul
                className="md:min-w-[30%]  md:w-auto "
                key={index}
                style={{ listStyle: "none", marginRight: "2rem" }}
              >
                {chunk.map((service) => (
                  <li
                    className=" md:mb-6 mb-2 md:text-base sm:text-[12px] text-[7px]  "
                    key={service.id}
                    style={{
                      fontFamily: "Hind Madurai",
                    }}
                  >
                    {service.title}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        <div className=" md:w-[50%] sm:w-[65%] w-[80%] mt-8 md:mt-10">
          <h2
            style={{ fontFamily: "Montserrat", fontWeight: "600" }}
            className={`${textStyles.b_heading} text-black md:text-xl sm:text-base text-[10px] mb-4 md:mb-8  `}
          >
            Stay Connected
          </h2>
          <div className="flex flex-col ">
            <div className="flex md:mb-4 mb-4">
              <img
                src={gps}
                alt="gps "
                className="md:w-[22px] w-[18px] h-[18px] md:h-[22px]"
              />
              <p
                style={{ fontFamily: "Hind Madurai" }}
                className="md:ml-4 ml-4 md:text-base sm:text-[12px] text-[7px] md:w-[70%]"
              >
                151/16-B, Doon Vihar, Rajpur Road, Jakhan Dehradun - 248001 (UK)
              </p>
            </div>
            <div className="flex md:mb-4 mb-4 md:text-base sm:text-[12px] text-[7px] ">
              <img
                src={phone}
                alt="phone"
                className="w-[18px] h-[18px]  md:w-[22px]  md:h-[22px]"
              />
              <a
                href="tel:+91 7454802551"
                className="md:ml-4 ml-4 hover:text-blue-500 hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                +91 7454802551
              </a>
            </div>
            <div className="flex md:mb-10 mb-8 md:text-base text-[7px] md:w-[70%] ">
              <img
                src={mail}
                alt="mail"
                className="w-[18px] h-[18px] md:w-[22px]  md:h-[22px]"
              />
              <a
                href="mailto:info@anyasoftek.in"
                target="_blank"
                rel="noreferrer"
                style={{ fontFamily: "Hind Madurai" }}
                className="md:ml-4 ml-4 hover:text-blue-500 hover:underline"
              >
                info@anyasoftek.in
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:ml-6 ml-4 md:mb-2 md-w-[50%] w-[30%] md:mt-10 mt-8 ">
          <h2
            style={{ fontFamily: "Montserrat", fontWeight: "600" }}
            className={`${textStyles.b_heading} text-black md:text-xl sm:text-base text-[10px] md:mb-8 mb-4 `}
          >
            Socials
          </h2>
          <div className="flex">
            <button className="transition-transform hover:scale-110 ">
              <img
                src={twitter}
                alt="twitter"
                className="md:w-[44px] w-[45px]"
              />
            </button>
            <button className="transition-transform hover:scale-110">
              <a
                href="https://www.linkedin.com/company/ascspl/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={link}
                  alt="linkedin"
                  className="md:w-[44px] w-[45px]"
                />
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
