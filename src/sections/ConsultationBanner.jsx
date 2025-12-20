import "./ConsultationBanner.css";

function ConsultationBanner() {
  return (
    <section className="consultation-banner">
      <div className="container">
        <div className="banner-content">
          <h2>Book Your Consultation Today</h2>
          <p>
            Connect with our expert Ayurvedic specialists and start your journey
            towards a healthier life. Quick, easy, and personalized consultation.
          </p>
          <a href="https://api.whatsapp.com/send?phone=919992498817&text=Hello%20I%20would%20like%20to%20book%20an%20appointment" target="_blank" className="cta-button">
            Book Appointment
          </a>
        </div>
      </div>
    </section>
  );
}

export default ConsultationBanner;
