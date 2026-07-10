import "./Hero.css";
import { FaArrowRight, FaPlay, FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-card">


        <img
          src="/images/hero.jpeg"
          alt="Meditation"
          className="hero-bg"
        />

        <div className="hero-overlay"></div>

        <div className="hero-content">

          <div className="hero-text">

            <span className="hero-badge">
              Rise with Shashank
            </span>

            <h1>
              Discover Inner Peace Through Meditation & Mindfulness
            </h1>

            <p>
              Break free from stress, self-doubt and emotional pain.
              Discover clarity, peace and purpose through mindfulness,
              meditation and inner healing.
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

  

      </div>

    </section>
  );
}

export default Hero;