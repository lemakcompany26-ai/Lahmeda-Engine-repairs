
import React from "react";
import {
  Settings, Zap, Wrench, Bike, Refrigerator,
  Factory, Cog, Hammer
} from "lucide-react";
import "./Services.css";

const services = [
  {
    icon: Settings,
    title: "Mechanical Engineering",
    description: "Mechanical inspection, troubleshooting, repairs and equipment maintenance."
  },
  {
    icon: Zap,
    title: "Electrical Services",
    description: "Electrical installations, wiring, troubleshooting and maintenance."
  },
  {
    icon: Cog,
    title: "Generator Repairs",
    description: "Generator servicing, fault diagnosis and maintenance."
  },
  {
    icon: Bike,
    title: "Motorcycle Repairs",
    description: "Motorcycle inspection, repairs and mechanical servicing."
  },
  {
    icon: Refrigerator,
    title: "Home Appliances",
    description: "Maintenance and repair of household electrical appliances."
  },
  {
    icon: Factory,
    title: "Industrial Equipment",
    description: "Technical maintenance and mechanical support for equipment."
  },
  {
    icon: Wrench,
    title: "General Repairs",
    description: "Technical troubleshooting and repairs for different equipment."
  },
  {
    icon: Hammer,
    title: "Installation Services",
    description: "Equipment installation, setup and maintenance support."
  }
];

export default function Services() {
  return (
    <section className="lahmeda-services" id="services">
      <div className="services-heading">
        <span>WHAT WE DO</span>
        <h2>Our Engineering Services</h2>
        <p>Reliable technical solutions for homes, businesses and industries.</p>
      </div>

      <div className="services-grid">
        {services.map(({ icon: Icon, title, description }) => (
          <article className="service-card" key={title}>
            <div className="service-icon"><Icon size={30} /></div>
            <h3>{title}</h3>
            <p>{description}</p>
            <a href="#contact">Request Service →</a>
          </article>
        ))}
      </div>
    </section>
  );
}
