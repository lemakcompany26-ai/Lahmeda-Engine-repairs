
import React from "react";
import "./ImageGallery.css";

const galleryImages = [
  {
    title: "Mechanical Engineering",
    category: "Engineering",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=900&auto=format&fit=crop&q=85"
  },
  {
    title: "Industrial Equipment",
    category: "Equipment Maintenance",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=900&auto=format&fit=crop&q=85"
  },
  {
    title: "Electrical Installation",
    category: "Electrical Services",
    image:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=900&auto=format&fit=crop&q=85"
  },
  {
    title: "Workshop Operations",
    category: "Mechanical Repairs",
    image:
      "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=900&auto=format&fit=crop&q=85"
  },
  {
    title: "Professional Engineering",
    category: "Technical Services",
    image:
      "https://images.unsplash.com/photo-1581092335878-2d9ff86ca2bf?w=900&auto=format&fit=crop&q=85"
  },
  {
    title: "Industrial Technology",
    category: "Maintenance",
    image:
      "https://images.unsplash.com/photo-1567789884554-0b844b597180?w=900&auto=format&fit=crop&q=85"
  }
];

export default function ImageGallery() {
  return (
    <section className="lahmeda-gallery" id="gallery">
      <div className="gallery-heading">
        <span>OUR WORK</span>
        <h2>Engineering Excellence in Action</h2>
        <p>
          Explore mechanical, electrical and technical work
          that reflects our commitment to quality.
        </p>
      </div>

      <div className="gallery-grid">
        {galleryImages.map((item, index) => (
          <article className="gallery-card" key={index}>
            <img
              src={item.image}
              alt={item.title}
              loading="lazy"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />

            <div className="gallery-overlay">
              <span>{item.category}</span>
              <h3>{item.title}</h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
