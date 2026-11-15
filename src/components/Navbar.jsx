
import React, { useState } from "react";
import { Menu, X, Wrench } from "lucide-react";
import "./Navbar.css";

const links = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Services", "#services"],
  ["Gallery", "#gallery"],
  ["Contact", "#contact"]
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="lahmeda-navbar">
      <a href="#home" className="lahmeda-logo">
        <span className="logo-icon"><Wrench size={25} /></span>
        <span>LAHMEDA<small>MECHANICAL ENGINEERING</small></span>
      </a>

      <button
        className="nav-toggle"
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation"
        aria-expanded={open}
      >
        {open ? <X /> : <Menu />}
      </button>

      <nav className={open ? "nav-links active" : "nav-links"}>
        {links.map(([label, href]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
        <a className="nav-quote" href="#contact" onClick={() => setOpen(false)}>
          Get a Quote
        </a>
      </nav>
    </header>
  );
}
