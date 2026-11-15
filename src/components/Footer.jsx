
import React from "react";
import { Wrench, Phone, Mail, MapPin } from "lucide-react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="lahmeda-footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h2><Wrench /> LAHMEDA</h2>
          <span>MECHANICAL ENGINEERING</span>
          <p>
            Professional mechanical, electrical and equipment
            maintenance solutions.
          </p>
        </div>

        <div>
          <h3>Quick Links</h3>
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#services">Our Services</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </div>

        <div>
          <h3>Our Services</h3>
          <a href="#services">Mechanical Repairs</a>
          <a href="#services">Generator Maintenance</a>
          <a href="#services">Electrical Services</a>
          <a href="#services">Industrial Equipment</a>
        </div>

        <div>
          <h3>Contact Information</h3>
          <p><Phone size={16} /> Your phone number</p>
          <p><Mail size={16} /> Your email address</p>
          <p><MapPin size={16} /> Your business address</p>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} LAHMEDA Mechanical Engineering.
        All rights reserved.
      </div>
    </footer>
  );
}
