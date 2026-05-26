import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Amenities from './components/Amenities';
import Rooms from './components/Rooms';
import BookingForm from './components/BookingForm';
import RestaurantMenu from './components/RestaurantMenu';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Footer from './components/Footer';
import { Sparkles, Mountain } from 'lucide-react';

function App() {
  const [selectedRoom, setSelectedRoom] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Elegant fade out after 2000ms
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(loadingTimer);
  }, []);

  if (isLoading) {
    return (
      <div className="preloader-overlay">
        <div className="preloader-content">
          <div className="preloader-logo float-animation">
            <Mountain className="preloader-logo-icon" />
            <h1 className="preloader-logo-title">LA-LHUNG</h1>
            <span className="preloader-logo-subtitle">RESIDENCY</span>
          </div>
          
          <div className="preloader-progress-bar">
            <div className="preloader-progress-bar-inner"></div>
          </div>

          <div className="preloader-status">
            <Sparkles className="preloader-status-icon float-animation" />
            <span className="preloader-status-text">Rising with the alpine sun...</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <ThemeProvider>
      <div className="app-layout">
        <Navbar />
        <Hero />
        <Amenities />
        <Rooms setSelectedRoom={setSelectedRoom} />
        <BookingForm selectedRoom={selectedRoom} setSelectedRoom={setSelectedRoom} />
        <RestaurantMenu />
        <Gallery />
        <Testimonials />
        <FAQ />
        <Contact />
        <FloatingWhatsApp />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
