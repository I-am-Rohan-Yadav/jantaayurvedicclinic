import React, { useState, useEffect } from "react";
import "./Gallery.css";
import galleryImage1 from "../assets/Gallery/1.jpg";
import galleryImage2 from "../assets/Gallery/2.jpg";
import galleryImage3 from "../assets/Gallery/3.jpg";
import galleryImage4 from "../assets/Gallery/4.jpg";
import galleryImage5 from "../assets/Gallery/5.jpg";
import galleryImage6 from "../assets/Gallery/6.jpg";
import galleryImage7 from "../assets/Gallery/7.jpg";
import galleryImage8 from "../assets/Gallery/8.jpg";
import galleryImage9 from "../assets/Gallery/9.jpg";
import galleryImage10 from "../assets/Gallery/10.jpg";
import galleryImage11 from "../assets/Gallery/11.jpg";

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    galleryImage1,
    galleryImage2,
    galleryImage3,
    galleryImage4,
    galleryImage5,
    galleryImage6,
    galleryImage7,
    galleryImage8,
    galleryImage9,
    galleryImage10,
    galleryImage11
  ];

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setSelectedImage(images[index]);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToNext = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(images[nextIndex]);
  };

  const goToPrevious = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(images[prevIndex]);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;

      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goToNext();
      if (e.key === "ArrowLeft") goToPrevious();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, currentIndex]);

  return (
    <div className="gallery-page">
      <h1>Our Gallery</h1>
      <div className="gallery-grid">
        {images.map((src, index) => (
          <div
            key={index}
            className="gallery-item"
            onClick={() => openLightbox(index)}
          >
            <div className="image-frame">
              <img src={src} alt={`Gallery ${index + 1}`} />
              <div className="frame-overlay">
                <span className="view-icon">🔍</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <button className="close-button" onClick={closeLightbox}>
            ✕
          </button>
          <button
            className="nav-button prev-button"
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
          >
            ‹
          </button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Full size" />
            <p className="image-counter">
              {currentIndex + 1} / {images.length}
            </p>
          </div>
          <button
            className="nav-button next-button"
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
}

export default Gallery;
