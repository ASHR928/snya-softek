import React, { useState } from "react";

import { services2 } from "../constants";
import img1 from "../assets/services1/img1.svg";
import img2 from "../assets/services1/img2.svg";
import { motion } from "framer-motion";
import textStyle from "../textstyles/textstyle";
import styles from "../style";

const ServicePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section
      id="services"
      className="flex justify-center text-center relative flex-col md:mb-20">
      <div className="flex flex-col ml-6 mt-6 md:ml-32 md:mr-20 md:mt-4 md:flex-row justify-between">
        <div className=" flex flex-col justify-center text-center relative max-w-3xl">
          <h3
            style={{ fontFamily: "Montserrat" }}
            className={`${textStyle.g_heading} font-montserrat md:text-2xl sm:text-2xl lg:text-2xl tracking-widest justify-start`}>
            SERVICES
          </h3>
          <h2
            style={{ fontFamily: "Montserrat" }}
            className={`${textStyle.b_heading} font-montserrat md:text-5xl sm:text-4xl lg:text-5xl tracking-widest  justify-start`}>
            What We Do
          </h2>
          <div className="h-auto max-w-2xl  text-center flex justify-center mt-4">
            <p
              style={{ fontFamily: "Mulish" }}
              className="font-poppins font-normal text-left md:text-left  text-l px-2 md:px-0">
              At ASCSPL, we propel businesses towards success with our strategic
              expertise, cutting-edge solutions, offered services and an
              unwavering commitment to excellence.
            </p>
          </div>
          <div className="flex md:mt-10">
            <motion.div className="flex  justify-center mr-4  ">
              {services2.slice(0, 4).map((service) => (
                <motion.div
                  style={{
                    borderRadius: "1rem",
                    border: " 1px solid #0871BE ",
                  }}
                  onClick={() => setIsOpen(!isOpen)}
                  layout
                  transition={{ layout: { duration: 0.6, type: "spring" } }}
                  className="flex shadow-lg cursor-pointer justify-center md:w-[240px] md:pt-[1rem] items-center md:pb-4 text-center flex-col md:w-[80%] w-[50%] md:mr-12 md:pl-[1rem] md:pr-[1rem] border-2">
                  <motion.img
                    layout
                    src={service.icon}
                    alt={service.title}
                    className="md:w-[50px]  md:h-[50px]"
                  />
                  <h3
                    layout
                    className="   md:w-[100px] w-[80%] border-b border-gray-600 text-black font-Montserrat text-lg md:text-xl">
                    {service.title}
                  </h3>
                  {isOpen && (
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

      {/* Right Section */}
      <div className="flex md:mt-10 md:ml-32">
        <motion.div className="flex  justify-center mr-4  ">
          {services2.slice(4).map((service) => (
            <motion.div
              style={{
                borderRadius: "1rem",
                border: " 1px solid #0871BE ",
              }}
              onClick={() => setIsOpen(!isOpen)}
              layout
              transition={{ layout: { duration: 0.6, type: "spring" } }}
              className="flex shadow-lg cursor-pointer justify-center md:w-[240px] md:pt-[1rem] items-center md:pb-4 text-center flex-col md:w-[80%] w-[50%] md:mr-12 md:pl-[1rem] md:pr-[1rem] border-2">
              <motion.img
                layout
                src={service.icon}
                alt={service.title}
                className="md:w-[50px]  md:h-[50px]"
              />
              <h3
                layout
                className="   md:w-[180px] w-[80%] border-b border-gray-600 text-black font-Montserrat text-lg md:text-xl">
                {service.title}
              </h3>
              {isOpen && (
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

//<section
//   id="services"
//   className="flex justify-center mr-4 text-center relative flex-col mb-20">
//   <div className="flex relative flex-col md:flex-row justify-between">
//     <div className="md:ml-40 mt-20  flex flex-col justify-center text-center max-w-4xl relative">
//

//       <div className="flex flex-wrap justify-center md:justify-between mt-10">
//         {services2.slice(0, 4).map((service) => (
//           <div
//             key={service.id}
//             className="flex flex-col transition-transform hover:scale-110 cursor-pointer max-w-[394px] px-4 md:px-0">
//             <img
//               className="mt-10"
//               src={service.icon}
//               alt={service.title}
//               style={{ width: "65px", height: "65px" }}
//             />
//             <h3 className="mt-2 border-b border-gray-600 text-black font-montserrat text-xl md:text-2xl text-center md:text-left">
//               {service.title}
//             </h3>
//             <p className="mt-2 text-black font-poppins text-center md:text-left text-sm md:text-base font-normal leading-normal tracking-wide">
//               {service.content}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//     <div className="md:mr-40 md:pl-20  md:ml-20  md:mt-60 relative w-full md:w-[555px] md:h-[730px] hidden md:block">
//       <img src={img2} alt="img1" className="max-w-full h-auto" />
//     </div>
//   </div>

//   {/* Right Section */}
//   <div className="relative flex flex-col md:flex-row justify-between mt-10 md:mt-20">
//     <div className="md:ml-40 md:mr-2 max-w-[400px] mt-10 mx-auto hidden md:block">
//       <img
//         src={img1}
//         alt="img2"
//         className="max-w-full  md:max-w-none h-auto"
//       />
//     </div>

//     <div className="md:mr-40 flex flex-col justify-center text-center max-w-4xl relative service-section-right">
//       <div className="flex flex-wrap justify-center md:justify-between mt-10">
//         {services2.slice(4).map((service) => (
//           <div
//             key={service.id}
//             className="flex flex-col  transition-transform hover:scale-110 cursor-pointer max-w-[394px] px-4 md:px-0">
//             <img
//               className="mt-10"
//               src={service.icon}
//               alt={service.title}
//               style={{ width: "65px", height: "65px" }}
//             />
//             <h3 className="mt-2 border-b border-gray-600 text-black font-montserrat text-xl md:text-2xl text-center md:text-left">
//               {service.title}
//             </h3>
//             <p className="mt-2 text-black font-poppins text-center md:text-left text-sm md:text-base font-normal leading-normal tracking-wide">
//               {service.content}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   </div>
// </section>
