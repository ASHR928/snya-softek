import Feedback from "./Feedback";

export const TestimonialCarousel = ({ testimonials }) => {
  return (
    <div className="testimonial-carousel grid grid-cols-3 md:mr-0 ml-8">
      {testimonials.map((testimonial, index) => (
        <Feedback key={index} {...testimonial} />
      ))}
    </div>
  );
};
