import React from 'react';
import menu1 from '../assets/Black Restaurant Menu-images-0.jpg';
import menu2 from '../assets/Black Restaurant Menu-images-1.jpg';

const RestaurantMenu = () => {
  return (
    <section id="menu" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="section-title-wrapper">
        <span className="section-subtitle">Gourmet Dining</span>
        <h2 className="section-title">
          Our <span>Restaurant Menu</span>
        </h2>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', alignItems: 'center', maxWidth: '800px', margin: '0 auto' }}>
        <div className="glass-card" style={{ padding: '1rem', width: '100%', borderRadius: '20px' }}>
          <img 
            src={menu1} 
            alt="Restaurant Menu Page 1" 
            style={{ width: '100%', height: 'auto', borderRadius: '12px', boxShadow: '0 8px 30px rgba(0,0,0,0.2)', objectFit: 'contain' }} 
          />
        </div>
        
        <div className="glass-card" style={{ padding: '1rem', width: '100%', borderRadius: '20px' }}>
          <img 
            src={menu2} 
            alt="Restaurant Menu Page 2" 
            style={{ width: '100%', height: 'auto', borderRadius: '12px', boxShadow: '0 8px 30px rgba(0,0,0,0.2)', objectFit: 'contain' }} 
          />
        </div>
      </div>
    </section>
  );
};

export default RestaurantMenu;
