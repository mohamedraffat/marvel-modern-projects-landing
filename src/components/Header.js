// components/Header.js
import React from 'react';
import Piclogo from "../assets/Logopic.svg";
import '../styles/Header.css';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const handleNavClick = (e) => {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        const element = document.getElementById(targetId);
        
        if (element) {
            const headerOffset = 80; // Height of your fixed header
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }

        setIsMenuOpen(false); // Close menu after clicking
    };

    return (
        <header className="header">
            <div className="logo-container">
                <a href="/" className="logo-link">
                    <img
                        src={Piclogo}
                        alt="Marvel Modern Projects LLC Logo"
                        className="logopic"
                    />
                    <div className="company-name">
                        <h1>MMP</h1>
                        <h2>MARVEL MODERN PROJECTS LLC</h2>
                    </div>
                </a>
            </div>
            <button 
                className="menu-button"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
            >
                ☰
            </button>
            <nav className={`navigation ${isMenuOpen ? 'active' : ''}`}>
                <ul>
                    <li><a href="#about" onClick={handleNavClick}>About Us</a></li>
                    <li><a href="#services" onClick={handleNavClick}>Services</a></li>
                    <li><a href="#equipment" onClick={handleNavClick}>Equipment</a></li>
                    <li><a href="#clients" onClick={handleNavClick}>Clients</a></li>
                    <li><a href="#contact" onClick={handleNavClick}>Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
