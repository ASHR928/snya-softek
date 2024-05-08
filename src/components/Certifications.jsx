import React from "react";
import textStyle from "../textstyles/textstyle";
import { CardBody, CardContainer, CardItem } from "../Animation/3dCard";
import cmi2 from "../assets/cmi2.svg";
import iso from "../assets/iso.svg";
import msme from "../assets/msme.svg";
import Reveal from "../Animation/Reveal";
import RevealFromLeft from "../Animation/RevealFromLeft";
import RevealRight from "../Animation/RevealRight";

const Certifications = () => {
  return (
    <section>
      <div className="flex-col ">
        <h3
          style={{ fontFamily: "Montserrat" }}
          className={`${textStyle.g_heading} md:pt-8 text-white  md:text-2xl justify-center font-montserrat sm:text-2xl lg:text-2xl tracking-[8px] justify-start`}>
          Certifications
        </h3>

        <h2
          style={{ fontFamily: "Montserrat" }}
          className={`${textStyle.b_heading} md:text-5xl  justify-center font-montserrat margin-auto sm:text-4xl lg:text-5xl tracking-[6.7px]  justify-start`}>
          Why ASCPL
        </h2>
      </div>
      <div className="flex md:ml-[110px] md:pb-10">
        <CardContainer className=" flex flex-start border-black">
          <CardBody className="  cardbg   group/card shadow-xl md:w-[350px] justify-center items-center text-center  md:rounded-xl md:pt-[34px] md:pb-[40px] md:pr-[70px] md:pl-[70px] bg-white">
            <CardItem translateZ="100">
              <img src={cmi2} alt="smi" className=" " />
            </CardItem>
          </CardBody>
        </CardContainer>

        <CardContainer className=" flex flex-start border-black">
          <CardBody className="  cardbg   group/card rounded-xl md:ml-10   md:w-[350px] shadow-xl md:pt-[30px] md:pb-[32px] justify-center items-center text-center  md:pr-[40px] md:pl-[40px]">
            <CardItem translateZ="100">
              <div className="flex ">
                <img src={iso} alt="iso" className="mr-4" />
                <img src={iso} alt="iso" className="ml-6" />
              </div>
              <div className="ml-4 ">
                <img src={iso} alt="iso" className="ml-16" />
              </div>
            </CardItem>
          </CardBody>
        </CardContainer>

        <CardContainer className=" flex flex-start border-black">
          <CardBody className="    group/card cardbg rounded-xl md:ml-10 md:w-[350px] shadow-xl md:pt-[60px] md:pb-[60px]  md:pr-[40px] md:pl-[40px]">
            <CardItem translateZ="100">
              <img src={msme} alt="smi" className="" />
            </CardItem>
          </CardBody>
        </CardContainer>
      </div>
    </section>
  );
};

export default Certifications;

{
  /* <div className="cardbg rounded-xl md:ml-10   md:w-[350px] shadow-xl md:pt-[30px] md:pb-[30px] justify-center items-center text-center  md:pr-[40px] md:pl-[40px] ">
          <div className="flex ">
            <img src={iso} alt="iso" className="mr-4" />
            <img src={iso} alt="iso" className="ml-6" />
          </div>
          <div className="ml-4 ">
            <img src={iso} alt="iso" className="ml-16" />
          </div>
        </div>
        <div className="cardbg rounded-xl md:ml-10 md:w-[350px] shadow-xl md:pt-[60px] md:pb-[10px]  md:pr-[40px] md:pl-[40px] ">
          <div>
            <img src={msme} alt="msme" className="" />
          </div>
        </div>
      </div> */
}
