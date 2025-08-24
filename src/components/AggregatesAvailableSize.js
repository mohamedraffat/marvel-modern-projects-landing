// components/AggregatesAvailableSize.js
import React, { useEffect, useRef } from 'react';
import fivemmImage from '../assets/0-5mm.jpg';
import tenmmImage from '../assets/5-10mm.jpg';
import twentymmImage from '../assets/10-20mm.jpg';
import thirtymmImage from '../assets/10-30mm .jpg';  
import fortymmImage from '../assets/20-40mm.jpg';
import sixtymmImage from '../assets/30-60mm.jpg';
import fortysixtyImage from '../assets/40-60mm.jpg';
import '../styles/AggregatesAvailableSize.css';

function AggregatesAvailableSize() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = sectionRef.current;
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const aggregates = [
    { size: '0-5 mm', image: fivemmImage },
    { size: '5-10 mm', image: tenmmImage },
    { size: '10-20 mm', image: twentymmImage },
    { size: '10-30 mm', image: thirtymmImage },
    { size: '20-40 mm', image: fortymmImage },
    { size: '30-60 mm', image: sixtymmImage },
    { size: '40-60 mm', image: fortysixtyImage },
  ];

  return (
    <section ref={sectionRef} className="aggregates-section">
      <h2>AGGREGATES AVAILABLE SIZE</h2>
      <div className="aggregates-grid">
        {aggregates.map((aggregate, index) => (
          <div 
            key={index} 
            className="aggregate-box"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="image-container">
              <img src={aggregate.image} alt={aggregate.size} />
            </div>
            <h3>{aggregate.size}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AggregatesAvailableSize;