// components/AboutUs.js
import React from 'react';
import '../styles/AboutUs.css';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import '../styles/SharedAnimations.css';

function AboutUs() {
    const sectionRef = useIntersectionObserver();
  
    return (
        <section ref={sectionRef} id="about" className="about-us section-fade-in">
            <h2 className="fade-in-item delay-1">About Us</h2>
            <div className="about-content fade-in-item delay-2">
                <ul className="about-bullets">
                    <li className="bullet-item fade-in-item delay-1">
                        At Marvel Modern Projects, we are more than just a contracting company we are a catalyst for transformation in the construction and infrastructure landscape of the UAE.
                    </li>
                    <li className="bullet-item fade-in-item delay-2">
                        Since our inception in 2023, we have been steadfast in our mission to deliver high-quality, sustainable, and innovative solutions across a diverse range of services, including road and building construction, infrastructure development, marine works, rock and aggregates supply, and heavy equipment rental.
                    </li>
                    <li className="bullet-item fade-in-item delay-3">
                        Strategically located in the Mafraq Industrial Area of Abu Dhabi, we are positioned to serve both urban and remote projects with efficiency and precision. Our proximity to key industrial hubs enables us to mobilize resources swiftly, ensuring timely project execution and client satisfaction.
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default AboutUs;