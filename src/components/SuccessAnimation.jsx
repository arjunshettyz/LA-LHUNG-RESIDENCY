import React, { useState, useEffect } from 'react';
import { CheckCircle2, Loader2, Sparkles } from 'lucide-react';

const SuccessAnimation = ({ isVisible, onComplete }) => {
  const [stage, setStage] = useState(0);
  const stages = [
    "Checking room availability...",
    "Confirming residency rates...",
    "Generating booking details...",
    "Connecting to WhatsApp Booking Desk..."
  ];

  useEffect(() => {
    if (!isVisible) return;

    setStage(0);
    // Cycle through descriptive loading stages every 900ms
    const interval = setInterval(() => {
      setStage((prev) => {
        if (prev < stages.length - 1) {
          return prev + 1;
        } else {
          clearInterval(interval);
          return prev;
        }
      });
    }, 900);

    // Call onComplete redirect after 4000ms
    const timeout = setTimeout(() => {
      onComplete();
    }, 4000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [isVisible, onComplete]);

  if (!isVisible) return null;

  return (
    <div className="success-overlay">
      <div className="glass-card success-card fade-in">
        {stage < stages.length - 1 ? (
          <div className="success-stage-container">
            <Loader2 className="success-loader-spinner" />
            <h3 className="success-stage-title">Securing Your Alpine Retreat</h3>
            <p className="success-stage-desc">{stages[stage]}</p>
          </div>
        ) : (
          <div className="success-final-container">
            <div className="success-checkmark-wrapper">
              <CheckCircle2 className="success-checkmark-icon pulse-animation" />
            </div>
            <h3 className="success-final-title">Reservation Prepared!</h3>
            <p className="success-final-desc">
              Your details are formatted and ready. You will be redirected to WhatsApp to confirm your booking at **LA-LHUNG RESIDENCY**.
            </p>
            <div className="success-badge">
              <Sparkles className="success-badge-icon float-animation" />
              <span>Redirecting to WhatsApp...</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SuccessAnimation;
