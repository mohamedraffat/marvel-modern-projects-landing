// components/OurEquipments.js
import React from 'react';
import doserImage from '../assets/Doser.jpg';
import trackDoserImage from '../assets/Track-Doser.jpg';
import wheelLoaderImage from "../assets/Wheel Loader.jpg";
import excavatorImage from '../assets/Excavator.jpg';
import dumpTruckImage from '../assets/Dump-Truck.jpg';
import graderImage from '../assets/Grader.jpg';
import optimalEquipmentImage from '../assets/Optimal-Equipment.jpg';
import hydraulicExcavatorImage from '../assets/Hydraulic-Excavator.jpg';
import jawCrusherImage from '../assets/Jaw-Crusher.jpg';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import '../styles/SharedAnimations.css';
import '../styles/OurEquipments.css';

function OurEquipments() {
    const sectionRef = useIntersectionObserver();
  
    return (
        <section ref={sectionRef} id="equipment" className="our-equipments section-fade-in">
            <h2>OUR EQUIPMENTS</h2>
            <div className="equipment-grid">
                {[
                    { img: doserImage, name: "Doser" },
                    { img: trackDoserImage, name: "Track Doser" },
                    { img: wheelLoaderImage, name: "Wheel Loader" },
                    { img: excavatorImage, name: "Excavator" },
                    { img: dumpTruckImage, name: "Dump Truck" },
                    { img: graderImage, name: "Grader" },
                    { img: optimalEquipmentImage, name: "Optimal Equipment" },
                    { img: hydraulicExcavatorImage, name: "Hydraulic Excavator" },
                    { img: jawCrusherImage, name: "Jaw Crusher" }
                ].map((equipment, index) => (
                    <div 
                        key={equipment.name}
                        className="equipment-card"
                    >
                        <div className="equipment-image">
                            <img src={equipment.img} alt={equipment.name} />
                        </div>
                        <h3>{equipment.name}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default OurEquipments;