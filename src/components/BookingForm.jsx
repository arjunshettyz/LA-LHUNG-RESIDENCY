import React, { useState, useEffect } from 'react';
import SuccessAnimation from './SuccessAnimation';
import { Calendar, User, Phone, Users, BedDouble, AlertCircle } from 'lucide-react';

const BookingForm = ({ selectedRoom, setSelectedRoom }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: '1',
    roomType: ''
  });

  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);
  const [today, setToday] = useState('');

  // Get current date string in YYYY-MM-DD for date-picker restrictions
  useEffect(() => {
    const todayDate = new Date();
    const yyyy = todayDate.getFullYear();
    const mm = String(todayDate.getMonth() + 1).padStart(2, '0');
    const dd = String(todayDate.getDate()).padStart(2, '0');
    setToday(`${yyyy}-${mm}-${dd}`);
  }, []);

  // Update room selection when user clicks a plan card in Rooms section
  useEffect(() => {
    if (selectedRoom) {
      setFormData((prev) => ({ ...prev, roomType: selectedRoom }));
    }
  }, [selectedRoom]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear field-specific error as user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleValidation = () => {
    const currentErrors = {};
    if (!formData.name.trim()) currentErrors.name = 'Full name is required';
    if (!formData.phone.trim()) {
      currentErrors.phone = 'Phone number is required';
    } else if (!/^\+?[0-9\s-]{10,15}$/.test(formData.phone.replace(/[^0-9]/g, ''))) {
      currentErrors.phone = 'Please enter a valid phone number';
    }
    if (!formData.checkIn) currentErrors.checkIn = 'Check-in date is required';
    if (!formData.checkOut) {
      currentErrors.checkOut = 'Check-out date is required';
    } else if (new Date(formData.checkOut) <= new Date(formData.checkIn)) {
      currentErrors.checkOut = 'Check-out date must be after check-in';
    }
    if (!formData.roomType) currentErrors.roomType = 'Stays plan selection is required';
    if (!formData.guests) currentErrors.guests = 'Guest count is required';

    setErrors(currentErrors);
    return Object.keys(currentErrors).length === 0;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (handleValidation()) {
      setShowSuccess(true);
    }
  };

  const handleWhatsAppRedirect = () => {
    const { name, phone, checkIn, checkOut, guests, roomType } = formData;

    const formatDateForMsg = (dateString) => {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
    };

    // Constructing exact requested WhatsApp Message Format
    const whatsappMsgText = `Hello, I want to book a room at LA-LHUNG RESIDENCY.

Name: ${name}
Phone: ${phone}
Check-in: ${formatDateForMsg(checkIn)}
Check-out: ${formatDateForMsg(checkOut)}
Guests: ${guests}
Room Type: ${roomType}

Please confirm availability.`;

    // Indian phone prefix '91' is appended to ensure correct global redirection
    const whatsappLinkUrl = `https://wa.me/919906998914?text=${encodeURIComponent(whatsappMsgText)}`;

    // Open link, reset states
    window.open(whatsappLinkUrl, '_blank');
    setShowSuccess(false);
    
    // Clear selection so user can choose again if they want
    setSelectedRoom('');
    setFormData({
      name: '',
      phone: '',
      checkIn: '',
      checkOut: '',
      guests: '1',
      roomType: ''
    });
  };

  return (
    <section id="booking" className="section">
      <div className="section-title-wrapper">
        <span className="section-subtitle">Stays Registration</span>
        <h2 className="section-title">
          Book Your <span>Residency Stays</span>
        </h2>
      </div>

      <div className="booking-form-wrapper">
        <div className="glass-card booking-card">
          <form onSubmit={handleFormSubmit} className="booking-inputs-form">
            <div className="booking-form-grid">
              {/* Guest Name */}
              <div className="form-group">
                <label className="form-label" htmlFor="name">Full Name</label>
                <div className="booking-input-container">
                  <User className="booking-field-icon" />
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    placeholder="E.g., Arjun Sharma" 
                    value={formData.name} 
                    onChange={handleInputChange} 
                    className={`form-input booking-input-field ${errors.name ? 'booking-field-error' : ''}`}
                  />
                </div>
                {errors.name && (
                  <span className="booking-field-error-msg">
                    <AlertCircle className="field-error-icon" /> {errors.name}
                  </span>
                )}
              </div>

              {/* Contact Phone */}
              <div className="form-group">
                <label className="form-label" htmlFor="phone">Phone / WhatsApp Number</label>
                <div className="booking-input-container">
                  <Phone className="booking-field-icon" />
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    placeholder="E.g., 9906998914" 
                    value={formData.phone} 
                    onChange={handleInputChange} 
                    className={`form-input booking-input-field ${errors.phone ? 'booking-field-error' : ''}`}
                  />
                </div>
                {errors.phone && (
                  <span className="booking-field-error-msg">
                    <AlertCircle className="field-error-icon" /> {errors.phone}
                  </span>
                )}
              </div>

              {/* Check-in Date */}
              <div className="form-group">
                <label className="form-label" htmlFor="checkIn">Check-In Date</label>
                <div className="booking-input-container">
                  <Calendar className="booking-field-icon" />
                  <input 
                    type="date" 
                    id="checkIn" 
                    name="checkIn" 
                    min={today}
                    value={formData.checkIn} 
                    onChange={handleInputChange} 
                    className={`form-input booking-input-field ${errors.checkIn ? 'booking-field-error' : ''}`}
                  />
                </div>
                {errors.checkIn && (
                  <span className="booking-field-error-msg">
                    <AlertCircle className="field-error-icon" /> {errors.checkIn}
                  </span>
                )}
              </div>

              {/* Check-out Date */}
              <div className="form-group">
                <label className="form-label" htmlFor="checkOut">Check-Out Date</label>
                <div className="booking-input-container">
                  <Calendar className="booking-field-icon" />
                  <input 
                    type="date" 
                    id="checkOut" 
                    name="checkOut" 
                    min={formData.checkIn || today}
                    value={formData.checkOut} 
                    onChange={handleInputChange} 
                    className={`form-input booking-input-field ${errors.checkOut ? 'booking-field-error' : ''}`}
                  />
                </div>
                {errors.checkOut && (
                  <span className="booking-field-error-msg">
                    <AlertCircle className="field-error-icon" /> {errors.checkOut}
                  </span>
                )}
              </div>

              {/* Guests Count */}
              <div className="form-group">
                <label className="form-label" htmlFor="guests">Number of Guests</label>
                <div className="booking-input-container">
                  <Users className="booking-field-icon" />
                  <select 
                    id="guests" 
                    name="guests" 
                    value={formData.guests} 
                    onChange={handleInputChange} 
                    className="form-input booking-input-field"
                  >
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                    <option value="5">5 Guests</option>
                    <option value="6">6+ Guests (Family)</option>
                  </select>
                </div>
              </div>

              {/* Room Suite Type */}
              <div className="form-group">
                <label className="form-label" htmlFor="roomType">Stays Suite Plan</label>
                <div className="booking-input-container">
                  <BedDouble className="booking-field-icon" />
                  <select 
                    id="roomType" 
                    name="roomType" 
                    value={formData.roomType} 
                    onChange={handleInputChange} 
                    className={`form-input booking-input-field ${errors.roomType ? 'booking-field-error' : ''}`}
                  >
                    <option value="" disabled>Select your stays plan...</option>
                    <option value="Luxury Room (Only)">Luxury Room Only Plan (₹2500)</option>
                    <option value="Luxury Room + Breakfast + Dinner">Alpine MAP Plan (Room + Breakfast + Dinner) (₹3800)</option>
                  </select>
                </div>
                {errors.roomType && (
                  <span className="booking-field-error-msg">
                    <AlertCircle className="field-error-icon" /> {errors.roomType}
                  </span>
                )}
              </div>
            </div>

            <button 
              type="submit" 
              className="btn-gold booking-submit-btn"
            >
              Book Now & Confirm Availability
            </button>
          </form>
        </div>
      </div>

      {/* Multistage booking animation before Whatsapp redirection */}
      <SuccessAnimation isVisible={showSuccess} onComplete={handleWhatsAppRedirect} />
    </section>
  );
};

export default BookingForm;
