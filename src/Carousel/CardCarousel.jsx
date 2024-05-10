import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { projects } from "../constants";
import textStyles from "../textstyles/textstyle";

const CardCarousel = () => {
  return (
    <Swiper
      style={{
        width: "85%",
        height: screen.width > 768 ? "360px" : "180px",
        marginX: 4,
        marginBottom: 10,
      }}
      grabCursor={true}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      slidesPerView={"auto"}
      spaceBetween={20}
      modules={[Autoplay]}
      className="mySwiper"
    >
      {projects.map((project) => (
        <SwiperSlide
          className="bg-gradient-to-tl from-[#04518A] via-[#4eaaed] to-[#FFFFFF] shadow-xl rounded-xl "
          key={project.id}
        >
          <div className="flex flex-col ss:flex-row justify-center items-center card md:h-full md:w-full ">
            <div className="hidden ss:flex flex-col items-center justify-center w-full  md:w-2/5 sm:border-r-2 border-gray-700 ">
              <img
                src={project.image}
                alt="logo"
                className="h-40 w-40 md:h-auto md:w-auto object-contain "
              />
            </div>
            <div className="flex flex-col justify-start items-start w-full md:w-3/5 relative">
              <h2
                style={{
                  fontFamily: "Montserrat",
                }}
                className={`${textStyles.bl_heading} text-center tracking-wide sm:tracking-widest text-secondary text-xl md:text-3xl mx-auto md:mt-10 mt-2 pt-2 md:pt-6 w-auto md:w-[85%] `}
              >
                {project.title}
              </h2>
              <p
                style={{
                  fontFamily: "Hind Madurai",
                }}
                className={`${textStyles.b_para} md:tracking-[2.8px] tracking-[1.4px] w-auto md:w-[80%] md:ml-20  pb-10 text-xxs mt-2 md:mr-20 ml-2 mr-4 ss:text-base md:mt-2 md:mb-20 md:pb-4 justify-center text-left items-center`}
              >
                {project.content}
              </p>
              <div
                className="text-2xl ss:text-4xl md:text-7xl  font-semibold absolute right-1 bottom-0"
                style={{
                  fontFamily: "Montserrat",
                  letterSpacing: "5.4px",
                  color: "rgba(255, 255, 255, 0.75)",
                }}
              >
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
