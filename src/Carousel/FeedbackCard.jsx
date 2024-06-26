import Feedback from "./Feedback";
import PropTypes from "prop-types";

export const TestimonialCarousel = ({ testimonials }) => {
  return (
    <div className="testimonial-carousel grid grid-cols-3 sm:mr-0 ml-4 sm:ml-8 ">
      {testimonials?.map((testimonial, index) => (
        <Feedback key={index} {...testimonial} />
      ))}
    </div>
  );
};

TestimonialCarousel.propTypes = {
  testimonials: PropTypes.array.isRequired,
};
