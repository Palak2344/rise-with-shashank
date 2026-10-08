import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaExpand, FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

import SectionHead from "../ui/SectionHead";
import { Stagger, StaggerItem } from "../ui/Motion";
import "./Gallery.css";

const gallery = [
  { src: "/images/hwbanner.jpg", alt: "Workshop banner" },
  { src: "/images/him.jpg", alt: "Shashank Lalwani" },
  { src: "/images/group.jpg", alt: "Workshop participants together" },
  { src: "/images/image.jpg", alt: "Moment from a meditation session" },
];

function Gallery() {
  const [active, setActive] = useState(null);

  const step = (dir) =>
    setActive((i) => (i + dir + gallery.length) % gallery.length);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <SectionHead eyebrow="Our Gallery" title="Moments of" highlight="Transformation">
          Every workshop creates unforgettable experiences of meditation,
          learning, healing, and inner growth.
        </SectionHead>

        <Stagger className="gallery-grid">
          {gallery.map((img, index) => (
            <StaggerItem
              as="button"
              type="button"
              className="gallery-item"
              key={img.src}
              onClick={() => setActive(index)}
              aria-label={`Open image: ${img.alt}`}
            >
              <img src={img.src} alt={img.alt} loading="lazy" />
              <span className="gallery-hover">
                <FaExpand />
              </span>
            </StaggerItem>
          ))}
        </Stagger>
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            role="dialog"
            aria-modal="true"
            aria-label={gallery[active].alt}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={gallery[active].src}
                src={gallery[active].src}
                alt={gallery[active].alt}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                onClick={(e) => e.stopPropagation()}
              />
            </AnimatePresence>

            <button type="button" className="lb-btn lb-close" aria-label="Close" onClick={() => setActive(null)}>
              <FaTimes />
            </button>
            <button
              type="button"
              className="lb-btn lb-prev"
              aria-label="Previous image"
              onClick={(e) => {
                e.stopPropagation();
                step(-1);
              }}
            >
              <FaChevronLeft />
            </button>
            <button
              type="button"
              className="lb-btn lb-next"
              aria-label="Next image"
              onClick={(e) => {
                e.stopPropagation();
                step(1);
              }}
            >
              <FaChevronRight />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Gallery;
