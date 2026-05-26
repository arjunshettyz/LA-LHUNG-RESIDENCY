import React from 'react';
import { Star } from 'lucide-react';

const GoogleLogo = () => (
  <svg viewBox="0 0 48 48" width="24px" height="24px">
    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
  </svg>
);

const VerifiedBadge = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: '6px' }}>
    <path d="M10.5 2.5L12 1L13.5 2.5L15.5 2L16.5 4L18.5 4.5L18 6.5L19.5 8L18 9.5L18.5 11.5L16.5 12L15.5 14L13.5 13.5L12 15L10.5 13.5L8.5 14L7.5 12L5.5 11.5L6 9.5L4.5 8L6 6.5L5.5 4.5L7.5 4L8.5 2L10.5 2.5Z" fill="#4285F4"/>
    <path d="M10.5 11.5L8 9L9.5 7.5L10.5 8.5L14.5 4.5L16 6L10.5 11.5Z" fill="white"/>
  </svg>
);

const Testimonials = () => {
  const reviews = [
    {
      name: "LEH Leh",
      date: "2 days ago",
      text: "Super'rrrr se Uper'rrrrr ✍️😉",
      avatarInitial: "L",
      avatarBg: "#5c6bc0"
    },
    {
      name: "Tundup Paljor",
      date: "2 weeks ago",
      text: "Great stay must visit... comfortable room with good pricing",
      avatarInitial: "T",
      avatarBg: "#424242"
    },
    {
      name: "Munawar Hussain",
      date: "3 weeks ago",
      text: "if you are in hunder and wants good hospitality and good food this the place for it.loved their service",
      avatarInitial: "M",
      avatarBg: "#78909c"
    },
    {
      name: "Arjun Pangunuri",
      date: "today",
      text: "We had a wonderful time here. The food was amazing and the service was perfect, I highly recommend this place.",
      avatarInitial: "A",
      avatarBg: "#5c6bc0"
    }
  ];

  return (
    <section id="testimonials" className="section">
      <div className="section-title-wrapper">
        <span className="section-subtitle">Google Reviews</span>
        <h2 className="section-title">
          What Our <span>Guests Say</span>
        </h2>
      </div>

      <div className="google-reviews-container">
        {reviews.map((review, idx) => (
          <div key={idx} className="glass-card google-review-card">
            <div className="gr-header">
              <div className="gr-author-info">
                <div className="gr-avatar" style={{ backgroundColor: review.avatarBg }}>
                  {review.avatarInitial}
                </div>
                <div className="gr-name-date">
                  <span className="gr-name">{review.name}</span>
                  <span className="gr-date">{review.date}</span>
                </div>
              </div>
              <GoogleLogo />
            </div>
            
            <div className="gr-stars">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="gr-star" />
              ))}
              <VerifiedBadge />
            </div>

            <p className="gr-text">{review.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
