import React, { useState, useEffect } from "react";
import Card from "./Card";
import { cards } from "../constants";
import textStyles from "../textstyles/textstyle";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleCards, setVisibleCards] = useState([]);

  // Display three cards at a time
  useEffect(() => {
    setVisibleCards(cards.slice(currentSlide, currentSlide + 3));
  }, [currentSlide, cards]);

  // Automatically change slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide + 1 >= cards.length - 2 ? 0 : prevSlide + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [cards]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative pb-8  overflow-hidden">
      <div className="flex transition-transform pb-4 mb-10 ml-10 pl-10 ease-in-out duration-500">
        {visibleCards.map((card, index) => (
          <div key={index} className=" pr-8">
            <Card title={card.title} content={card.content} logo={card.logo} />
          </div>
        ))}
      </div>
      <div className="flex  pr-4 justify-center items-center gap-5  flex-shrink-0 absolute bottom-4 left-1/2 transform -translate-x-1/2">
        {cards.map((_, index) => (
          <button
            key={index}
            className={`w-4 h-4 rounded-full bg-gray-400 ${
              index === currentSlide ? "bg-slcolor" : ""
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
