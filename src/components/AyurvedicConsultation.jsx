import React from 'react';
import './TreatmentPages.css';

function AyurvedicConsultation() {
  return (
    <div className="treatment-page">
      <div className="treatment-hero">
        <h1>Ayurvedic Consultation</h1>
        <p className="subtitle">Traditional Wisdom for Modern Health</p>
      </div>

      <div className="treatment-content">
        <section className="treatment-section">
          <h2>What is Ayurvedic Consultation?</h2>
          <p>
            Ayurvedic consultation is a comprehensive assessment of your physical, mental, and
            spiritual health based on ancient Ayurvedic principles. Our experienced practitioners
            analyze your unique body constitution (Prakriti) and current imbalances (Vikriti) to
            provide personalized treatment plans.
          </p>
        </section>

        <section className="treatment-section">
          <h2>Benefits</h2>
          <ul>
            <li>Personalized health assessment based on your body type</li>
            <li>Natural and holistic approach to wellness</li>
            <li>Prevention and management of chronic diseases</li>
            <li>Improved digestion and metabolism</li>
            <li>Enhanced mental clarity and emotional balance</li>
            <li>Customized diet and lifestyle recommendations</li>
          </ul>
        </section>

        <section className="treatment-section">
          <h2>What to Expect</h2>
          <p>
            During your consultation, our Ayurvedic doctor will conduct a thorough examination
            including pulse diagnosis (Nadi Pariksha), tongue examination, and detailed discussion
            about your health history, lifestyle, and concerns. Based on this assessment, you'll
            receive a personalized treatment plan including herbal remedies, dietary guidelines,
            and lifestyle modifications.
          </p>
        </section>

        <section className="treatment-section">
          <h2>Duration & Pricing</h2>
          <p><strong>Consultation Duration:</strong> 45-60 minutes</p>
          <p><strong>Price:</strong> ₹800 (Initial Consultation) | ₹500 (Follow-up)</p>
        </section>
      </div>
    </div>
  );
}

export default AyurvedicConsultation;
