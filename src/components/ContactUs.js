// components/ContactUs.js
import React, { useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import '../styles/SharedAnimations.css';
import '../styles/ContactUs.css';

function ContactUs() {
  const sectionRef = useIntersectionObserver();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const mailtoLink = `mailto:marvelmodern.uae@gmail.com?subject=Contact from ${formData.name}&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    
    window.location.href = mailtoLink;

    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <section ref={sectionRef} id="contact" className="contact-us section-fade-in">
      <h2 className="fade-in-item delay-1">Contact Us</h2>
      <div className="contact-container">
        <div className="contact-info fade-in-item delay-2">
          <h3>Get in Touch</h3>
          <div className="info-item">
            <i className="fas fa-map-marker-alt"></i>
            <p>Mafraq Industrial Area, Abu Dhabi, UAE</p>
          </div>
          <div className="info-item">
            <i className="fas fa-phone"></i>
            <p>+97152887070</p>
            <p>+971528009189 </p>
          </div>
          <div className="info-item">
            <i className="fas fa-envelope"></i>
            <p>Email: marvelmodern.uae@gmail.com</p>
          </div>
        </div>
        <form className="contact-form fade-in-item delay-3" onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="name"
            placeholder="Your Name" 
            value={formData.name}
            onChange={handleChange}
            required 
          />
          <input 
            type="email" 
            name="email"
            placeholder="Your Email" 
            value={formData.email}
            onChange={handleChange}
            required 
          />
          <input 
            type="tel" 
            name="phone"
            placeholder="Your Phone" 
            value={formData.phone}
            onChange={handleChange}
          />
          <textarea 
            name="message"
            placeholder="Your Message" 
            rows="5" 
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default ContactUs;