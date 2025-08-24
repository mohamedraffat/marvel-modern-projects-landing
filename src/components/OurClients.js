// components/OurClients.js
import React from 'react';
import trojanImage from '../assets/trojan.jpg';
import DanwayImage from '../assets/Danway.jpg';
import lafargeImage from '../assets/lafarge.jpg';
import lightstoneImage from '../assets/lightstone.jpg';
import bnImage from '../assets/bn.jpg';
import richeImage from '../assets/riche.jpg';
import bluelightImage from '../assets/bluelight.jpg';
import albarkImage from '../assets/albark.jpg';
import AKCImage from '../assets/akc.jpg';
import marjanImage from '../assets/marjan.jpg';
import cogImage from '../assets/cog.jpg';
import alarabyImage from '../assets/alarbya.jpg';
import binImage from '../assets/binladin.jpg';
import alkhademImage from '../assets/belkhadim.jpg';
import sfina from '../assets/sfina.jpg';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import '../styles/SharedAnimations.css';
import '../styles/OurClients.css';


function OurClients() {
    const sectionRef = useIntersectionObserver();
  
    const clients = [
        { img: trojanImage, name: "Torjan" },
        { img: DanwayImage, name: "Danway" },
        { img: lafargeImage, name: "Lafarge" },
        { img: lightstoneImage, name: "EMIRATES CEMENT" },
        { img: bnImage, name: "BN ENERGY" },
        { img: richeImage, name: "RITCHIE BROS. Auctioneers" },
        { img: bluelightImage, name: "blue light REED BED CONTRACTING LLC" },
        { img: albarkImage, name: "L BARRAK CRUSHER" },
        { img: AKCImage, name: "AKC CRUSHER LLC" },
        { img: marjanImage, name: "MARJAN AMAN TRANSPORT" },
        { img: cogImage, name: "COG INTERNATIONAL" },
        { img: alarabyImage, name: "AAARONSTRUCTION" },
        { img: binImage, name: "Binladin Contracting Group" },
        { img: alkhademImage, name: "AL KHADEM INTERNATIONAL ENTERPRISES" },
        { img:sfina, name: "SFINA CONTRACTING LLC" }
    ];

    return (
       <section ref={sectionRef} id="clients" className="our-clients section-fade-in">
            <h2 className="fade-in-item delay-1">OUR CLIENTS</h2>
            <div className="client-grid">
                {clients.map((client, index) => (
                    <div 
                        key={client.name}
                        className={`client-item fade-in-item delay-${Math.min(index + 2, 4)}`}
                    >
                        <img src={client.img} alt={`${client.name} Logo`} />
                    </div>
                ))}
            </div>
        </section>
    );
}

export default OurClients;