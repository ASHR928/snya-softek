import { useState, useEffect } from "react";
import Card from "./Card";
import { cards } from "../constants";

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
    <div className="relative md:pb-8 overflow-hidden">
      <div className="flex transition-transform md:pb-4 mb-10 md:ml-10 md:pl-10 ml-4 ease-in-out duration-500">
        {visibleCards.map((card, index) => (
          <div key={index} className=" ">
            <Card title={card.title} content={card.content} logo={card.logo} />
          </div>
        ))}
      </div>
      <div className="flex md:pr-4 justify-center items-center md:gap-5 gap-2  flex-shrink-0 absolute bottom-4 left-1/2 transform -translate-x-1/2">
        {cards.map((_, index) => (
          <button
            key={index}
            className={`md:w-4 md:h-4 w-2 h-2 rounded-full bg-gray-400 ${
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
