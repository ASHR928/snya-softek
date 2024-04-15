import React from "react";

import { services2 } from "../constants";
import img1 from "../assets/services1/img1.svg";
import img2 from "../assets/services1/img2.svg";
import textStyle from "../textstyles/textstyle";
import styles from "../style";

const ServicePage = () => {
  return (
    <section
      id="services"
      className="flex justify-center text-center relative flex-col mb-20">
      <div className="flex flex-col md:ml-32 md:mr-20 md:mt-10 md:flex-row justify-between">
        <div className=" flex flex-col justify-center text-center relative max-w-3xl">
          <h3
            className={`${textStyle.g_heading} text-2xl tracking-widest justify-start`}>
            SERVICES
          </h3>
          <h1
            className={`${textStyle.b_heading} text-5xl tracking-widest  justify-start`}>
            What We Do
          </h1>
          <div className="h-auto max-w-2xl  text-center flex justify-center mt-4">
            <p className="font-poppins font-normal text-center md:text-left text-l px-4 md:px-0">
              At ASCSPL, we propel businesses towards success with our strategic
              expertise, cutting-edge solutions, offered services and an
              unwavering commitment to excellence.
            </p>
          </div>
          <div className="flex justify-center text-center md:w-[90%] relative  ">
            <div className="flex flex-wrap justify-center mt-4 mr-4 max-w-7xl  md:justify-between">
              {services2.slice(0, 4).map((service) => (
                <div
                  key={service.id}
                  className="flex flex-col  md:w-[50%] mt-6 transition-transform hover:scale-110 cursor-pointer   md:px-0">
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-[33px] h-[33px]"
                  />
                  <h3 className="mt-2 md:w-[80%] border-b border-gray-600 text-black font-montserrat text-lg md:text-xl text-center md:text-left">
                    {service.title}
                  </h3>
                  <p className="mt-2  text-black w-[98%] font-poppins text-left  text-xs md:text-sm font-normal leading-normal tracking-wide">
                    {service.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="">
          <img
            src={img2}
            alt="img2"
            className=" hidden md:block md:w-[100%] md:mt-20 mb-4"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex md:ml-32 md:mr-10">
        <div>
          <img src={img1} alt="img1" className=" hidden md:block md:w-70%" />
        </div>
        <div className="flex justify-center text-center md:w-[90%] relative md:ml-20">
          <div className="flex flex-wrap justify-center mr-4 max-w-6xl  md:justify-between">
            {services2.slice(4).map((service) => (
              <div
                key={service.id}
                className="flex flex-col md:w-[50%]  mt-6 transition-transform hover:scale-110 cursor-pointer   md:px-0">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-[33px] h-[33px]"
                />
                <h3 className="mt-2 md:w-[80%] border-b border-gray-600 text-black font-montserrat text-lg md:text-xl text-center md:text-left">
                  {service.title}
                </h3>
                <p className="mt-2  text-black w-[98%]  font-poppins text-center md:text-left text-xs md:text-sm font-normal leading-normal tracking-wide">
                  {service.content}
                </p>
              </div>
            ))}
          </div>
        </div>
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
