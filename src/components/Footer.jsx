import React from 'react';
import { Mail, Phone, MapPin, Heart, Hotel } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Brand Column */}
        <div className="footer-column footer-col-brand">
          <a href="#home" className="footer-logo">
            <Hotel className="footer-logo-icon" />
            <span className="footer-logo-text">
              LA-LHUNG <span className="footer-logo-text-sub">RESIDENCY</span>
            </span>
          </a>
          <p className="footer-brand-description">
            A luxury mountain sanctuary nestled in a peaceful Himalayan valley. Dedicated to sharing pristine comfort, warm traditional hospitality, and breathtaking scenic mountain vistas with our travelers.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h4 className="footer-column-title">Quick Links</h4>
          <ul className="footer-links-list">
            <li><a href="#home" className="footer-link-item">Home</a></li>
            <li><a href="#amenities" className="footer-link-item">Amenities</a></li>
            <li><a href="#rooms" className="footer-link-item">Suite Pricing</a></li>
            <li><a href="#gallery" className="footer-link-item">Gallery</a></li>
            <li><a href="#testimonials" className="footer-link-item">Reviews</a></li>
            <li><a href="#faq" className="footer-link-item">FAQs</a></li>
            <li><a href="#contact" className="footer-link-item">Contact</a></li>
          </ul>
        </div>

        {/* Contacts details */}
        <div className="footer-column">
          <h4 className="footer-column-title">Reservations</h4>
          <ul className="footer-contacts-list">
            <li className="footer-contact-item">
              <Mail className="footer-contact-icon" />
              <a href="mailto:Ialhungresidency@gmail.com" className="footer-contact-link">
                Ialhungresidency@gmail.com
              </a>
            </li>
            <li className="footer-contact-item">
              <Phone className="footer-contact-icon" />
              <a href="https://wa.me/919906998914" className="footer-contact-link">
                +91 99069 98914
              </a>
            </li>
            <li className="footer-contact-item">
              <MapPin className="footer-contact-icon" />
              <span className="footer-contact-text">
                Ladakh Region, J&K, India
              </span>
            </li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom-divider"></div>

      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <p className="footer-copyright-text">
            &copy; {new Date().getFullYear()} LA-LHUNG RESIDENCY. All rights reserved.
          </p>
          <p className="footer-credits-text">
            Crafted with <Heart className="footer-heart-icon float-animation" /> for pure mountain living.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
