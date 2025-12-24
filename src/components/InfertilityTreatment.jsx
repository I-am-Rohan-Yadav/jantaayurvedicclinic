import React from 'react';
import './TreatmentPages.css';

function InfertilityTreatment() {
  return (
    <div className="treatment-page">
      <div className="treatment-hero">
        <h1>Infertility Treatment</h1>
        <p className="subtitle">Natural Path to Parenthood</p>
      </div>

      <div className="treatment-content">
        <section className="treatment-section">
          <h2>Ayurvedic Approach to Infertility</h2>
          <p>
            Our holistic approach to infertility treatment combines ancient Ayurvedic wisdom
            with modern understanding. We address the root causes of infertility in both men
            and women through natural therapies, herbal medications, dietary modifications,
            and specialized Panchkarma treatments.
          </p>
        </section>

        <section className="treatment-section">
          <h2>Conditions We Treat</h2>
          <ul>
            <li>PCOS (Polycystic Ovary Syndrome)</li>
            <li>Hormonal imbalances</li>
            <li>Low sperm count and motility</li>
            <li>Endometriosis</li>
            <li>Irregular menstrual cycles</li>
            <li>Unexplained infertility</li>
            <li>Tubal blockages</li>
            <li>Erectile dysfunction</li>
          </ul>
        </section>

        <section className="treatment-section">
          <h2>Treatment Approach</h2>
          <p>
            Our treatment includes specialized therapies like Uttar Basti, herbal formulations
            to improve reproductive health, Panchkarma for detoxification, dietary and lifestyle
            counseling, stress management techniques, and yoga and meditation for hormonal balance.
            We provide comprehensive care for both partners.
          </p>
        </section>

        <section className="treatment-section">
          <h2>Treatment Duration & Pricing</h2>
          <p><strong>Duration:</strong> 3-6 months (varies based on individual condition)</p>
          <p><strong>Price:</strong> Consultation required for personalized treatment plan</p>
        </section>
      </div>
    </div>
  );
}

export default InfertilityTreatment;
