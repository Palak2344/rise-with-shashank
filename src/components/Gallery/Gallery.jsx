import "./Gallery.css";

const gallery = [
  "/images/hwbanner.jpg",
  "/images/him.jpg",
  "/images/group.jpg",
  "/images/image.jpg",
];

function Gallery() {
  return (
    <section className="gallery" id="gallery">

      <div className="container">

        <div className="gallery-header">

          <span className="section-tag">
            Our Gallery
          </span>

          <h2 className="section-title">
            Moments of <span>Transformation</span>
          </h2>

          <p className="section-description">
            Every workshop creates unforgettable experiences of meditation,
            learning, healing, and inner growth.
          </p>

        </div>

        <div className="gallery-grid">

          {gallery.map((img, index) => (

            <div className="gallery-item" key={index}>

              <img
                src={img}
                alt={`Gallery ${index + 1}`}
              />

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Gallery;