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
            width: "784px",
            height: "400px",

            backgroundImage: `url(${cardbg})`,
            backgroundSize: "cover",
            borderRadius: "20px",
          }}
          key={project.id}>
          <div className="card relative">
            <div
              className="mb-52 font-bold"
              style={{
                position: "absolute",
                top: "-100px",
                left: "0",
                zIndex: "-100", // Ensure the number is behind the title
                fontFamily: "Montserrat",
                fontWeight: "400",

                fontSize: "232px",
                letterSpacing: "5.4px",
                color: "rgba(255, 255, 255, 0.75)", // Adjust color and opacity as needed
                // Add padding for spacing
              }}>
              {project.Number}
            </div>
            <h2
              style={{
                fontFamily: "Montserrat",
                fontSize: "36px",
                letterSpacing: "5.4px",
                textAlign: "center",
              }}
              className={`${textStyles.bl_heading} text-secondary mx-auto mt-10 pt-6 `}>
              {project.title}
            </h2>
            <p
              style={{
                fontFamily: "Hind Madurai",
                fontSize: "18px",
                letterSpacing: "2.8px",
                maxWidth: "678px",
              }}
              className={`${textStyles.b_para} ml-20 mr-20 mt-2 mb-20 pb-4 justify-center text-center items-center`}>
              {project.content}
            </p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CardCarousel;
