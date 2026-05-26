import React, { useState, useRef, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

import img1 from '../assets/Photo-1.jpg';
import img2 from '../assets/Photo-2.jpg';
import img4 from '../assets/Photo-4.jpg';
import img5 from '../assets/Photo-5.jpg';
import img9 from '../assets/Photo-9.jpg';
import img11 from '../assets/Photo-11.jpg';
import img13 from '../assets/Photo-13.jpg';
import img15 from '../assets/Photo-15.jpg';
import img16 from '../assets/Photo-16.jpg';
import img18 from '../assets/Photo-18.jpg';
import img19 from '../assets/Photo-19.jpg';
import img20 from '../assets/Photo-20.jpg';
import img23 from '../assets/Photo-23.jpg';

const Gallery = () => {
  const [activeIdx, setActiveIdx] = useState(null);
  const sliderRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const galleryItems = [
    { src: img1, title: "Property View 1", category: "Resort" },
    { src: img2, title: "Room View 1", category: "Suites" },
    { src: img4, title: "Dining View", category: "Dining" },
    { src: img5, title: "Property View 2", category: "Resort" },
    { src: img9, title: "Room View 2", category: "Suites" },
    { src: img11, title: "Property View 3", category: "Resort" },
    { src: img13, title: "Scenic View 1", category: "Scenic Views" },
    { src: img15, title: "Scenic View 2", category: "Scenic Views" },
    { src: img16, title: "Scenic View 3", category: "Scenic Views" },
    { src: img18, title: "Room View 3", category: "Suites" },
    { src: img19, title: "Property View 4", category: "Resort" },
    { src: img20, title: "Property View 5", category: "Resort" },
    { src: img23, title: "Scenic View 4", category: "Scenic Views" }
  ];

  // Group items into chunks of 4 for the 2x2 grid (or 1 on mobile)
  const chunkSize = isMobile ? 1 : 4;
  const slideChunks = [];
  for (let i = 0; i < galleryItems.length; i += chunkSize) {
    slideChunks.push(galleryItems.slice(i, i + chunkSize));
  }

  const handleOpenLightbox = (index) => {
    setActiveIdx(index);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseLightbox = () => {
    setActiveIdx(null);
    document.body.style.overflow = '';
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setActiveIdx((prev) => (prev === 0 ? galleryItems.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setActiveIdx((prev) => (prev === galleryItems.length - 1 ? 0 : prev + 1));
  };

  const scrollLeft = () => {
    if (sliderRef.current) {
      const slideWidth = sliderRef.current.clientWidth;
      sliderRef.current.scrollBy({ left: -slideWidth, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      const slideWidth = sliderRef.current.clientWidth;
      sliderRef.current.scrollBy({ left: slideWidth, behavior: 'smooth' });
    }
  };

  return (
    <section id="gallery" className="section">
      <div className="section-title-wrapper">
        <span className="section-subtitle">Visual Experience</span>
        <h2 className="section-title">
          Snapshots of <span>LA-LHUNG RESIDENCY
          </span>
        </h2>
      </div>

      <div style={{ position: 'relative', padding: isMobile ? '0 30px' : '0 60px', maxWidth: '1000px', margin: '0 auto' }}>
        <button
          onClick={scrollLeft}
          style={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)', zIndex: 2, background: 'rgba(212, 175, 55, 0.8)', border: 'none', color: '#000', borderRadius: '50%', width: '45px', height: '45px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 4px 10px rgba(0,0,0,0.3)', transition: 'all 0.3s ease' }}
          className="slider-nav-btn"
        >
          <ChevronLeft />
        </button>

        <div
          ref={sliderRef}
          style={{
            display: 'flex',
            overflowX: 'auto',
            scrollBehavior: 'smooth',
            scrollSnapType: 'x mandatory',
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
            padding: '10px 0'
          }}
          className="gallery-slider-container"
        >
          {slideChunks.map((chunk, chunkIndex) => (
            <div
              key={chunkIndex}
              style={{
                minWidth: '100%',
                flexShrink: 0,
                scrollSnapAlign: 'start',
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
                gridTemplateRows: isMobile ? '1fr' : 'repeat(2, 1fr)',
                gap: '20px',
                padding: '0 10px',
                height: isMobile ? '350px' : '600px'
              }}
            >
              {chunk.map((item, idx) => {
                const globalIndex = chunkIndex * chunkSize + idx;
                return (
                  <div
                    key={globalIndex}
                    className="gallery-card-item img-zoom-wrapper"
                    onClick={() => handleOpenLightbox(globalIndex)}
                    style={{ width: '100%', height: '100%', borderRadius: '15px' }}
                  >
                    <img
                      src={item.src}
                      alt={item.title}
                      className="gallery-card-img img-zoom"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '15px' }}
                    />
                    <div className="gallery-card-overlay">
                      <div className="gallery-card-meta">
                        <span className="badge-gold gallery-card-badge">{item.category}</span>
                        <h3 className="gallery-card-title">{item.title}</h3>
                      </div>
                      <div className="gallery-card-zoom-icon-wrapper">
                        <ZoomIn className="gallery-card-zoom-icon" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        <button
          onClick={scrollRight}
          style={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)', zIndex: 2, background: 'rgba(212, 175, 55, 0.8)', border: 'none', color: '#000', borderRadius: '50%', width: '45px', height: '45px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 4px 10px rgba(0,0,0,0.3)', transition: 'all 0.3s ease' }}
          className="slider-nav-btn"
        >
          <ChevronRight />
        </button>
      </div>

      {/* Lightbox Overlay */}
      {activeIdx !== null && (
        <div className="lightbox-overlay" onClick={handleCloseLightbox}>
          <button
            className="lightbox-btn-close"
            onClick={handleCloseLightbox}
            aria-label="Close Lightbox"
          >
            <X className="lightbox-btn-icon" />
          </button>

          <button
            className="lightbox-btn-nav lightbox-btn-prev"
            onClick={handlePrev}
            aria-label="Previous Image"
          >
            <ChevronLeft className="lightbox-btn-icon" />
          </button>

          <div className="lightbox-viewport" onClick={(e) => e.stopPropagation()}>
            <img
              src={galleryItems[activeIdx].src}
              alt={galleryItems[activeIdx].title}
              className="lightbox-img"
            />
            <div className="lightbox-caption">
              <span className="lightbox-caption-cat">{galleryItems[activeIdx].category}</span>
              <h3 className="lightbox-caption-title">{galleryItems[activeIdx].title}</h3>
            </div>
          </div>

          <button
            className="lightbox-btn-nav lightbox-btn-next"
            onClick={handleNext}
            aria-label="Next Image"
          >
            <ChevronRight className="lightbox-btn-icon" />
          </button>
        </div>
      )}
    </section>
  );
};

export default Gallery;
