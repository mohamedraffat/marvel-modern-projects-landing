// components/KeyPrinciples.js
import React, { useEffect, useRef } from 'react';
import '../styles/KeyPrinciples.css';

function KeyPrinciples() {
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

  return (
    <section ref={sectionRef} className="key-principles">
      <h2>Key Principles</h2>
      <ul>
        <li>We place safety and environmental care front and center. Rigorous safety protocols ensure every project is accident-free, while sustainable practices minimize ecological impact.</li>
        <li>Honesty, transparency, and responsibility guide our operations. We deliver on commitments, maintain ethical standards, and cultivate client trust through reliability.</li>
        <li>Our focus on craftsmanship, premium materials, and continuous improvement drives exceptional results. Every project is completed with precision and to exacting standards.</li>
        <li>By embracing new technologies and working closely with clients and partners, we deliver smarter, more efficient solutions. Teamwork and innovation spark our growth and success.</li>
      </ul>
    </section>
  );
}

export default KeyPrinciples;