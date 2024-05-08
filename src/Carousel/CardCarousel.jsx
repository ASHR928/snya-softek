import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import cardbg from "../assets/clients/cardbg.svg";
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
      style={{
        width: "100%",
        paddingTop: "50px",
        paddingBottom: "50px",
      }}
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={true}
      modules={[EffectCoverflow, Pagination, Autoplay]}
      className="mySwiper"
      data-aos="zoom-out"
    >
      {projects.map((project) => (
        <SwiperSlide
          style={{
            backgroundImage: `url(${cardbg})`,
            backgroundSize: "cover",
            borderRadius: "20px",
          }}
          className="md:w-50% w-[75%] md:h-[300px] h-[120px]"
          key={project.id}
        >
          <div className="card relative">
            <div
              className="mb-52 md:text-9xl text-xl font-bold"
              style={{
                position: "absolute",
                top: "-100px",
                left: "0",
                zIndex: "-100",
                fontFamily: "Montserrat",
                fontWeight: "400",
                letterSpacing: "5.4px",
                color: "rgba(255, 255, 255, 0.75)",
              }}
            >
              {project.Number}
            </div>
            <h2
              style={{
                fontFamily: "Montserrat",
                letterSpacing: "5.4px",
                textAlign: "center",
              }}
              className={`${textStyles.bl_heading} text-secondary md:text-3xl text-[8px] mx-auto md:mt-10 mt-4 pt-2 md:pt-6 `}
            >
              {project.title}
            </h2>
            <p
              style={{
                fontFamily: "Hind Madurai",
              }}
              className={`${textStyles.b_para} md:tracking-[2.8px] tracking-[1.4px] md:w-[80%] w-[98%] md:ml-20  pb-10 text-[5px] mt-2 md:mr-20 ml-2 mr-4 md:text-xs  md:mt-2 md:mb-20 md:pb-4 justify-center text-center items-center`}
            >
              {project.content}
            </p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CardCarousel;
