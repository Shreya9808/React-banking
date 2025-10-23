import React from "react";
import "./about.css";
import aboutImg from "../assests/p2.jpg";

const About = () => {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <header className="about-hero">
        <div className="hero-text">
          <h1>About YourBank</h1>
          <p>Secure, fast, and user-friendly online banking at your fingertips.</p>
        </div>
        <div className="hero-image">
          <img src={aboutImg} alt="Banking Illustration" />
        </div>
      </header>

      {/* Mission & Vision */}
      <section className="about-mission">
        <h2>Our Mission</h2>
        <p>
          To provide a seamless, secure, and innovative banking experience for our customers, enabling them to manage their finances effortlessly.
        </p>

        <h2>Our Vision</h2>
        <p>
          To be the most trusted and technologically advanced bank, empowering individuals and businesses to achieve their financial goals.
        </p>
      </section>

      {/* Features Section */}
      <section className="about-features">
        <h2>Key Features</h2>
        <ul>
          <li>Secure Fund Transfers</li>
          <li>Online Account Management</li>
          <li>Instant Balance Enquiry</li>
          <li>24/7 Customer Support</li>
          <li>Real-time Transaction Alerts</li>
        </ul>
      </section>

      {/* Contact / Footer */}
      <footer className="about-footer">
        <p>Contact us: support@yourbank.com | © {new Date().getFullYear()} YourBank</p>
      </footer>
    </div>
  );
};

export default About;
