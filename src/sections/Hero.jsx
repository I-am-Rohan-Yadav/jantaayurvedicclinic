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
      title: "Rooted in nature. Backed by care.",
      subtitle: "Personalised healing for long-term wellness.",
    //   text: "Cashless treatment for CGHS | CAPF | Air India cardholders"
    },
    {
      image: image2,
      title: "Press pause on the noise.",
      subtitle: "A therapy designed to relax your thoughts, not just your body.",
    //   text: "Experience authentic Ayurvedic treatments"
    },
    {
      image: image3,
      title: "Heal smarter. Move freely.",
      subtitle: "Where natural healing meets modern physiotherapy.",
    //   text: "Personalized treatment plans for holistic wellness"
    },
    {
      image: image1,
      title: "Let calm flow in.",
      subtitle: "A gentle oil stream that quiets the mind and resets your system.",
    //   text: "Cashless treatment for CGHS | CAPF | Air India cardholders"
    },
    {
      image: image2,
      title: "Feel held. Feel healed.",
      subtitle: "Abhyanga for calm muscles, clear mind, and better circulation.",
    //   text: "Experience authentic Ayurvedic treatments"
    },
    {
      image: image3,
      title: "More than a massage.",
      subtitle: "Abhyanga therapy to nourish, detox, and deeply restore.",
    //   text: "Personalized treatment plans for holistic wellness"
    },
    {
      image: image3,
      title: "Open. Clear. Reset.",
      subtitle: "Herbal nasal therapy for everyday head wellness.",
    //   text: "Personalized treatment plans for holistic wellness"
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
