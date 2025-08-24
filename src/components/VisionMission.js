// components/VisionMission.js
import React, { useEffect, useRef } from 'react';
import '../styles/VisionMission.css';

function VisionMission() {
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
    <section ref={sectionRef} className="vision-mission">
      <div className="vision-mission-container">
        <div className="vision box">
          <h2>Our Vision</h2>
          <p>At Marvel Modern Projects, our vision is to stand as a driving force in the UAE's construction and infrastructure landscape Learning recognition for our unwavering dedication to quality, safety, and sustainable development.  We aim to exceed client expectations by consistently delivering world-class projects that reflect our commitment to excellence and operational transparency, much like industry leaders who prioritize cutting-edge practices, environmental responsibility, and ethical conduct.</p>
        </div>
        <div className="mission box">
          <h2>Our Mission</h2>
          <p>Our mission is to deliver exceptional contracting, construction, and infrastructure solutions that set the benchmark in the UAE through unwavering dedication to quality, safety, and sustainable development.  We strive to complete every road, building, marine project, and heavy equipment engagement on time and within budget by leveraging cutting-edge technology, skilled professionals, and efficient methodologies.</p>
        </div>
      </div>
      <p className="slogan">"Your Vision, Our Foundation."</p>
    </section>
  );
}

export default VisionMission;