import React from "react";
import { Link } from "react-router-dom";
import "./About.css";
import aboutBanner from "../assets/contactus.png";

function About() {
  return (
    <div className="about-page">
      {/* Banner section */}
      <div
        className="about-banner"
        style={{ backgroundImage: `url(${aboutBanner})` }}
      >
        <h1>About Us</h1>
        <p><Link to="/">Home</Link> &gt; About</p>
      </div>

      {/* Main Content */}
      <div className="about-content">
        <div className="about-header">
          <h4>Our Philosophy</h4>
          <h2>Where Ancient Wisdom Meets Modern Healing</h2>
        </div>

        <div className="about-story">
          <div className="story-text">
            <p className="main-description">
              At our clinic, wellness is curated with intention and expertise. We seamlessly blend the timeless intelligence of Ayurveda with advanced physiotherapy to deliver deeply personalised care for pain, stress, mobility concerns, and lifestyle imbalances.
            </p>

            <p className="sub-description">
              Each experience is thoughtfully designed—combining bespoke Ayurvedic therapies, restorative rituals, and nervous-system calming treatments with precision-led movement therapy, rehabilitation, and strength conditioning.
            </p>

            <p className="sub-description">
              In an environment defined by calm, comfort, and discretion, our expert practitioners focus on long-term balance, effortless movement, and lasting vitality. Here, healing is not rushed—it is refined, holistic, and tailored entirely to you.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="values-section">
          <h3>Our Core Values</h3>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🌿</div>
              <h4>Holistic Wellness</h4>
              <p>Integrating mind, body, and spirit for complete healing and balance</p>
            </div>

            <div className="value-card">
              <div className="value-icon">💎</div>
              <h4>Personalized Care</h4>
              <p>Every treatment is uniquely designed to meet your individual needs</p>
            </div>

            <div className="value-card">
              <div className="value-icon">🔬</div>
              <h4>Expert Guidance</h4>
              <p>Skilled practitioners combining traditional wisdom with modern techniques</p>
            </div>

            <div className="value-card">
              <div className="value-icon">🕊️</div>
              <h4>Serene Environment</h4>
              <p>A sanctuary of peace where healing happens naturally</p>
            </div>
          </div>
        </div>

        {/* Approach Section */}
        <div className="approach-section">
          <div className="approach-content">
            <h3>Our Approach</h3>
            <div className="approach-grid">
              <div className="approach-item">
                <div className="approach-number">01</div>
                <h4>Comprehensive Assessment</h4>
                <p>We begin with an in-depth evaluation of your health history, current concerns, and wellness goals</p>
              </div>

              <div className="approach-item">
                <div className="approach-number">02</div>
                <h4>Tailored Treatment Plan</h4>
                <p>Based on your unique needs, we design a bespoke combination of Ayurvedic and physiotherapy treatments</p>
              </div>

              <div className="approach-item">
                <div className="approach-number">03</div>
                <h4>Guided Implementation</h4>
                <p>Our expert practitioners guide you through each session with care, precision, and deep attention</p>
              </div>

              <div className="approach-item">
                <div className="approach-number">04</div>
                <h4>Long-term Support</h4>
                <p>We provide ongoing guidance and adjustments to ensure sustained wellness and vitality</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="about-cta">
          <h3>Begin Your Wellness Journey</h3>
          <p>Experience healing that is refined, intentional, and uniquely yours</p>
          <Link to="/contact" className="cta-button">Book Your Consultation</Link>
        </div>
      </div>
    </div>
  );
}

export default About;
