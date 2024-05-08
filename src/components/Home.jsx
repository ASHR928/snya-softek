import { useEffect } from "react";
import { services } from "../constants";
import HomeEmail from "../contact/HomeEmail";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <section className="mt-28 flex flex-col mx-auto px-4 sm:px-6 lg:px-8 justify-center text-center">
      <div className="flex flex-col">
        <div className="mt-4" data-aos="fade-down">
          <h3
            style={{
              fontFamily: "Montserrat",
              letterSpacing: "5px",

              fontWeight: "700",
            }}
            className="text-tertiary text-xs  sm:text-2xl md:text-2xl  font-bold"
          >
            ANYA SOFTEK
          </h3>
          <h3
            style={{
              fontFamily: "Montserrat",
              letterSpacing: "8px",

              fontWeight: "500",
            }}
            className="text-tertiary text-xs  sm:text-2xl md:text-xl  font-bold"
          >
            CONSULTANCY SERVICES [P] Ltd
          </h3>
        </div>
        <div
          className="mx-auto text-center justify-center items-center max-w-7xl"
          data-aos="fade-down"
        >
          <h1
            style={{
              fontFamily: "Montserrat",
            }}
            className="text-black max-w-5xl  tracking-widest text-2xl sm:text-3xl md:text-6xl font-normal"
            data-aos="fade-down"
          >
            BRINGING SOFTWARE IDEAS TO LIVE
          </h1>
        </div>

        <div>
          <p
            style={{
              fontFamily: "Hind Madurai",
              letterSpacing: "5%",
            }}
            className="mx-auto max-w-4xl text-center text-l  md:text-xl justify-center items-center"
            data-aos="fade-in"
          >
            A pioneering Indian company with 12 years of expertise in software
            consultancy. Based in Dehradun, Uttarakhand, ASCSPL excels in web
            development, mobile app development, branding, UI/UX, and cloud
            solutions. Experience innovation and excellence with ASCSPL – your
            trusted partner in the digital realm!
          </p>
        </div>
      </div>
      <div className="mx-auto flex flex-wrap justify-center gap-4 md:gap-8 mt-20 mb-20">
        {services?.map((service) => (
          <div
            key={service.id}
            className="flex flex-col items-center w-full sm:w-1/2 sm:flex-1 md:w-[25%] transition-transform hover:scale-110"
            data-aos="flip-up"
          >
            <img
              src={service.icon}
              alt={service.title}
              className="mb-2 sm:w-[20px] md:w-[60px] cursor-pointer"
            />
            <p className="font-montserrat text-sm md:text-base text-center">
              {service.title}
            </p>
          </div>
        ))}
      </div>

      <div
        className="mx-auto flex flex-wrap justify-center gap-8 mt-15 mb-20"
        data-aos="fade-right"
      >
        <HomeEmail />
      </div>
    </section>
  );
};

export default Home;
