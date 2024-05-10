import { useState, useEffect } from "react";
import Card from "./Card";
import { cards } from "../constants";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Automatically change slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide + 1 >= cards.length - 2 ? 0 : prevSlide + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <Swiper
      style={{ height: "100%", width: "80%" }}
      spaceBetween={30}
      slidesPerView={3}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop={true}
      grabCursor={true}
      modules={[Autoplay, Pagination]}
      pagination={{ clickable: true }}
      onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
    >
      {cards.map((card, index) => (
        <SwiperSlide key={index}>
          <Card title={card.title} content={card.content} logo={card.logo} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
