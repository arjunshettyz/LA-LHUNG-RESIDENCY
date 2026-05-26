import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, Menu, X, Hotel } from 'lucide-react';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Amenities', href: '#amenities' },
    { name: 'Rooms', href: '#rooms' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#testimonials' },
    { name: 'FAQs', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container-inner">
        {/* Logo */}
        <a href="#home" className="navbar-logo">
          <Hotel className="navbar-logo-icon" />
          <span className="navbar-logo-text">
            LA-LHUNG <span className="navbar-logo-text-sub">RESIDENCY</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="navbar-links-desktop">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="navbar-link-item">
              {link.name}
            </a>
          ))}

          {/* Theme Toggle */}
          <button 
            onClick={toggleTheme} 
            className="navbar-theme-toggle" 
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? (
              <Sun className="navbar-toggle-icon sun-icon" />
            ) : (
              <Moon className="navbar-toggle-icon moon-icon" />
            )}
          </button>

          <a href="#booking" className="navbar-book-btn">
            Book Now
          </a>
        </div>

        {/* Mobile controls */}
        <div className="navbar-controls-mobile">
          <button 
            onClick={toggleTheme} 
            className="navbar-theme-toggle" 
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? (
              <Sun className="navbar-toggle-icon sun-icon" />
            ) : (
              <Moon className="navbar-toggle-icon moon-icon" />
            )}
          </button>

          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="navbar-hamburger" 
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? <X className="hamburger-icon" /> : <Menu className="hamburger-icon" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`navbar-drawer ${isOpen ? 'navbar-drawer-open' : ''}`}>
        <div className="navbar-drawer-links">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="navbar-drawer-link"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#booking" 
            className="navbar-drawer-book-btn"
            onClick={() => setIsOpen(false)}
          >
            Book Now
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
