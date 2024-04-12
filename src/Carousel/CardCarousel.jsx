import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import bg from "../assets/home/bg.svg";
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
            width: "700px",
            height: "700px",
            padding: "5rem",
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
          }}
          key={project.id}>
          <div className="card">
            <h2 className={`${textStyles.bl_heading} text-2xl`}>
              {project.title}
            </h2>
            <p className={`${textStyles.b_para} text-xl p-8`}>
              {project.content}
            </p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CardCarousel;
