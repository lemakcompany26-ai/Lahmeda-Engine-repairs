
import React, { useState } from "react";
import {
  Menu,
  X,
  Zap,
  Settings,
  Wrench,
  Bike,
  Tv,
  Refrigerator,
  Cable,
  ShieldCheck,
  Clock,
  BadgeCheck,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  MessageCircle,
  Star,
  ChevronRight,
} from "lucide-react";
import "./App.css";

const BUSINESS = {
  name: "LAHMEDA",
  phone: "2349064471571",
  displayPhone: "+234 9064471571",
  email: "Rasak2916@gmail.com",
  location:
    "No 26 Ayepe Zone D, Ayegbami, Ayepe, off New Ife Road, Oyo State, Nigeria",
};

const services = [
  {
    icon: Settings,
    title: "Generator Repair",
    description:
      "Generator troubleshooting, servicing, maintenance, engine repairs and electrical fault diagnosis.",
  },
  {
    icon: Bike,
    title: "Motorcycle Repairs",
    description:
      "Motorcycle electrical repairs, wiring, battery systems, ignition and general maintenance.",
  },
  {
    icon: Tv,
    title: "Electronics Repair",
    description:
      "Professional troubleshooting and repair of electronic equipment and electrical components.",
  },
  {
    icon: Refrigerator,
    title: "Home Appliances",
    description:
      "Repair and maintenance of refrigerators, televisions, fans, washing machines and other appliances.",
  },
  {
    icon: Cable,
    title: "Electrical Wiring",
    description:
      "Electrical wiring, installation, inspection, troubleshooting and maintenance.",
  },
  {
    icon: Wrench,
    title: "Other Equipment",
    description:
      "Maintenance, installation and repair of other mechanical and electrical equipment.",
  },
];

const reasons = [
  {
    icon: ShieldCheck,
    title: "Reliable Service",
    text: "We focus on safe, dependable repair solutions.",
  },
  {
    icon: BadgeCheck,
    title: "Skilled Technicians",
    text: "Professional attention to every repair project.",
  },
  {
    icon: Clock,
    title: "Quick Response",
    text: "We aim to complete jobs efficiently.",
  },
  {
    icon: Star,
    title: "Affordable Pricing",
    text: "Clear quotations before work begins.",
  },
];

const projects = [
  {
    title: "Generator Maintenance",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1000",
  },
  {
    title: "Electrical Installation",
    image:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1000",
  },
  {
    title: "Mechanical Workshop",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1000",
  },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "Generator Repair",
    message: "",
  });

  const whatsapp = (message) =>
    `https://wa.me/${BUSINESS.phone}?text=${encodeURIComponent(message)}`;

  const submitQuote = (e) => {
    e.preventDefault();

    const message = [
      "Hello LAHMEDA Mechanical Engineering.",
      "",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Service: ${form.service}`,
      `Details: ${form.message || "No additional details"}`,
    ].join("\n");

    window.open(
      whatsapp(message),
      "_blank",
      "noopener,noreferrer"
    );
  };

  const closeMenu = () => setMenuOpen(false);

  const navigation = [
    ["Home", "#home"],
    ["Services", "#services"],
    ["About", "#about"],
    ["Why Us", "#why-us"],
    ["Gallery", "#gallery"],
    ["Contact", "#contact"],
  ];

  return (
    <div className="app">
      {/* NAVIGATION */}
      <header className="navbar">
        <a href="#home" className="brand" onClick={closeMenu}>
          <span className="brand-icon">
            <Zap size={27} />
          </span>
          <span>
            <strong>LAHMEDA</strong>
            <small>MECHANICAL ENGINEERING</small>
          </span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {navigation.map(([label, href]) => (
            <a key={label} href={href} onClick={closeMenu}>
              {label}
            </a>
          ))}

          <a
            className="nav-cta"
            href="#contact"
            onClick={closeMenu}
          >
            Get a Quote <ArrowRight size={16} />
          </a>
        </nav>
      </header>

      <main>
        {/* HERO */}
        <section className="hero" id="home">
          <div className="hero-content">
            <span className="eyebrow">
              YOUR TRUSTED ENGINEERING PARTNER
            </span>

            <h1>
              LAHMEDA
              <span>Mechanical Engineering</span>
            </h1>

            <p>
              Expert repair and maintenance services for generators,
              motorcycles, electronics, home appliances and electrical
              equipment.
            </p>

            <div className="hero-points">
              <span>
                <ShieldCheck /> Reliable workmanship
              </span>
              <span>
                <Clock /> Responsive service
              </span>
              <span>
                <BadgeCheck /> Quality solutions
              </span>
            </div>

            <div className="hero-actions">
              <a className="btn btn-yellow" href="#contact">
                Book a Service <ArrowRight size={18} />
              </a>

              <a
                className="btn btn-outline"
                href={whatsapp(
                  "Hello LAHMEDA, I need your services."
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={18} /> WhatsApp Us
              </a>
            </div>
          </div>

          <div className="hero-image">
            <img
              src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1200"
              alt="Engineering technician at work"
            />

            <div className="image-label">
              <Zap /> Professional Repair & Maintenance
            </div>
          </div>
        </section>

        {/* TRUST STRIP */}
        <section className="trust-strip">
          <div>
            <ShieldCheck /> Quality workmanship
          </div>
          <div>
            <Clock /> Efficient service
          </div>
          <div>
            <Settings /> Technical expertise
          </div>
          <div>
            <BadgeCheck /> Customer satisfaction
          </div>
        </section>

        {/* SERVICES */}
        <section className="section services" id="services">
          <div className="section-heading">
            <span className="eyebrow">WHAT WE DO</span>
            <h2>Our Professional Services</h2>
            <p>
              Complete mechanical and electrical repair solutions
              for homes, businesses and individuals.
            </p>
          </div>

          <div className="service-grid">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  className="service-card"
                  key={service.title}
                >
                  <div className="service-icon">
                    <Icon size={30} />
                  </div>

                  <h3>{service.title}</h3>
                  <p>{service.description}</p>

                  <a
                    href={whatsapp(
                      `Hello LAHMEDA, I need your ${service.title} service.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Request service <ChevronRight size={16} />
                  </a>
                </article>
              );
            })}
          </div>
        </section>

        {/* ABOUT */}
        <section className="about section" id="about">
          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=1000"
              alt="Mechanical engineering work"
              loading="lazy"
            />
          </div>

          <div className="about-content">
            <span className="eyebrow">ABOUT OUR COMPANY</span>

            <h2>
              Keeping Your Equipment Running Efficiently
            </h2>

            <p>
              LAHMEDA Mechanical Engineering provides mechanical and
              electrical repair, servicing and maintenance solutions.
              We work with generators, motorcycles, electronics,
              household appliances, wiring systems and other equipment.
            </p>

            <p>
              Our goal is to provide dependable service, practical
              solutions and professional attention to every project.
            </p>

            <a className="btn btn-yellow" href="#contact">
              Work With Us <ArrowRight size={18} />
            </a>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="why section" id="why-us">
          <div className="section-heading">
            <span className="eyebrow">
              THE LAHMEDA DIFFERENCE
            </span>
            <h2>Why Choose Us?</h2>
            <p>
              Reliable engineering support when you need it.
            </p>
          </div>

          <div className="reason-grid">
            {reasons.map((reason) => {
              const Icon = reason.icon;

              return (
                <article
                  className="reason-card"
                  key={reason.title}
                >
                  <Icon size={35} />
                  <h3>{reason.title}</h3>
                  <p>{reason.text}</p>
                </article>
              );
            })}
          </div>
        </section>

        {/* PROJECT GALLERY */}
        <section className="gallery section" id="gallery">
          <div className="section-heading">
            <span className="eyebrow">OUR WORK</span>
            <h2>Engineering in Action</h2>
            <p>
              A look at the kind of work we do.
            </p>
          </div>

          <div className="gallery-grid">
            {projects.map((project) => (
              <article
                className="gallery-card"
                key={project.title}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                />
                <h3>{project.title}</h3>
              </article>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section className="contact section" id="contact">
          <div className="contact-info">
            <span className="eyebrow">
              LET'S GET IT FIXED
            </span>

            <h2>
              Need a Repair or Maintenance Service?
            </h2>

            <p>
              Tell us what needs attention. Send a service request
              and our team can discuss the next steps with you.
            </p>

            <div className="contact-line">
              <Phone />
              <span>{BUSINESS.displayPhone}</span>
            </div>

            <div className="contact-line">
              <Mail />
              <span>{BUSINESS.email}</span>
            </div>

            <div className="contact-line">
              <MapPin />
              <span>{BUSINESS.location}</span>
            </div>
          </div>

          <form className="quote-form" onSubmit={submitQuote}>
            <h3>Request a Service Quote</h3>

            <label htmlFor="customer-name">
              Your full name
            </label>
            <input
              id="customer-name"
              required
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
              placeholder="Enter your name"
            />

            <label htmlFor="customer-phone">
              Phone number
            </label>
            <input
              id="customer-phone"
              required
              type="tel"
              value={form.phone}
              onChange={(e) =>
                setForm({ ...form, phone: e.target.value })
              }
              placeholder="Your phone number"
            />

            <label htmlFor="customer-service">
              Service required
            </label>
            <select
              id="customer-service"
              value={form.service}
              onChange={(e) =>
                setForm({ ...form, service: e.target.value })
              }
            >
              {services.map((service) => (
                <option
                  key={service.title}
                  value={service.title}
                >
                  {service.title}
                </option>
              ))}
            </select>

            <label htmlFor="customer-message">
              Describe the problem
            </label>
            <textarea
              id="customer-message"
              rows="4"
              value={form.message}
              onChange={(e) =>
                setForm({ ...form, message: e.target.value })
              }
              placeholder="Tell us about the equipment or fault..."
            />

            <button
              className="btn btn-yellow submit-btn"
              type="submit"
            >
              Send Request on WhatsApp <ArrowRight size={18} />
            </button>

            <small>
              Your request will open WhatsApp for you to send.
            </small>
          </form>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-main">
          <a href="#home" className="brand">
            <span className="brand-icon">
              <Zap size={27} />
            </span>

            <span>
              <strong>LAHMEDA</strong>
              <small>MECHANICAL ENGINEERING</small>
            </span>
          </a>

          <p>Fix Today. Power Tomorrow.</p>

          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
        </div>

        <div className="footer-bottom">
          © {new Date().getFullYear()} LAHMEDA Mechanical Engineering.
          All rights reserved.
        </div>
      </footer>

      {/* FLOATING WHATSAPP */}
      <a
        className="whatsapp-float"
        href={whatsapp(
          "Hello LAHMEDA, I would like to make an enquiry."
        )}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with LAHMEDA on WhatsApp"
      >
        <MessageCircle size={26} />
      </a>
    </div>
  );
}
