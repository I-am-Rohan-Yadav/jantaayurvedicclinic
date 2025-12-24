import React from 'react';
import './TreatmentPages.css';

function GroomingTherapies() {
  return (
    <div className="treatment-page">
      <div className="treatment-hero">
        <h1>Grooming Therapies</h1>
        <p className="subtitle">Enhance Your Natural Beauty</p>
      </div>

      <div className="treatment-content">
        <section className="treatment-section">
          <h2>Ayurvedic Beauty & Grooming Treatments</h2>
          <p>
            Our grooming therapies combine traditional Ayurvedic beauty treatments with modern
            spa techniques to enhance your natural beauty from within. We use natural, herbal
            products that nourish your skin and hair while promoting overall wellness.
          </p>
        </section>

        <section className="treatment-section">
          <h2>Our Grooming Services</h2>
          <ul>
            <li><strong>Mukhalepam:</strong> Ayurvedic facial for glowing skin</li>
            <li><strong>Hair Spa:</strong> Deep conditioning and scalp treatments</li>
            <li><strong>Anti-Aging Treatments:</strong> Natural wrinkle reduction therapies</li>
            <li><strong>Skin Brightening:</strong> Herbal treatments for fair, radiant skin</li>
            <li><strong>Acne Treatment:</strong> Natural solutions for clear skin</li>
            <li><strong>Hair Fall Control:</strong> Ayurvedic remedies for healthy hair</li>
            <li><strong>De-Tan Treatment:</strong> Remove sun damage naturally</li>
            <li><strong>Body Polishing:</strong> Exfoliation and skin smoothing</li>
          </ul>
        </section>

        <section className="treatment-section">
          <h2>Special Programs</h2>
          <p>
            We offer specialized programs for bridal grooming, pre-wedding packages, seasonal
            skin care, hair rejuvenation, and anti-pigmentation treatments. All our products
            are natural, chemical-free, and suitable for all skin types. We customize treatments
            based on your skin and hair type for optimal results.
          </p>
        </section>

        <section className="treatment-section">
          <h2>Treatment Details</h2>
          <p><strong>Session Duration:</strong> 60-90 minutes</p>
          <p><strong>Price:</strong> ₹1,200 per session | Special packages available</p>
        </section>
      </div>
    </div>
  );
}

export default GroomingTherapies;
