import Circle from "../customs/Circle";
import frame1 from "../assets/frame1.svg";
import frame2 from "../assets/frame2.svg";
import frame3 from "../assets/frame3.svg";
import frame4 from "../assets/frame4.svg";
import { CardBody, CardContainer, CardItem } from "../Animation/3dCard";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Mission = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <section className="flex justify-start text-center relative" id="aboutUs">
      <div className="relative md:flex">
        <div
          className="md:ml-32 ml-4 mt-6 md:mt-32 flex flex-col justify-start text-center md:mb-40 relative"
          data-aos="fade-right"
        >
          <h3
            style={{ fontFamily: "Montserrat", letterSpacing: "0.5rem" }}
            className="flex justify-center md:justify-start font-montserrat font-normal text-tcolor md:pr-8 text-sm md:text-xl"
          >
            ABOUT US
          </h3>
          <h2
            style={{ fontFamily: "Montserrat", letterSpacing: "0.5rem" }}
            className="md:mt-0 flex justify-center md:justify-start mb-4 font-montserrat font-normal md:text-black sm:pr-2 sm:text-2xl md:pr-8 md:text-5xl"
          >
            Our Mission
          </h2>

          <div className="max-w-l text-center md:text-left flex justify-center md:justify-start md:mt-6">
            <p
              style={{
                fontFamily: "Hind Madurai",
                letterSpacing: "2.2px",
                textAlign: "justify",
              }}
              className="justify-center mr-4 md:max-w-xl sm:max-w-l font-normal text-left md:text-base text-sm text-black md:pr-8"
            >
              To make software development simple and accessible.
              <br /> With a collective experience of around 13 years in the
              industry, we embark on every project with a commitment to
              excellence that goes beyond just coding and design – it&apos;s
              about crafting digital experiences that leave a lasting
              impression.
              <br /> We understand that every project is a unique opportunity to
              create something extraordinary. From concept to execution, we are
              committed to delivering solutions that not only meet but exceed
              your expectations.
            </p>
          </div>
        </div>

        <CardContainer className="max-w-xl mx-auto md:ml-20 md:pl-8">
          <CardBody className="max-w-4xl group/card mx-auto md:mt-32 px-4 lg:ml-12 lg:px-0 flex flex-col relative z-10">
            <CardItem
              translateZ="100"
              className="flex flex-wrap justify-center"
            >
              <img
                style={{
                  borderRadius: "1rem",
                  border: " 1px solid #0871BE ",
                }}
                src={frame3}
                alt="frame3"
                className="md:max-w-full md:h-[175px] h-[80px] md:mt-0 mt-4 lg:mt-6 lg:mr-2  lg:mb-0"
                data-aos="fade-down-right"
              />
              <img
                style={{
                  borderRadius: "1rem",
                  border: " 1px solid #0871BE ",
                }}
                src={frame2}
                alt="frame2"
                className="md:max-w-full md:h-[125px] md:mt-0 mt-16 md:pt-0 md:ml-0 ml-2 h-auto lg:mt-20 lg:mb-0"
                data-aos="fade-down-left"
              />
            </CardItem>
            <CardItem className="flex flex-wrap justify-center">
              <img
                style={{
                  borderRadius: "1rem",
                  border: " 1px solid #0871BE ",
                }}
                src={frame4}
                alt="frame4"
                className="md:max-w-full md:h-[125px] h-[60px] md:mt-0 mt-2 md:mr-0 mr-2 lg:mt-2  lg:mr-2   lg:mb-0"
                data-aos="fade-up-right"
              />
              <img
                style={{
                  borderRadius: "1rem",
                  border: " 1px solid #0871BE ",
                }}
                src={frame1}
                alt="frame1"
                className="md:max-w-full  md:h-[200px] h-[60px] md:mt-0 mt-2 lg:mt-2 mb-4 lg:mb-0"
                data-aos="fade-up-left"
              />
            </CardItem>
          </CardBody>

          <Circle
            width="400px"
            height="400px"
            top="118px"
            left="850px"
            className="bg-circlebg"
          />
        </CardContainer>
      </div>
    </section>
  );
};

export default Mission;
