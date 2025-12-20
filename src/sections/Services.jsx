import "./Services.css";

const services = [
  {
    id: 1,
    title: "Chiropractor",
    img: "/services/chiropractor.jpg",
    desc: "At our Vikaspuri clinic, we believe in holistic approach to healing.",
    link: "#",
  },
  {
    id: 2,
    title: "Physiotherapy",
    img: "/services/physiotherapy.jpg",
    desc: "Physiotherapy helps pain and restores movement naturally.",
    link: "#",
  },
  {
    id: 3,
    title: "Pain Treatments",
    img: "/services/pain-treatments.jpg",
    desc: "Pain treatments relieve discomfort and restore daily function naturally.",
    link: "#",
  },
  {
    id: 4,
    title: "Ayurveda",
    img: "/services/ayurveda.jpg",
    desc: "Ayurveda treats holistically, balancing body, mind, and spirit.",
    link: "#",
  },
  {
    id: 5,
    title: "Panchkarma",
    img: "/services/panchkarma.jpg",
    desc: "Panchkarma detoxifies body and restores holistic balance.",
    link: "#",
  },
  {
    id: 6,
    title: "Infertility Treatment",
    img: "/services/infertility.jpg",
    desc: "Infertility treatment boosts fertility and restores reproductive health.",
    link: "#",
  },
];

function Services() {
  return (
    <section className="services-section">
      <h2>Our Services</h2>
      <div className="services-grid">
        {services.map(({ id, title, img, desc, link }) => (
          <div key={id} className="service-card">
            <img src={img} alt={title} className="service-image" />
            <h3 className="service-title">{title}</h3>
            <p className="service-desc">{desc}</p>
            <a href={link} className="service-link" aria-label={`Read more about ${title}`}>
              Read More &rarr;
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
