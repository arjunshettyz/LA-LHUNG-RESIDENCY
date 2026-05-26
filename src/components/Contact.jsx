import React from 'react';
import { Mail, MapPin, MessageCircle, ExternalLink } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="section-title-wrapper">
        <span className="section-subtitle">Get In Touch</span>
        <h2 className="section-title">
          Connect <span>With Our Residency</span>
        </h2>
      </div>

      <div className="contact-grid">
        {/* Email Desk */}
        <div className="glass-card contact-card">
          <div className="contact-card-icon-container">
            <Mail className="contact-card-icon" />
          </div>
          <h3 className="contact-card-title">Email Desk</h3>
          <p className="contact-card-desc">
            Write to us for group bookings, long retreats, or specific customized itinerary packages.
          </p>
          <a href="mailto:Ialhungresidency@gmail.com" className="contact-card-info">
            Ialhungresidency@gmail.com
          </a>
          <a href="mailto:Ialhungresidency@gmail.com" className="contact-card-btn btn-outline">
            Send Email <ExternalLink className="contact-btn-extra-icon" />
          </a>
        </div>

        {/* WhatsApp Desk */}
        <div className="glass-card contact-card">
          <div className="contact-card-icon-container contact-icon-green">
            <MessageCircle className="contact-card-icon" />
          </div>
          <h3 className="contact-card-title">WhatsApp Booking</h3>
          <p className="contact-card-desc">
            Directly connect with our booking manager for instant availability updates and answers.
          </p>
          <a 
            href="https://wa.me/919906998914" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="contact-card-info"
          >
            +91 99069 98914
          </a>
          <a 
            href="https://wa.me/919906998914" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="contact-card-btn btn-gold"
          >
            Chat Now <MessageCircle className="contact-btn-extra-icon" />
          </a>
        </div>

        {/* Location Desk */}
        <div className="glass-card contact-card">
          <div className="contact-card-icon-container">
            <MapPin className="contact-card-icon" />
          </div>
          <h3 className="contact-card-title">Google Maps</h3>
          <p className="contact-card-desc">
            LA-LHUNG RESIDENCY, settled in a peaceful Himalayan alpine environment with gorgeous vistas.
          </p>
          <span className="contact-card-info">Ladakh, J&K, India</span>
          <a 
            href="https://maps.app.goo.gl/trExDxDCtRoB9s4n7?g_st=ic" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="contact-card-btn btn-outline"
          >
            Open Map <ExternalLink className="contact-btn-extra-icon" />
          </a>
        </div>
      </div>

      {/* Styled Interactive Location Map Showcase */}
      <div className="glass-card map-showcase-card">
        <div className="map-showcase-grid">
          <div className="map-showcase-content">
            <h3 className="map-showcase-title">Immersive Himalayan Valley</h3>
            <p className="map-showcase-description">
              Our residency sits in an pristine valley environment, offering clean mountain air and peaceful surroundings. Wake up to direct sunrise peaks and walk along crystal streams.
            </p>
            <div className="map-showcase-tags">
              <span className="badge-gold">Altitude: 3,500m</span>
              <span className="badge-gold">Private Parking</span>
              <span className="badge-gold">Quiet Alpine Zone</span>
            </div>
            <a 
              href="https://maps.app.goo.gl/trExDxDCtRoB9s4n7?g_st=ic" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-gold map-action-btn"
            >
              Get Driving Directions
            </a>
          </div>

          <div className="map-showcase-visual">
            <div className="map-vector-globe">
              <div className="map-vector-grid-rings"></div>
              <div className="map-vector-peaks-shadow"></div>
              <div className="map-vector-ripple-container">
                <div className="map-ripple ripple-1"></div>
                <div className="map-ripple ripple-2"></div>
              </div>
              <div className="map-vector-marker float-animation">
                <MapPin className="map-vector-marker-icon" />
              </div>
              <span className="map-vector-label">LA-LHUNG RESIDENCY</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
