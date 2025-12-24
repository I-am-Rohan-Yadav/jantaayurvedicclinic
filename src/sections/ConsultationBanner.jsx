import "./ConsultationBanner.css";

function ConsultationBanner() {
  return (
    <section className="consultation-banner">
      <div className="container">
        <div className="banner-content">
          <div className="banner-badge">Limited Slots Available</div>
          <h2>
            Transform Your Health with
            <span className="highlight"> Ancient Wisdom</span>
          </h2>
          <p>
            Connect with our expert Ayurvedic specialists and start your journey
            towards a healthier life. Quick, easy, and personalized consultation.
          </p>
          <div className="banner-features">
            <div className="feature-item">
              <span className="feature-icon">✓</span>
              <span>Expert Consultation</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">✓</span>
              <span>Personalized Treatment</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">✓</span>
              <span>Holistic Healing</span>
            </div>
          </div>
          <a href="https://api.whatsapp.com/send?phone=919992498817&text=Hello%20I%20would%20like%20to%20book%20an%20appointment" target="_blank" className="cta-button">
            Book Your Consultation Now
            <span className="button-arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default ConsultationBanner;
