import { ArrowRight, ChevronLeft, ChevronRight, MapPin, Pause, Play } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { carouselSlides, type CarouselSlide } from "@/lib/carousel-data";
import { routePaths, type Language } from "@/lib/site-content";

export default function HomePhotoCarousel({ language }: { language: Language }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const total = carouselSlides.length;

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  // Autoplay timer
  useEffect(() => {
    if (!isPlaying || isHovered) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [isPlaying, isHovered, nextSlide]);

  // Touch swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) {
      nextSlide();
    } else if (diff < -50) {
      prevSlide();
    }
    touchStartX.current = null;
  };

  const currentSlide = carouselSlides[activeIndex];

  return (
    <section
      className="home-carousel-section section-space"
      aria-label={language === "fr" ? "Galerie photos de la mission" : "Mission photo gallery"}
    >
      <div className="container">
        {/* Header */}
        <div className="home-carousel__header">
          <div className="home-carousel__header-copy">
            <p className="eyebrow">
              <span className="eyebrow-dot" />
              {language === "fr" ? "Au cœur du terrain" : "Heart of the Mission"}
            </p>
            <h2>
              {language === "fr"
                ? "Nos réalités sur le terrain en images."
                : "Our field reality in pictures."}
            </h2>
            <p>
              {language === "fr"
                ? "Découvrez la vie des enfants à Brostage, les moments éducatifs, la communion avec les familles et la progression continue des chantiers de construction à Dondon."
                : "Discover the lives of children in Brostage, educational moments, fellowship with local families, and the ongoing progress of construction in Dondon."}
            </p>
          </div>

          <div className="home-carousel__header-controls">
            <button
              type="button"
              className="carousel-icon-btn"
              onClick={() => setIsPlaying((p) => !p)}
              aria-label={
                isPlaying
                  ? language === "fr" ? "Mettre en pause le carrousel" : "Pause carousel"
                  : language === "fr" ? "Lancer le carrousel automatique" : "Play carousel"
              }
              title={isPlaying ? (language === "fr" ? "Pause" : "Pause") : (language === "fr" ? "Lecture" : "Play")}
            >
              {isPlaying ? <Pause size={17} /> : <Play size={17} />}
            </button>
            <button
              type="button"
              className="carousel-icon-btn"
              onClick={prevSlide}
              aria-label={language === "fr" ? "Photo précédente" : "Previous slide"}
            >
              <ChevronLeft size={19} />
            </button>
            <button
              type="button"
              className="carousel-icon-btn"
              onClick={nextSlide}
              aria-label={language === "fr" ? "Photo suivante" : "Next slide"}
            >
              <ChevronRight size={19} />
            </button>
          </div>
        </div>

        {/* Carousel Main Stage */}
        <div
          className="home-carousel__main"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="home-carousel__viewport">
            {carouselSlides.map((slide, index) => {
              const isActive = index === activeIndex;
              return (
                <div
                  key={slide.id}
                  className={`home-carousel__slide ${isActive ? "is-active" : ""}`}
                  aria-hidden={!isActive}
                >
                  <img
                    src={slide.image}
                    alt={slide.title[language]}
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                  <div className="home-carousel__overlay" />
                </div>
              );
            })}

            {/* Top Bar on Stage */}
            <div className="home-carousel__top-bar">
              <div className="home-carousel__tag-group">
                <span className="home-carousel__tag">{currentSlide.tag[language]}</span>
                <span className="home-carousel__location">
                  <MapPin size={12} />
                  {currentSlide.location}
                </span>
              </div>
              <span className="home-carousel__counter">
                {String(activeIndex + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
              </span>
            </div>

            {/* Nav Arrows inside stage */}
            <button
              type="button"
              className="home-carousel__nav-arrow home-carousel__nav-arrow--prev"
              onClick={prevSlide}
              aria-label={language === "fr" ? "Image précédente" : "Previous image"}
            >
              <ChevronLeft size={22} />
            </button>
            <button
              type="button"
              className="home-carousel__nav-arrow home-carousel__nav-arrow--next"
              onClick={nextSlide}
              aria-label={language === "fr" ? "Image suivante" : "Next image"}
            >
              <ChevronRight size={22} />
            </button>

            {/* Bottom Caption docked inside stage */}
            <div className="home-carousel__bottom-bar">
              <div className="home-carousel__caption-box">
                <h3>{currentSlide.title[language]}</h3>
                <p>{currentSlide.caption[language]}</p>
              </div>
            </div>
          </div>

          {/* Interactive Thumbnails Bar */}
          <div
            className="home-carousel__thumbs"
            style={{ marginTop: 14 }}
            role="tablist"
            aria-label={language === "fr" ? "Vignettes du carrousel" : "Carousel thumbnails"}
          >
            {carouselSlides.map((slide, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={slide.id}
                  type="button"
                  className={`home-carousel__thumb-btn ${isActive ? "is-active" : ""}`}
                  onClick={() => goToSlide(index)}
                  role="tab"
                  aria-selected={isActive}
                  aria-label={`${language === "fr" ? "Voir photo" : "View photo"} ${index + 1}: ${slide.title[language]}`}
                >
                  <img src={slide.image} alt="" aria-hidden="true" />
                </button>
              );
            })}
          </div>
        </div>

        {/* Footer with progress dots and quick link */}
        <div className="home-carousel__footer">
          <div className="home-carousel__dots" role="tablist">
            {carouselSlides.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`home-carousel__dot ${index === activeIndex ? "is-active" : ""}`}
                onClick={() => goToSlide(index)}
                aria-label={`${language === "fr" ? "Diapositive" : "Slide"} ${index + 1}`}
              />
            ))}
          </div>

          <Link className="text-link" href={routePaths.haiti}>
            {language === "fr" ? "Voir tous les travaux en cours" : "View all active construction"}
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
