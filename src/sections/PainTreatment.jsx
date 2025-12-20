import "./PainTreatment.css";

function PainTreatment() {
  return (
    <section className="pain-treatment-section">
      <div className="container">
        <h2>Our Pain Treatment</h2>
        <p className="section-description">
          We offer effective Ayurvedic pain relief and healing methods, focusing
          on long-lasting relief and healing.
        </p>

        <div className="cards-wrapper">
          <article className="pain-card">
            <div className="icon">
              <img src="/images/knee-pain.png" alt="Knee Pain Treatment" />
            </div>
            <h3>
              <a href="#">Knee Pain Treatment</a>
            </h3>
            <p>
              Experience long lasting relief from chronic knee pain through
              personalized Ayurvedic therapies, herbal oils, and natural healing
              techniques.
            </p>
            <a href="#" className="read-more">
              Read More &raquo;
            </a>
          </article>

          <article className="pain-card">
            <div className="icon">
              <img src="/images/elbow-shoulder-pain.png" alt="Elbow/Shoulder Pain Treatment" />
            </div>
            <h3>
              <a href="#">Elbow/Shoulder Pain Treatment</a>
            </h3>
            <p>
              Relieve elbow and shoulder pain naturally with Ayurvedic therapies,
              including herbal oils, targeted massages, and holistic healing
              techniques.
            </p>
            <a href="#" className="read-more">
              Read More &raquo;
            </a>
          </article>

          <article className="pain-card">
            <div className="icon">
              <img src="/images/sciatica.png" alt="Sciatica Treatment" />
            </div>
            <h3>
              <a href="#">Sciatica Treatment</a>
            </h3>
            <p>
              Our Ayurvedic sciatica treatment uses herbal oils, therapeutic
              massages, and other therapies to relieve nerve pain and improve
              mobility.
            </p>
            <a href="#" className="read-more">
              Read More &raquo;
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}

export default PainTreatment;
