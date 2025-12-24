import React from 'react';
import './TreatmentPages.css';

function WeightManagement() {
  return (
    <div className="treatment-page">
      <div className="treatment-hero">
        <h1>Weight Management</h1>
        <p className="subtitle">Achieve Your Ideal Weight Naturally</p>
      </div>

      <div className="treatment-content">
        <section className="treatment-section">
          <h2>Ayurvedic Weight Management Program</h2>
          <p>
            Our holistic weight management program combines Ayurvedic principles with modern
            nutritional science to help you achieve and maintain your ideal weight. We focus
            on balancing your metabolism, improving digestion, and creating sustainable lifestyle
            changes rather than quick-fix solutions.
          </p>
        </section>

        <section className="treatment-section">
          <h2>Program Components</h2>
          <ul>
            <li>Comprehensive body constitution (Prakriti) assessment</li>
            <li>Personalized diet plans based on your dosha type</li>
            <li>Herbal supplements to boost metabolism</li>
            <li>Udvartana (herbal powder massage) for fat reduction</li>
            <li>Customized exercise and yoga routines</li>
            <li>Detoxification therapies</li>
            <li>Lifestyle and eating habit counseling</li>
            <li>Regular progress monitoring and support</li>
          </ul>
        </section>

        <section className="treatment-section">
          <h2>Conditions We Address</h2>
          <p>
            We help with obesity management, metabolic syndrome, thyroid-related weight issues,
            PCOS-related weight gain, post-pregnancy weight loss, and age-related weight gain.
            Our approach is safe, effective, and focuses on long-term results without harmful
            side effects.
          </p>
        </section>

        <section className="treatment-section">
          <h2>Program Details</h2>
          <p><strong>Duration:</strong> 3-6 month programs</p>
          <p><strong>Price:</strong> Starting from ₹10,000 per month (includes consultation, diet plan, and therapies)</p>
        </section>
      </div>
    </div>
  );
}

export default WeightManagement;
