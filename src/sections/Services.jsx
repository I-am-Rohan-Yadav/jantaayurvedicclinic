import { Link } from "react-router-dom";
import "./Services.css";

const services = [
  {
    id: 1,
    title: "Ayurvedic Consultation",
    img: "/services/ayurvedicconsultation.jpg",
    desc: "At our Vikaspuri clinic, we believe in holistic approach to healing.",
    link: "/ayurvedic-consultation",
  },
  {
    id: 2,
    title: "⁠Physiotherapy Services",
    img: "/services/physiotherapy.jpg",
    desc: "Physiotherapy helps pain and restores movement naturally.",
    link: "/physiotherapy-services",
  },
  {
    id: 3,
    title: "⁠Panchkarma Therapies",
    img: "/services/panchkarma.jpg",
    desc: "Pain treatments relieve discomfort and restore daily function naturally.",
    link: "/panchkarma-therapies",
  },
  {
    id: 4,
    title: "Infertility Treatment",
    img: "/services/infertility.jpg",
    desc: "Ayurveda treats holistically, balancing body, mind, and spirit.",
    link: "/infertility-treatment",
  },
  {
    id: 5,
    title: "Chiropractor",
    img: "/services/chiropractor.jpg",
    desc: "Panchkarma detoxifies body and restores holistic balance.",
    link: "/chiropractor",
  },
  {
    id: 6,
    title: "Anorectal Diseases",
    img: "/services/anorectal.jpg",
    desc: "Infertility treatment boosts fertility and restores reproductive health.",
    link: "/anorectal-diseases",
  },
  {
    id: 7,
    title: "⁠Wellness Therapies",
    img: "/services/wellness.jpg",
    desc: "Pain treatments relieve discomfort and restore daily function naturally.",
    link: "/wellness-therapies",
  },
  {
    id: 8,
    title: "Weight Management",
    img: "/services/weight.jpg",
    desc: "Ayurveda treats holistically, balancing body, mind, and spirit.",
    link: "/weight-management",
  },
  {
    id: 9,
    title: "⁠Body Detoxification",
    img: "/services/⁠body-detoxification.jpg",
    desc: "Panchkarma detoxifies body and restores holistic balance.",
    link: "/body-detoxification",
  },
  {
    id: 10,
    title: "⁠Grooming Therapies",
    img: "/services/grooming.jpg",
    desc: "Infertility treatment boosts fertility and restores reproductive health.",
    link: "/grooming-therapies",
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
            <Link to={link} className="service-link" aria-label={`Read more about ${title}`}>
              Read More &rarr;
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
