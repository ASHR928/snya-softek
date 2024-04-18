import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import cardbg from "../assets/clients/cardbg.svg";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { projects } from "../constants";
import textStyles from "../textstyles/textstyle";

const CardCarousel = () => {
  return (
    <Swiper
      style={{
        width: "100%",
        paddingTop: "50px",
        paddingBottom: "50px",
      }}
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={true}
      modules={[EffectCoverflow, Pagination]}
      className="mySwiper">
      {projects.map((project) => (
        <SwiperSlide
          style={{
            // maxWidth: "50%",
            // height: "300px",

            backgroundImage: `url(${cardbg})`,
            backgroundSize: "cover",
            borderRadius: "20px",
          }}
          className="md:w-50% w-[75%] md:h-[300px] h-[120px]"
          key={project.id}>
          <div className="card relative">
            <div
              className="mb-52 md:text-9xl text-xl font-bold"
              style={{
                position: "absolute",
                top: "-100px",
                left: "0",
                zIndex: "-100", // Ensure the number is behind the title
                fontFamily: "Montserrat",
                fontWeight: "400",

                letterSpacing: "5.4px",
                color: "rgba(255, 255, 255, 0.75)", // Adjust color and opacity as needed
                // Add padding for spacing
              }}>
              {project.Number}
            </div>
            <h2
              style={{
                fontFamily: "Montserrat",

                letterSpacing: "5.4px",
                textAlign: "center",
              }}
              className={`${textStyles.bl_heading} text-secondary md:text-3xl text-[8px] mx-auto md:mt-10 mt-4 pt-2 md:pt-6 `}>
              {project.title}
            </h2>
            <p
              style={{
                fontFamily: "Hind Madurai",

                letterSpacing: "2.8px",
              }}
              className={`${textStyles.b_para} md:w-[80%] w-[98%] md:ml-20 ml-2 pb-10 text-[5px] mt-2 md:mr-20 mr-2 md:text-xs  md:mt-2 md:mb-20 md:pb-4 justify-center text-center items-center`}>
              {project.content}
            </p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CardCarousel;
