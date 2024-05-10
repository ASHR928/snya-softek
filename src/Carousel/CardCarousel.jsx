import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { Autoplay } from "swiper/modules";
import { projects } from "../constants";
import textStyles from "../textstyles/textstyle";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const CardCarousel = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      slidesPerView={"auto"}
      spaceBetween={0}
      parallax={false}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      modules={[EffectCoverflow, Pagination, Autoplay]}
      className="mySwiper"
      data-aos="zoom-out">
      {projects.map((project) => (
        <SwiperSlide
          className="bg-gradient-to-tl from-[#04518A] via-[#4eaaed] to-[#FFFFFF]  opacity-90 shadow-xl rounded-xl md:w-50% w-[75%] "
          key={project.id}>
          <div className="flex flex-row justify-center items-center card ">
            <div className="flex flex-col justify-center items-center w-5/5 relative">
              <h2
                style={{
                  fontFamily: "Montserrat",
                }}
                className={`${textStyles.bl_heading} text-center   tracking-wide  sm:tracking-widest text-secondary text-base md:text-3xl mx-auto md:mt-10 mt-2 pt-2 md:pt-6 w-[85%] `}>
                {project.title}
              </h2>
              <p
                style={{
                  fontFamily: "Hind Madurai",
                }}
                className={`${textStyles.b_para} md:tracking-[2.8px] tracking-[1.4px] md:w-[85%] w-[80%] md:ml-10  pb-10 text-xxs mt-2 md:mr-10 ml-2 mr-4 md:text-xs md:mt-2 md:mb-32 md:pb-4 justify-center text-center items-center`}>
                {project.content}
              </p>
              <div
                className="md:text-8xl text-xl m font-semibold absolute right-1  bottom-0"
                style={{
                  fontFamily: "Montserrat",
                  letterSpacing: "5.4px",
                  color: "rgba(255, 255, 255, 0.75)",
                }}>
                {project.Number}
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CardCarousel;
