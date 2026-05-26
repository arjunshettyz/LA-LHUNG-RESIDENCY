import React from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp = () => {
  return (
    <a 
      href="https://wa.me/919906998914" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="floating-whatsapp pulse-animation"
      aria-label="Direct Chat on WhatsApp"
    >
      <MessageCircle className="floating-whatsapp-icon" />
      <span className="floating-whatsapp-tooltip">Chat with Booking Desk</span>
    </a>
  );
};

export default FloatingWhatsApp;
