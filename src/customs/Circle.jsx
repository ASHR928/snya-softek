import React from "react";

const Circle = ({ width, height, top, left }) => {
  const circleStyle = {
    width: width,
    height: height,
    top: top,
    left: left,
  };

  return (
    <div
      className="absolute hidden md:block bg-circlebg rounded-full"
      style={circleStyle}></div>
  );
};

export default Circle;
