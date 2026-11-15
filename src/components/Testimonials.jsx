
import React from "react";
import { Star, Quote } from "lucide-react";
import "./Testimonials.css";

const reviews = [
  {
  name: "olaniyan moses kolade",
  location: "Ibadan, oyo state, Nigeria", 
  message: "Thank you lahmada company i appreciate how the fastest thanks more knowledge."
  },
  {
    name: "Customer Two",
    location: "Customer location",
    message: "Add real feedback about a mechanical repair or maintenance project."
  },
  {
    name: "Customer Three",
    location: "Customer location",
    message: "Add a verified customer experience here."
  }
];

export default function Testimonials() {
  return (
    <section className="lahmeda-testimonials">
      <div className="testimonial-heading">
        <span>CUSTOMER FEEDBACK</span>
        <h2>What Our Customers Say</h2>
      </div>

      <div className="testimonial-grid">
        {reviews.map((review) => (
          <article className="testimonial-card" key={review.name}>
            <Quote className="quote-icon" size={30} />
            <div className="review-stars">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} size={16} />
              ))}
            </div>
            <p>{review.message}</p>
            <h3>{review.name}</h3>
            <small>{review.location}</small>
          </article>
        ))}
      </div>
    </section>
  );
}
