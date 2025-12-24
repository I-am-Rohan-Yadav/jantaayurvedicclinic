import { Link } from "react-router-dom";
import "./Footer.css";
import logo from "../assets/ja_pc_logo1.png";

function Footer() {
    return (
    <footer className="footer">
      <div className="footer-top">
        {/* ABOUT */}
        <div className="footer-column">
          <div className="footer-logo-title">
            <img src={logo} alt="Janta Ayurvedic Clinic Logo" className="footer-logo-img" />
            <h3>Janta Ayurvedic Clinic</h3>
          </div>
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
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* SERVICES */}
        <div className="footer-column">
          <h4>Our Services</h4>
          <ul>
            <li><Link to="/chiropractor">Chiropractic</Link></li>
            <li><Link to="/physiotherapy-services">Physiotherapy</Link></li>
            <li><Link to="/panchkarma-therapies">Panchkarma</Link></li>
            <li><Link to="/ayurvedic-consultation">Ayurvedic Consultation</Link></li>
            <li><Link to="/wellness-therapies">Wellness Therapies</Link></li>
            <li><Link to="/weight-management">Weight Management</Link></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-column">
          <h4>Contact Us</h4>
          <div className="footer-contact-item">
            <span className="footer-icon location-icon"></span>
            <p>First floor, under hype gym, KH 467, opposite bptp main gate, Basai Enclave, Sector 37D, Gurugram, Haryana 122006</p>
          </div>
          <div className="footer-contact-item">
            <span className="footer-icon phone-icon"></span>
            <p>
              <a href="tel:+919992498817">+91 99924 98817</a>
            </p>
          </div>
          <div className="footer-contact-item">
            <span className="footer-icon mail-icon"></span>
            <p>
              <a href="mailto:janta2ayurvedic@gmail.com">
                janta2ayurvedic@gmail.com
              </a>
            </p>
          </div>
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
