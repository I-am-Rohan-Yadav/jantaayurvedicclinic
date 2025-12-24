import React from 'react';
import './TreatmentPages.css';

function PanchkarmaTherapies() {
  return (
    <div className="treatment-page">
      <div className="treatment-hero">
        <h1>Panchkarma Therapies</h1>
        <p className="subtitle">Deep Cleansing & Rejuvenation</p>
      </div>

      <div className="treatment-content">
        <section className="treatment-section">
          <h2>What is Panchkarma?</h2>
          <p>
            Panchkarma is an ancient Ayurvedic detoxification and rejuvenation therapy that
            eliminates toxins from the body and restores balance to the doshas. This comprehensive
            treatment includes five main procedures designed to cleanse the body at a cellular level
            and promote optimal health.
          </p>
        </section>

        <section className="treatment-section">
          <h2>Our Panchkarma Therapies</h2>
          <ul>
            <li><strong>Abhyanga:</strong> Therapeutic oil massage for relaxation and detoxification</li>
            <li><strong>Shirodhara:</strong> Continuous flow of warm oil on the forehead for mental peace</li>
            <li><strong>Swedana:</strong> Herbal steam therapy to eliminate toxins</li>
            <li><strong>Virechana:</strong> Therapeutic purgation for digestive health</li>
            <li><strong>Basti:</strong> Medicated enema therapy for colon cleansing</li>
            <li><strong>Nasya:</strong> Nasal administration of herbal oils</li>
            <li><strong>Kati Basti:</strong> Lower back pain relief therapy</li>
            <li><strong>Janu Basti:</strong> Knee pain relief therapy</li>
          </ul>
        </section>

        <section className="treatment-section">
          <h2>Benefits</h2>
          <p>
            Panchkarma helps in removing deep-rooted toxins, improving immunity, enhancing
            mental clarity, reducing stress, balancing hormones, improving skin health,
            and promoting overall rejuvenation and vitality.
          </p>
        </section>

        <section className="treatment-section">
          <h2>Treatment Duration & Pricing</h2>
          <p><strong>Duration:</strong> 7, 14, or 21-day programs available</p>
          <p><strong>Price:</strong> Starting from ₹15,000 (7-day package)</p>
        </section>
      </div>
    </div>
  );
}

export default PanchkarmaTherapies;
