// components/OurProducts.js
import React from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import "../styles/SharedAnimations.css";
import "../styles/OurProducts.css";

function OurProducts() {
  const sectionRef = useIntersectionObserver();

  const products = [
    {
      title: "Construction Material",
      desc: "High-quality construction materials for various project needs",
    },
    {
      title: "Building Material",
      desc: "Premium building materials ensuring structural integrity",
    },
    {
      title: "Rock & Aggregate",
      desc: "Wide range of rocks and aggregates for construction projects",
    },
    {
      title: "Base Course & Sub Base",
      desc: "Quality base materials for solid foundations",
    },
  ];

  return (
    <section ref={sectionRef} className="our-products section-fade-in">
      <h2 className="fade-in-item delay-1">OUR PRODUCTS</h2>
      <div className="products-grid">
        {products.map((product, index) => (
          <div
            key={product.title}
            className={`product-card fade-in-item delay-${index + 2}`}
          >
            <h3>{product.title}</h3>
            <p>{product.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default OurProducts;
