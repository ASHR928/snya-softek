import React from "react";

const Circle = ({ width, height, top, left }) => {
  const circleStyle = {
    width: width,
    height: height,
    borderRadius: "50%",
    backgroundColor: "#DAEDFB",
    top: top,
    left: left,
  };

  return <div style={circleStyle}></div>;
};

export default Circle;
