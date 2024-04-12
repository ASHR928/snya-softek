import Feedback from "./Feedback";

export const TestimonialCarousel = ({ testimonials }) => {
  return (
    <div className="testimonial-carousel grid grid-cols-3 gap-4">
      {testimonials.map((testimonial, index) => (
        <Feedback
          key={index}
          {...testimonial}
          className={`${
            index % 2 === 0 ? "w-1/2" : "w-1/3" // Set different widths for odd and even cards
          }`}
        />
      ))}
    </div>
  );
};
