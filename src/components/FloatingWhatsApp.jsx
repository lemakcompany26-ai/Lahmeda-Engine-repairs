
import React from "react";
import { MessageCircle } from "lucide-react";
import "./FloatingWhatsApp.css";

const WHATSAPP_NUMBER = "2349034043569"; //

export default function FloatingWhatsApp() {
  return (
    <a
      className="floating-whatsapp"
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        "Hello LAHMEDA, I would like to make an inquiry."
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with LAHMEDA on WhatsApp"
    >
      <MessageCircle size={28} />
      <span>Chat with us</span>
    </a>
  );
}
