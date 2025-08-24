// components/ProvenStatistics.js
import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import '../styles/SharedAnimations.css';
import '../styles/ProvenStatistics.css';

function ProvenStatistics() {
    const sectionRef = useIntersectionObserver();

    return (
        <section ref={sectionRef} className="proven-statistics section-fade-in">
            <h2 className="fade-in-item delay-1">Proven Statistics</h2>
            <div className="statistics-container">
                <ul className="statistics-list">
                    <li className="statistic-item fade-in-item delay-1">
                        <span className="number">150+</span>
                        <span className="label">Strong Equipment Rental</span>
                    </li>
                    <li className="statistic-item fade-in-item delay-2">
                        <span className="number">300+</span>
                        <span className="label">Crane & Heavy Machinery</span>
                    </li>
                    <li className="statistic-item fade-in-item delay-3">
                        <span className="number">500+</span>
                        <span className="label">Infrastructure & Project Growth</span>
                    </li>
                    <li className="statistic-item fade-in-item delay-4">
                        <span className="number">1000+</span>
                        <span className="label">Manpower & Scaling</span>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default ProvenStatistics;