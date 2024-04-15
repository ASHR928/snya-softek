import Feedback from "./Feedback";

export const TestimonialCarousel = ({ testimonials }) => {
  return (
    <div className="testimonial-carousel grid grid-cols-3 mr-0">
      {testimonials.map((testimonial, index) => (
        <Feedback key={index} {...testimonial} />
      ))}
    </div>
  );
};
