import React from 'react';
import { Wifi, Flame, Mountain, Coffee, ShieldCheck, Thermometer } from 'lucide-react';

const Amenities = () => {
  const amenitiesList = [
    {
      icon: <Wifi className="amenity-icon" />,
      title: "24/7 High-Speed Wi-Fi",
      description: "Stay connected seamlessly with our high-speed, reliable optic-fiber internet available across the property."
    },
    {
      icon: <Flame className="amenity-icon" />,
      title: "24/7 Geyser & Hot Water",
      description: "Refreshing hot showers are available at any hour via dedicated geysers, ideal after an alpine trek."
    },
    {
      icon: <Mountain className="amenity-icon" />,
      title: "Mountain View Balconies",
      description: "Private attached balconies in rooms providing an unparalleled, panoramic viewing experience of raw Himalayan peaks."
    },
    {
      icon: <Coffee className="amenity-icon" />,
      title: "Gourmet Alpine Dining",
      description: "Indulge in freshly prepared, organic local breakfasts and multi-cuisine dinners customized to your taste."
    },
    {
      icon: <Thermometer className="amenity-icon" />,
      title: "Cozy Room Heating",
      description: "Stay warm during freezing Himalayan nights with highly efficient heaters, thick premium woolens, and tea."
    },
    {
      icon: <ShieldCheck className="amenity-icon" />,
      title: "Local Travel & Desk",
      description: "Dedicated desk assistants helping you book local cabs, secure inner-line travel permits, and schedule tours."
    }
  ];

  return (
    <section id="amenities" className="section">
      <div className="section-title-wrapper">
        <span className="section-subtitle">Comfort & Convenience</span>
        <h2 className="section-title">
          World-Class <span>Residency Features</span>
        </h2>
      </div>

      <div className="amenities-grid">
        {amenitiesList.map((amenity, index) => (
          <div key={index} className="glass-card amenity-card">
            <div className="amenity-icon-container">
              {amenity.icon}
            </div>
            <h3 className="amenity-title">{amenity.title}</h3>
            <p className="amenity-desc">{amenity.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Amenities;
