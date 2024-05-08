import { useState } from "react";
import { services2 } from "../constants";
import { motion } from "framer-motion";
import textStyle from "../textstyles/textstyle";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ServicePage = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  // const [isOpen, setIsOpen] = useState(false);
  const [hoveredCardIndex, setHoveredCardIndex] = useState(null);
  const [hoveredCardIndex2, setHoveredCardIndex2] = useState(null);
  return (
    <section
      id="services"
      className="flex justify-center text-center relative flex-col md:mb-32"
    >
      <div className="flex flex-col md:mb-10 ml-6 mt-6 md:ml-32 md:mr-20 md:mt-4 md:flex-row justify-between">
        <div className=" flex flex-col justify-center text-center relative max-w-3xl">
          <h3
            style={{ fontFamily: "Montserrat" }}
            className={`${textStyle.g_heading} font-montserrat md:text-2xl sm:text-2xl lg:text-2xl tracking-widest justify-start`}
            data-aos="fade-right"
          >
            SERVICES
          </h3>

          <h2
            style={{ fontFamily: "Montserrat" }}
            className={`${textStyle.b_heading} font-montserrat md:text-5xl sm:text-4xl lg:text-5xl tracking-widest  justify-start`}
            data-aos="fade-right"
          >
            What We Do
          </h2>

          <div
            className="h-auto max-w-2xl  text-center flex justify-center mt-4"
            data-aos="fade-right"
          >
            {" "}
            <p
              style={{ fontFamily: "Mulish" }}
              className="font-poppins font-normal text-left md:text-left  text-l px-2 md:px-0"
            >
              At ASCSPL, we propel businesses towards success with our strategic
              expertise, cutting-edge solutions, offered services and an
              unwavering commitment to excellence.
            </p>
          </div>

          <div className="flex md:mt-10" data-aos="flip-down">
            <motion.div className="flex  justify-center mr-4  ">
              {services2.slice(0, 4).map((service) => (
                <motion.div
                  key={service.id}
                  style={{
                    borderRadius: "1rem",
                    border: " 1px solid #0871BE ",
                  }}
                  onHoverStart={() => setHoveredCardIndex(service.id)}
                  onHoverEnd={() => setHoveredCardIndex(null)}
                  layout
                  transition={{ layout: { duration: 0.6, type: "spring" } }}
                  className="flex shadow-lg cursor-pointer justify-center md:w-[80%] md:pt-[1rem] items-center md:pb-4 text-center flex-col  w-[50%] md:mr-20 md:pl-[1rem] md:pr-[1rem] border-2"
                >
                  <motion.img
                    layout
                    src={service.icon}
                    alt={service.title}
                    className="md:w-[50px]  md:h-[50px]"
                  />
                  <h3 className="   md:w-[180px] w-[80%] border-b border-gray-600 text-black font-Montserrat text-lg md:text-xl">
                    {service.title}
                  </h3>
                  {hoveredCardIndex === service.id && (
                    <motion.div>
                      <p className="mt-2  text-black md:w-[220px]  font-Mulish text-left md:text-left text-xs md:text-xs font-normal leading-normal tracking-wide">
                        {service.content}
                      </p>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      <div className="flex md:mt-10 md:ml-32" data-aos="flip-down">
        <motion.div className="flex  justify-center mr-4  ">
          {services2.slice(4).map((service) => (
            <motion.div
              style={{
                borderRadius: "1rem",
                border: " 1px solid #0871BE ",
              }}
              key={service.id}
              onHoverStart={() => setHoveredCardIndex2(service.id)}
              onHoverEnd={() => setHoveredCardIndex2(null)}
              layout
              transition={{ layout: { duration: 0.6, type: "spring" } }}
              className="flex shadow-lg cursor-pointer justify-center  md:pt-[1rem] items-center md:pb-4 text-center flex-col md:w-[80%] w-[50%] md:mr-20 md:pl-[1rem] md:pr-[1rem] border-2"
            >
              <motion.img
                layout
                src={service.icon}
                alt={service.title}
                className="md:w-[50px]  md:h-[50px]"
              />
              <h3 className="   md:w-[180px] w-[80%] border-b border-gray-600 text-black font-Montserrat text-lg md:text-xl">
                {service.title}
              </h3>
              {hoveredCardIndex2 === service.id && (
                <motion.div>
                  <p className="mt-2  text-black md:w-[220px]  font-Mulish text-left md:text-left text-xs md:text-xs font-normal leading-normal tracking-wide">
                    {service.content}
                  </p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicePage;
