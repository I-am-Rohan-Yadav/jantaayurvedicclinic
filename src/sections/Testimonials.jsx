import "./Testimonials.css";

const testimonials = [
  {
    id: 1,
    name: "Rohit Sharma",
    text: "Excellent treatment and very professional doctors. My back pain reduced significantly after a few sessions. Highly recommended!",
  },
  {
    id: 2,
    name: "Neha Verma",
    text: "The Ayurvedic treatment really helped me. Doctors explained everything clearly and the staff was very supportive.",
  },
  {
    id: 3,
    name: "Amit Gupta",
    text: "One of the best clinics in Vikaspuri. Clean environment, expert doctors, and effective treatments.",
  },
];

function Testimonials() {
  return (
    <section className="testimonials-section">
      <h2>What Our Patients Say</h2>

      <div className="testimonials-grid">
        {testimonials.map((item) => (
          <div key={item.id} className="testimonial-card">
            <p className="testimonial-text">“{item.text}”</p>
            <h4 className="patient-name">— {item.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
