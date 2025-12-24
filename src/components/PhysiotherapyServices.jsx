import React from 'react';
import './TreatmentPages.css';

function PhysiotherapyServices() {
  return (
    <div className="treatment-page">
      <div className="treatment-hero">
        <h1>Physiotherapy Services</h1>
        <p className="subtitle">Restore Movement, Reclaim Your Life</p>
      </div>

      <div className="treatment-content">
        <section className="treatment-section">
          <h2>Our Physiotherapy Services</h2>
          <p>
            We offer comprehensive physiotherapy services designed to help you recover from
            injuries, manage chronic conditions, and improve your overall physical function.
            Our qualified physiotherapists use evidence-based techniques and modern equipment
            to deliver effective treatment.
          </p>
        </section>

        <section className="treatment-section">
          <h2>Conditions We Treat</h2>
          <ul>
            <li>Sports injuries and rehabilitation</li>
            <li>Back pain and neck pain</li>
            <li>Joint pain and arthritis</li>
            <li>Post-surgical rehabilitation</li>
            <li>Stroke recovery and neurological conditions</li>
            <li>Frozen shoulder and rotator cuff injuries</li>
            <li>Sciatica and disc problems</li>
            <li>Posture correction</li>
          </ul>
        </section>

        <section className="treatment-section">
          <h2>Treatment Modalities</h2>
          <p>
            Our physiotherapy services include manual therapy, therapeutic exercises,
            electrotherapy, ultrasound therapy, heat and cold therapy, taping techniques,
            and customized home exercise programs. Each treatment plan is tailored to your
            specific needs and goals.
          </p>
        </section>

        <section className="treatment-section">
          <h2>Session Details</h2>
          <p><strong>Session Duration:</strong> 30-45 minutes</p>
          <p><strong>Price:</strong> ₹600 per session | ₹5,000 (Package of 10 sessions)</p>
        </section>
      </div>
    </div>
  );
}

export default PhysiotherapyServices;
