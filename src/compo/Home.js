import React from "react";
import "./home.css";
import bankingImg from "../assests/p1.jpg";
import { Link } from "react-router";

const features = [
  { title: "Withdrawal", icon: "💸", action: () => alert("Withdrawal clicked") },
  { title: "Deposit", icon: "🏦", action: () => alert("Deposit clicked") },
  { title: "Fund Transfer", icon: "🔁", action: () => alert("Fund Transfer clicked") },
  { title: "Balance Enquiry", icon: "💰", action: () => alert("Balance Enquiry clicked") },
  { title: "PIN Change", icon: "🔒", action: () => alert("PIN Change clicked") },
  { title: "Account Summary", icon: "📄", action: () => alert("Account Summary clicked") },
];

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero section */}
      <header className="home-hero">
        <div className="hero-text">
          <h1>Welcome to YourBank</h1>
          <p>Manage your accounts, transfers, and transactions easily.</p>
           <Link className="btn btn-primary" to="/Createacc">Create Account</Link>
        </div>
        <div className="hero-image">
          <img src={bankingImg} alt="Banking Illustration" />
        </div>
       
      </header>

      

      {/* Features Cards */}
      <section className="features-section">
        <h2>Banking Services</h2>
        <div className="features-cards">
          {features.map((f, index) => (
            <div key={index} className="feature-card" onClick={f.action}>
              <div className="feature-icon">{f.icon}</div>
              <h3 className="feature-title">{f.title}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
