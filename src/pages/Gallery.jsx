import React, { useState, useEffect, useCallback, useMemo, lazy, Suspense } from "react";
import "./Gallery.css";

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState(new Set());
  const [filter, setFilter] = useState('all');

  const images = useMemo(() => [
    { id: 1, src: new URL('../assets/Gallery/1.jpg', import.meta.url).href, category: 'clinic' },
    { id: 2, src: new URL('../assets/Gallery/2.jpg', import.meta.url).href, category: 'treatment' },
    { id: 3, src: new URL('../assets/Gallery/3.jpg', import.meta.url).href, category: 'clinic' },
    { id: 4, src: new URL('../assets/Gallery/4.jpg', import.meta.url).href, category: 'treatment' },
    { id: 5, src: new URL('../assets/Gallery/5.jpg', import.meta.url).href, category: 'herbs' },
    { id: 6, src: new URL('../assets/Gallery/6.jpg', import.meta.url).href, category: 'clinic' },
    { id: 7, src: new URL('../assets/Gallery/7.jpg', import.meta.url).href, category: 'treatment' },
    { id: 8, src: new URL('../assets/Gallery/8.jpg', import.meta.url).href, category: 'herbs' },
    { id: 9, src: new URL('../assets/Gallery/9.jpg', import.meta.url).href, category: 'clinic' },
    { id: 10, src: new URL('../assets/Gallery/10.jpg', import.meta.url).href, category: 'treatment' },
    { id: 11, src: new URL('../assets/Gallery/11.jpg', import.meta.url).href, category: 'herbs' }
  ], []);

  const filteredImages = useMemo(() => {
    if (filter === 'all') return images;
    return images.filter(img => img.category === filter);
  }, [images, filter]);

  const handleImageLoad = useCallback((imageId) => {
    setLoadedImages(prev => new Set([...prev, imageId]));
  }, []);

  const openLightbox = useCallback((index) => {
    setCurrentIndex(index);
    setSelectedImage(filteredImages[index]);
  }, [filteredImages]);

  const closeLightbox = useCallback(() => {
    setSelectedImage(null);
  }, []);

  const goToNext = useCallback(() => {
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(filteredImages[nextIndex]);
  }, [currentIndex, filteredImages]);

  const goToPrevious = useCallback(() => {
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(filteredImages[prevIndex]);
  }, [currentIndex, filteredImages]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;

      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goToNext();
      if (e.key === "ArrowLeft") goToPrevious();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, closeLightbox, goToNext, goToPrevious]);

  return (
    <div className="gallery-page">
      <div className="gallery-header">
        <h1>Our Gallery</h1>
        <p className="gallery-subtitle">Explore our journey in Ayurvedic healing</p>
      </div>

      <div className="filter-buttons">
        <button
          className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button
          className={`filter-btn ${filter === 'clinic' ? 'active' : ''}`}
          onClick={() => setFilter('clinic')}
        >
          Clinic
        </button>
        <button
          className={`filter-btn ${filter === 'treatment' ? 'active' : ''}`}
          onClick={() => setFilter('treatment')}
        >
          Treatments
        </button>
        <button
          className={`filter-btn ${filter === 'herbs' ? 'active' : ''}`}
          onClick={() => setFilter('herbs')}
        >
          Herbs & Medicine
        </button>
      </div>

      <div className="gallery-grid">
        {filteredImages.map((image, index) => (
          <div
            key={image.id}
            className={`gallery-item ${loadedImages.has(image.id) ? 'loaded' : ''}`}
            onClick={() => openLightbox(index)}
          >
            <div className="image-frame">
              <img
                src={image.src}
                alt={`Gallery ${image.id}`}
                loading="lazy"
                onLoad={() => handleImageLoad(image.id)}
              />
              <div className="frame-overlay">
                <span className="view-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.35-4.35"></path>
                    <line x1="11" y1="8" x2="11" y2="14"></line>
                    <line x1="8" y1="11" x2="14" y2="11"></line>
                  </svg>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <button className="close-button" onClick={closeLightbox} aria-label="Close">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          <button
            className="nav-button prev-button"
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            aria-label="Previous"
          >
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage.src} alt={`Gallery ${selectedImage.id}`} />
            <p className="image-counter">
              {currentIndex + 1} / {filteredImages.length}
            </p>
          </div>
          <button
            className="nav-button next-button"
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            aria-label="Next"
          >
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}

export default Gallery;
