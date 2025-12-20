import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
    return (
    <footer className="footer">
      <div className="footer-top">
        {/* ABOUT */}
        <div className="footer-column">
          <h3>Janta Ayurvedic Clinic</h3>
          <p>
            NABH accredited clinic providing holistic care through Ayurveda,
            Physiotherapy, Chiropractic and Pain Management treatments.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/treatments">Treatments</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/blogs">Blogs</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* SERVICES */}
        <div className="footer-column">
          <h4>Our Services</h4>
          <ul>
            <li><Link to="/chiropractor">Chiropractic</Link></li>
            <li><Link to="/physiotherapy">Physiotherapy</Link></li>
            <li><Link to="/pain-treatments">Pain Management</Link></li>
            <li><Link to="/ayurveda">Ayurveda</Link></li>
            <li><Link to="/panchkarma">Panchkarma</Link></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-column">
          <h4>Contact Us</h4>
          <p>📍 First floor, under hype gym, KH 467, opposite bptp main gate, Basai Enclave, Sector 37D, Gurugram, Haryana 122006</p>
          <p>
            📞 <a href="tel:+919992498817">+91 99924 98817</a>
          </p>
          <p>
            ✉️{" "}
            <a href="mailto:janta1ayurvedic@gmail.com">
              janta1ayurvedic@gmail.com
            </a>
          </p>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Janta Ayurvedic Clinic. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
