import React from 'react';
import { Check, Sparkles, ChevronRight } from 'lucide-react';
import roomImage from '../assets/luxury_hotel_room.png';
import diningImage from '../assets/dining_experience.png';

const Rooms = ({ setSelectedRoom }) => {
  const roomPlans = [
    {
      id: "room-only",
      title: "Luxury Room (Only)",
      price: 2500,
      image: roomImage,
      badge: "Standard Alpine Stay",
      isPopular: false,
      description: "Enjoy luxurious accommodation featuring beautiful wooden accents and a personal balcony overlooking mountain ranges. Perfect for independent dining explorers.",
      features: [
        "Deluxe Double Bed Accommodation",
        "Private Balcony with mountain view",
        "24/7 Hot Water & Geyser",
        "High-Speed Wi-Fi anywhere",
        "Complimentary Coffee/Tea Kettle setup"
      ]
    },
    {
      id: "room-map",
      title: "Luxury Room + Breakfast + Dinner",
      price: 3800,
      image: diningImage,
      badge: "Complete Half-Board (MAP)",
      isPopular: true,
      description: "The ultimate alpine hospitality bundle. Includes premium stay in our deluxe room, traditional home-styled breakfast, and a lavish multi-cuisine Himalayan dinner.",
      features: [
        "Deluxe Double Bed Accommodation",
        "Fresh Gourmet Breakfast Included",
        "Steaming Multi-cuisine Dinner Included",
        "Private Balcony with mountain view",
        "24/7 Hot Water & Geyser",
        "High-Speed Wi-Fi anywhere"
      ]
    }
  ];

  const handleSelectPlan = (planTitle) => {
    setSelectedRoom(planTitle);
    const bookingForm = document.getElementById('booking');
    if (bookingForm) {
      bookingForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="rooms" className="section">
      <div className="section-title-wrapper">
        <span className="section-subtitle">Premium Accommodation</span>
        <h2 className="section-title">
          Select Your <span>Perfect Suite Plan</span>
        </h2>
      </div>

      <div className="rooms-grid">
        {roomPlans.map((plan) => (
          <div 
            key={plan.id} 
            className={`glass-card room-card ${plan.isPopular ? 'room-card-popular' : ''}`}
          >
            {plan.isPopular && (
              <div className="room-card-badge-popular">
                <Sparkles className="popular-badge-icon" />
                <span>Best Value Choice</span>
              </div>
            )}

            <div className="room-card-image-container">
              <img src={plan.image} alt={plan.title} className="room-card-img" />
              <div className="room-card-overlay-badge">{plan.badge}</div>
            </div>

            <div className="room-card-body">
              <h3 className="room-card-title">{plan.title}</h3>
              
              <div className="room-card-price-container">
                <span className="room-card-currency">₹</span>
                <span className="room-card-price">{plan.price}</span>
                <span className="room-card-unit">/ Night</span>
              </div>

              <p className="room-card-desc">{plan.description}</p>
              
              <div className="room-card-separator"></div>

              <ul className="room-card-features">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="room-card-feature-item">
                    <Check className="room-card-feature-icon" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => handleSelectPlan(plan.title)}
                className={`room-card-action-btn ${plan.isPopular ? 'btn-gold' : 'btn-outline'}`}
              >
                Select Suite <ChevronRight className="room-card-action-arrow" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Rooms;
