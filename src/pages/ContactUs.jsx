import React from "react";
import { Link } from "react-router-dom";
import "./ContactUs.css";
import contactBanner from "../assets/contactus.png";

function ContactUs() {
  return (
    <div className="contact-page">
      {/* Banner section */}
      <div
        className="contact-banner"
        style={{ backgroundImage: `url(${contactBanner})` }}
      >
        <h1>Contact Us</h1>
        <p><Link to="/">Home</Link> &gt; Contact Us</p>
      </div>

      {/* Content section */}
      <div className="contact-content">
        <h4>Get In Touch</h4>
        <h2>Start Your Wellness Journey Today!</h2>
        <p>
          Use the latest research in physical therapy to work better, play better
          and spend more time on what matters.
        </p>

        <div className="contact-form-info">
          {/* Contact form */}
          <form className="contact-form">
            <input type="text" placeholder="First Name" required />
            <input type="text" placeholder="Last Name" />
            <input type="tel" placeholder="Phone" />
            <input type="email" placeholder="Email" required />
            <textarea placeholder="Message" rows="5"></textarea>
            <button type="submit">Book Now</button>
          </form>

          {/* Contact info */}
          <div className="contact-info">
            <div className="info-item">
              <div className="icon phone-icon"></div>
              <div>
                <h3>Call Now</h3>
                <p>+91 99924 98817</p>
              </div>
            </div>

            <div className="info-item">
              <div className="icon mail-icon"></div>
              <div>
                <h3>Mail Us</h3>
                <p>janta2ayurvedic@gmail.com</p>
              </div>
            </div>

            <div className="info-item">
              <div className="icon location-icon"></div>
              <div>
                <h3>Location</h3>
                <p>
                  First floor, under hype gym, KH 467, opposite bptp main gate, Basai Enclave, Sector 37D, Gurugram, Haryana 122006
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Google Maps embed */}
      <div className="map-container">
        <iframe
          title="Active Ayu Life Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.7014909015293!2d76.9749087749761!3d28.453607192184325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d17350c11dc91%3A0xe80015801d522797!2sJanta%20ayurvedic%20%26%20physiotherapy%20center!5e1!3m2!1sen!2sin!4v1766228988290!5m2!1sen!2sin"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default ContactUs;
