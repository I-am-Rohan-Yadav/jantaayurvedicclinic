import React from 'react';
import './TreatmentPages.css';

function Chiropractor() {
  return (
    <div className="treatment-page">
      <div className="treatment-hero">
        <h1>Chiropractor Services</h1>
        <p className="subtitle">Align Your Spine, Align Your Life</p>
      </div>

      <div className="treatment-content">
        <section className="treatment-section">
          <h2>What is Chiropractic Care?</h2>
          <p>
            Chiropractic care focuses on diagnosing and treating musculoskeletal disorders,
            particularly those affecting the spine. Our skilled chiropractors use hands-on
            spinal manipulation and other alternative treatments to properly align the body's
            musculoskeletal structure, enabling the body to heal itself without surgery or medication.
          </p>
        </section>

        <section className="treatment-section">
          <h2>Conditions We Treat</h2>
          <ul>
            <li>Lower back pain and upper back pain</li>
            <li>Neck pain and stiffness</li>
            <li>Headaches and migraines</li>
            <li>Sciatica and leg pain</li>
            <li>Shoulder pain and arm numbness</li>
            <li>Sports injuries</li>
            <li>Posture-related problems</li>
            <li>Disc herniation and bulging discs</li>
          </ul>
        </section>

        <section className="treatment-section">
          <h2>Our Treatment Methods</h2>
          <p>
            We employ various chiropractic techniques including spinal adjustments, soft tissue
            therapy, joint mobilization, therapeutic exercises, ergonomic advice, and lifestyle
            counseling. Each session is customized to address your specific condition and promote
            optimal spinal health.
          </p>
        </section>

        <section className="treatment-section">
          <h2>Session Details</h2>
          <p><strong>Session Duration:</strong> 30-40 minutes</p>
          <p><strong>Price:</strong> ₹800 per session | ₹7,000 (Package of 10 sessions)</p>
        </section>
      </div>
    </div>
  );
}

export default Chiropractor;
