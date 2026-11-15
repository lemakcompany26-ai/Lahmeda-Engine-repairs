
import React, { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import "./Contact.css";

const BUSINESS_WHATSAPP = "2340000000000"; // Replace with your number

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    message: ""
  });

  function update(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function submit(e) {
    e.preventDefault();

    const message = `
LAHMEDA WEBSITE INQUIRY

Name: ${form.name}
Phone: ${form.phone}
Service: ${form.service}
Message: ${form.message}
    `;

    window.open(
      `https://wa.me/${BUSINESS_WHATSAPP}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  }

  return (
    <section className="lahmeda-contact" id="contact">
      <div className="contact-info">
        <span>CONTACT US</span>
        <h2>Let's Solve Your Engineering Needs</h2>
        <p>
          Contact LAHMEDA for mechanical repairs, equipment
          maintenance, electrical work and technical support.
        </p>

        <div className="contact-detail">
          <Phone />
          <div>
            <strong>Phone / WhatsApp</strong>
            <p>Replace with your business number</p>
          </div>
        </div>

        <div className="contact-detail">
          <Mail />
          <div>
            <strong>Email</strong>
            <p>Replace with your business email</p>
          </div>
        </div>

        <div className="contact-detail">
          <MapPin />
          <div>
            <strong>Location</strong>
            <p>Replace with your business address</p>
          </div>
        </div>
      </div>

      <form className="contact-form" onSubmit={submit}>
        <h3>Request a Service or Quote</h3>

        <label htmlFor="contact-name">Full Name</label>
        <input
          id="contact-name"
          name="name"
          value={form.name}
          onChange={update}
          placeholder="Enter your name"
          required
        />

        <label htmlFor="contact-phone">Phone Number</label>
        <input
          id="contact-phone"
          name="phone"
          value={form.phone}
          onChange={update}
          placeholder="Enter your phone number"
          required
        />

        <label htmlFor="contact-service">Service Required</label>
        <select
          id="contact-service"
          name="service"
          value={form.service}
          onChange={update}
          required
        >
          <option value="">Select a service</option>
          <option>Generator Repairs</option>
          <option>Mechanical Engineering</option>
          <option>Electrical Services</option>
          <option>Motorcycle Repairs</option>
          <option>Home Appliances</option>
          <option>Industrial Equipment</option>
          <option>Other Services</option>
        </select>

        <label htmlFor="contact-message">Describe Your Request</label>
        <textarea
          id="contact-message"
          name="message"
          value={form.message}
          onChange={update}
          placeholder="Tell us what you need..."
          rows="5"
          required
        />

        <button type="submit">
          Send Inquiry <Send size={18} />
        </button>
      </form>
    </section>
  );
}
