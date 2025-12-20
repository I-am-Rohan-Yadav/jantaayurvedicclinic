import "./LocationMap.css";

function LocationMap() {
  return (
    <section className="location-section">
      <h2>Our Location</h2>

      <div className="map-container">
        <iframe
          title="Clinic Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.7014909015293!2d76.9749087749761!3d28.453607192184325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d17350c11dc91%3A0xe80015801d522797!2sJanta%20ayurvedic%20%26%20physiotherapy%20center!5e1!3m2!1sen!2sin!4v1766228988290!5m2!1sen!2sin"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}

export default LocationMap;
