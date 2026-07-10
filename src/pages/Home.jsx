import "./Hero.css";
import { FaArrowRight, FaPlay } from "react-icons/fa";

function Hero() {
  return (
    <section className="hero">

      {/* Background Image */}
      <img
        src="/hero.jpg"
        alt="Meditation Hero"
        className="hero-image"
      />

      {/* Dark Overlay */}
      <div className="hero-overlay"></div>

      <div className="container hero-content">

        <div className="hero-left">

          <span className="hero-tag">
            ✨ Transform Your Life
          </span>

          <h1>
            Discover
            <span> Inner Peace </span>
            Through Meditation &
            Mindfulness
          </h1>

          <p>
            Join <strong>Rise with Shashank</strong> and begin a journey of
            emotional healing, mindfulness, confidence, and self-discovery.
            Experience powerful workshops, guided meditation, and personal
            transformation designed to help you live a happier and more
            meaningful life.
          </p>

          <div className="hero-buttons">

            <button className="primary-btn">
              Explore Programs
              <FaArrowRight />
            </button>

            <button className="secondary-btn">
              <FaPlay />
              Watch Intro
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;