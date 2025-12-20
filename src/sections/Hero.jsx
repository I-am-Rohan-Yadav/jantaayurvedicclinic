import { useState, useEffect } from "react";
import "./Hero.css";
import image1 from "../assets/image1.jfif";
import image2 from "../assets/image2.jfif";
import image3 from "../assets/image3.jfif";

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: image1,
      title: "ACTIVE AYU LIFE",
      subtitle: "NABH Accredited Holistic Care",
      text: "Cashless treatment for CGHS | CAPF | Air India cardholders"
    },
    {
      image: image2,
      title: "TRADITIONAL HEALING",
      subtitle: "Ancient Wisdom, Modern Care",
      text: "Experience authentic Ayurvedic treatments"
    },
    {
      image: image3,
      title: "WELLNESS JOURNEY",
      subtitle: "Your Path to Natural Health",
      text: "Personalized treatment plans for holistic wellness"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="hero">
      <div className="slider-container">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? "active" : ""}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="hero-overlay">
              <h1>
                {slide.title.split(" ").slice(0, -1).join(" ")}{" "}
                <span>{slide.title.split(" ").slice(-1)}</span>
              </h1>
              <p className="hero-sub">{slide.subtitle}</p>
              <p className="hero-text">{slide.text}</p>
            </div>
          </div>
        ))}
      </div>

      <button className="slider-btn prev" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="slider-btn next" onClick={nextSlide}>
        &#10095;
      </button>

      <div className="slider-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </section>
  );
}

export default Hero;
