import React from 'react';
import './TreatmentPages.css';

function BodyDetoxification() {
  return (
    <div className="treatment-page">
      <div className="treatment-hero">
        <h1>Body Detoxification</h1>
        <p className="subtitle">Cleanse, Rejuvenate, Transform</p>
      </div>

      <div className="treatment-content">
        <section className="treatment-section">
          <h2>Comprehensive Detoxification Programs</h2>
          <p>
            Our body detoxification programs are designed to eliminate accumulated toxins (Ama)
            from your body, restore digestive fire (Agni), and rejuvenate all bodily systems.
            We use authentic Ayurvedic methods combined with modern detox practices to provide
            a complete cleansing experience.
          </p>
        </section>

        <section className="treatment-section">
          <h2>Detoxification Therapies</h2>
          <ul>
            <li><strong>Virechana Karma:</strong> Therapeutic purgation for deep cleansing</li>
            <li><strong>Basti Karma:</strong> Medicated enema therapy</li>
            <li><strong>Swedana:</strong> Herbal steam therapy</li>
            <li><strong>Abhyanga:</strong> Full body oil massage for toxin mobilization</li>
            <li>Herbal detox formulations</li>
            <li>Liquid diet and fasting protocols</li>
            <li>Colon hydrotherapy</li>
            <li>Liver and kidney cleansing programs</li>
          </ul>
        </section>

        <section className="treatment-section">
          <h2>Benefits of Detoxification</h2>
          <p>
            Regular detoxification helps improve digestion and metabolism, boost energy levels,
            enhance mental clarity, strengthen immunity, improve skin health and complexion,
            reduce inflammation, promote better sleep, and support overall organ function.
            It's an excellent preventive health measure.
          </p>
        </section>

        <section className="treatment-section">
          <h2>Program Details</h2>
          <p><strong>Duration:</strong> 5, 7, or 14-day programs</p>
          <p><strong>Price:</strong> Starting from ₹8,000 (5-day program)</p>
        </section>
      </div>
    </div>
  );
}

export default BodyDetoxification;
