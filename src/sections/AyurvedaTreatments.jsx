import "./AyurvedaTreatments.css";

function AyurvedaTreatments() {
  return (
    <section className="ayurveda-treatments-section">
      <div className="container">
        <h2>Our Ayurveda Treatments</h2>

        <div className="treatment-card">
          <div className="text-content">
            <h3>Infertility Treatment</h3>
            <p>
              Infertility treatment focuses on diagnosing and treating female and male infertility causes, such as hormonal imbalance, ovulation disorders, and anatomical issues, to help couples conceive.
            </p>
          </div>
          <div className="image-content">
            <img
              src="/images/infertility-treatment.png"
              alt="Infertility Treatment"
            />
          </div>
        </div>

        <div className="treatment-card reverse">
          <div className="image-content">
            <img
              src="/images/pcod-pcos-treatment.png"
              alt="PCOD/PCOS Treatment"
            />
          </div>
          <div className="text-content">
            <h3>PCOD/PCOS Treatment</h3>
            <p>
              Polycystic Ovary Disorder (PCOD) and Polycystic Ovary Syndrome (PCOS) are common hormonal disorders affecting women of reproductive age, causing symptoms like irregular periods and acne.
            </p>
          </div>
        </div>

        <div className="treatment-card">
          <div className="text-content">
            <h3>Ayurveda Panchakarma Treatment</h3>
            <p>
              Panchakarma is a comprehensive Ayurvedic healing therapy to detoxify and rejuvenate the body using five therapeutic procedures.
            </p>
          </div>
          <div className="image-content">
            <img
              src="/images/panchakarma-treatment.png"
              alt="Panchakarma Treatment"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AyurvedaTreatments;
