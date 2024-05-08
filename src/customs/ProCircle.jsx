import PropTypes from "prop-types";

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

Circle.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  top: PropTypes.string.isRequired,
  left: PropTypes.string.isRequired,
};

export default Circle;
