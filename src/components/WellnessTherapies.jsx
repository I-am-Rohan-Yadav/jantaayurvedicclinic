import React from 'react';
import './TreatmentPages.css';

function WellnessTherapies() {
  return (
    <div className="treatment-page">
      <div className="treatment-hero">
        <h1>Wellness Therapies</h1>
        <p className="subtitle">Nurture Your Body, Mind & Soul</p>
      </div>

      <div className="treatment-content">
        <section className="treatment-section">
          <h2>Holistic Wellness Programs</h2>
          <p>
            Our wellness therapies are designed to promote overall health, prevent diseases,
            and enhance your quality of life. We combine traditional Ayurvedic practices with
            modern wellness techniques to create a comprehensive approach to health and vitality.
          </p>
        </section>

        <section className="treatment-section">
          <h2>Our Wellness Offerings</h2>
          <ul>
            <li><strong>Stress Management:</strong> Meditation, pranayama, and relaxation techniques</li>
            <li><strong>Yoga Therapy:</strong> Customized yoga sessions for health conditions</li>
            <li><strong>Aromatherapy:</strong> Essential oil treatments for relaxation</li>
            <li><strong>Sound Therapy:</strong> Healing through vibrations and frequencies</li>
            <li><strong>Marma Therapy:</strong> Vital point stimulation for energy flow</li>
            <li><strong>Reflexology:</strong> Pressure point therapy for overall wellness</li>
            <li><strong>Meditation Sessions:</strong> Guided meditation for mental peace</li>
            <li><strong>Nutritional Counseling:</strong> Personalized diet plans</li>
          </ul>
        </section>

        <section className="treatment-section">
          <h2>Benefits</h2>
          <p>
            Regular wellness therapies help reduce stress and anxiety, improve sleep quality,
            boost immunity, enhance mental clarity, increase energy levels, promote emotional
            balance, and support overall health maintenance. These therapies are suitable for
            people of all ages.
          </p>
        </section>

        <section className="treatment-section">
          <h2>Session Details</h2>
          <p><strong>Session Duration:</strong> 45-60 minutes</p>
          <p><strong>Price:</strong> ₹700 per session | ₹6,000 (Package of 10 sessions)</p>
        </section>
      </div>
    </div>
  );
}

export default WellnessTherapies;
