import React from 'react';
import './AboutUs.css'; // Import the styles

function AboutUs() {
  return (
    <div className="about-us-container">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-text">
          <h1>About Us</h1>
          <p>
            At <strong>Furni</strong>, we redefine comfort and style. Our
            furniture is crafted with precision, blending functionality with
            elegance to transform your spaces.
          </p>
        </div>
        <div className="hero-image">
          <img src="/assets/hero-image.jpg" alt="Furniture Showcase" />
        </div>
      </section>

      {/* Content Section */}
      <section className="about-content">
        <div className="content-box">
          <h2>Our Mission</h2>
          <p>
            To provide high-quality, stylish, and sustainable furniture that
            meets the diverse needs of our customers. We are passionate about
            making your home a haven of comfort and beauty.
          </p>
        </div>
        <div className="content-box">
          <h2>Why Choose Us?</h2>
          <ul>
            <li>Elegant and modern designs</li>
            <li>Durable and sustainable materials</li>
            <li>Affordable pricing</li>
            <li>Exceptional customer service</li>
          </ul>
        </div>
      </section>

      {/* Contact Section */}
      <section className="about-contact">
        <h2>Get in Touch</h2>
        <p>
          Have questions? Reach out to us at{' '}
          <a href="mailto:support@furnicraft.com">support@furnicraft.com</a> or
          visit our showroom.
        </p>
      </section>
    </div>
  );
}

export default AboutUs;
