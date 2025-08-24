// components/OurServices.js
import React from 'react';
import roadsImage from '../assets/roads-infrastructure.jpg'; // Example images
import rocksAggregatesImage from '../assets/rocks-aggregates.jpg';
import marineWorksImage from '../assets/marine-works.jpg';
import heavyEquipmentImage from '../assets/heavy-equipment.jpg';
import constructionsImage from '../assets/Constructions.jpg';
import maintenanceImage from '../assets/Maintenance.jpg';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import '../styles/SharedAnimations.css';

function OurServices() {
    const sectionRef = useIntersectionObserver();
  
  return (
    <section ref={sectionRef} id="services" className="our-services section-fade-in">
      <h2 className="fade-in-item delay-1">OUR SERVICES</h2>
      <div className="service-list fade-in-item delay-2">
        <div className="service-item fade-in-item delay-2">
          <img src={roadsImage} alt="Roads and Infrastructure Works" />
      <h3>Roads and Infrastructure Works </h3>
        </div>
        <div className="service-item fade-in-item delay-2">
          <img src={rocksAggregatesImage} alt="Rocks and Aggregates Supply" />
            <h3>Rocks and Aggregates Supply </h3>
        </div>
        <div className="service-item fade-in-item delay-2">
          <img src={marineWorksImage} alt="Marine Works" />
          <h3>Marine Works </h3>
        </div>
        <div className="service-item fade-in-item delay-2">
          <img src={heavyEquipmentImage} alt="Heavy Equipment Rental" />
          <h3>Heavy Equipment Rental </h3>
        </div>
        <div className="service-item fade-in-item delay-2">
          <img src={constructionsImage} alt="Constructions" />
          <h3>Constructions </h3>
        </div>
        <div className="service-item fade-in-item delay-2">
          <img src={maintenanceImage} alt="Maintenance" />
          <h3>Maintenance </h3>
        </div>
      </div>
    </section>
  );
}

export default OurServices;