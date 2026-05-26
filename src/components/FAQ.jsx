import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const faqsData = [
    {
      question: "What are the standard Check-In and Check-Out times?",
      answer: "Our standard check-in time is 12:00 PM (noon) and check-out is by 10:00 AM. If you require early check-in or late check-out, please let us know during your booking. We will accommodate this subject to room availability."
    },
    {
      question: "Are room heaters and warm blankets provided?",
      answer: "Yes, absolutely! To ensure your comfort in the mountain climate, we provide premium heavy quilts, thick fleece blankets, and high-performance room heaters. Rest assured, you will stay warm and cozy throughout the night."
    },
    {
      question: "How reliable are the 24/7 Geyser and Wi-Fi facilities?",
      answer: "Both are highly reliable and run 24/7. Hot water is supplied continuously through dedicated high-capacity geysers installed in each room. Our Wi-Fi is powered by a high-speed fiber-optic connection, reaching all rooms and private balconies."
    },
    {
      question: "Which cellular networks have signals at the residency?",
      answer: "Airtel and Jio 4G networks work excellently at the residency with strong signal reception. Please keep in mind that only Postpaid mobile SIM cards remain active in the Jammu & Kashmir and Ladakh territories due to security guidelines."
    },
    {
      question: "Can you help arrange taxi rentals and inner-line permits?",
      answer: "Yes, definitely! We have a dedicated travel desk to make your trip hassle-free. We can secure inner-line sightseeing permits, hire expert local drivers for day tours, or rent premium adventure motorbikes."
    }
  ];

  const [openIdx, setOpenIdx] = useState(null);

  const handleToggle = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="section">
      <div className="section-title-wrapper">
        <span className="section-subtitle">Common Queries</span>
        <h2 className="section-title">
          Frequently Asked <span>Questions</span>
        </h2>
      </div>

      <div className="faq-container">
        {faqsData.map((faq, index) => {
          const isOpen = openIdx === index;
          return (
            <div 
              key={index} 
              className={`glass-card faq-item-card ${isOpen ? 'faq-item-card-expanded' : ''}`}
            >
              <button 
                className="faq-question-trigger" 
                onClick={() => handleToggle(index)}
                aria-expanded={isOpen}
              >
                <span className="faq-question-text">{faq.question}</span>
                <span className="faq-icon-holder">
                  {isOpen ? <Minus className="faq-icon" /> : <Plus className="faq-icon" />}
                </span>
              </button>

              <div className={`faq-answer-collapsible ${isOpen ? 'faq-answer-open' : ''}`}>
                <p className="faq-answer-text">{faq.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQ;
