import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FiMenu, FiX } from "react-icons/fi";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef(null);

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleMouseEnter = () => {
    if (window.innerWidth > 768) {
      setDropdownOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth > 768) {
      setDropdownOpen(false);
    }
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setDropdownOpen(false);
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Check initial scroll position
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className={isScrolled ? "scrolled" : ""}>
      {/* TOP BAR */}
      <div className="top-bar">
        <div className="top-left">
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://www.instagram.com/janta_ayurvedic_physiotherapy/" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
            <FaYoutube />
          </a>
        </div>

        <div className="top-right">
          <MdEmail />
          <a href="mailto:janta1ayurvedic@gmail.com">
            janta1ayurvedic@gmail.com
          </a>
          <a href="tel:+919992498817">+91 99924 98817</a>
        </div>
      </div>

      {/* MAIN HEADER */}
      <div className="main-header">
        <div className="logo">
          <h2>Janta Ayurvedic Clinic</h2>
        </div>

        {/* HAMBURGER */}
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

        <nav className={`nav-menu ${menuOpen ? "open" : ""}`}>
            <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
            {/* <Link to="/treatments" onClick={() => setMenuOpen(false)}>Treatments</Link> */}
            {/* Treatments Dropdown */}
            <div
                className="dropdown"
                ref={dropdownRef}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <button
                className="dropdown-toggle"
                onClick={handleDropdownToggle}
                aria-haspopup="true"
                aria-expanded={dropdownOpen}
                >
                Treatments
                <span className="arrow">▼</span>
                </button>

                {dropdownOpen && (
                <ul className="sub-menu">
                    <li><Link to="">Chiropractor</Link></li>
                    <li><Link to="/physiotherapy" onClick={closeMenu}>Physiotherapy</Link></li>
                    <li><Link to="/pain-treatments" onClick={closeMenu}>Pain Treatments</Link></li>
                    <li><Link to="/ayurveda" onClick={closeMenu}>Ayurveda</Link></li>
                    <li><Link to="/panchkarma" onClick={closeMenu}>Panchkarma</Link></li>
                    <li><Link to="/infertility-treatment" onClick={closeMenu}>Infertility Treatment</Link></li>
                    <li><Link to="/uttar-basti-treatment" onClick={closeMenu}>Uttar Basti Treatment</Link></li>
                    <li><Link to="/tubal-blockage-treatment" onClick={closeMenu}>Tubal Blockage Treatment</Link></li>
                </ul>
                )}
            </div>


            <Link to="/gallery" onClick={() => setMenuOpen(false)}>Gallery</Link>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link>
            <Link to="/blogs" onClick={() => setMenuOpen(false)}>Blogs</Link>
        </nav>

        {/* DESKTOP BUTTON */}
        <a
          href="https://api.whatsapp.com/send?phone=919992498817&text=Hello%20I%20would%20like%20to%20book%20an%20appointment"
          target="_blank"
          rel="noreferrer"
          className="appointment-btn desktop-btn"
        >
          Book Appointment
        </a>
      </div>
    </header>
  );
}

export default Header;
