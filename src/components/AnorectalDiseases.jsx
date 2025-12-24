import React from 'react';
import './TreatmentPages.css';

function AnorectalDiseases() {
  return (
    <div className="treatment-page">
      <div className="treatment-hero">
        <h1>Anorectal Diseases Treatment</h1>
        <p className="subtitle">Expert Care with Dignity & Comfort</p>
      </div>

      <div className="treatment-content">
        <section className="treatment-section">
          <h2>Ayurvedic Treatment for Anorectal Disorders</h2>
          <p>
            We provide specialized Ayurvedic treatment for various anorectal conditions with
            a focus on non-surgical and minimally invasive approaches. Our treatments are
            effective, safe, and designed to provide long-term relief while maintaining your
            dignity and comfort throughout the process.
          </p>
        </section>

        <section className="treatment-section">
          <h2>Conditions We Treat</h2>
          <ul>
            <li><strong>Piles (Hemorrhoids):</strong> Internal and external hemorrhoids</li>
            <li><strong>Fissures:</strong> Anal fissures and tears</li>
            <li><strong>Fistula:</strong> Ano-rectal fistula</li>
            <li><strong>Pilonidal Sinus:</strong> Cyst at the tailbone</li>
            <li>Rectal prolapse</li>
            <li>Chronic constipation</li>
            <li>Rectal bleeding</li>
            <li>Pruritus ani (anal itching)</li>
          </ul>
        </section>

        <section className="treatment-section">
          <h2>Treatment Methods</h2>
          <p>
            Our treatment approach includes Kshara Sutra therapy (medicated thread treatment),
            specialized herbal medications, dietary modifications, Agni Karma (thermal cautery),
            and other Ayurvedic procedures. These treatments are effective alternatives to
            conventional surgery with minimal pain and faster recovery.
          </p>
        </section>

        <section className="treatment-section">
          <h2>Treatment Details</h2>
          <p><strong>Duration:</strong> Varies based on condition (typically 2-8 weeks)</p>
          <p><strong>Price:</strong> Consultation required for personalized treatment plan</p>
        </section>
      </div>
    </div>
  );
}

export default AnorectalDiseases;
