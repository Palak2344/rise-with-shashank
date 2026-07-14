import "./Hero.css";
import { Link } from "react-router-dom";
import { FaArrowRight, FaPlay, FaSpa } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      className="hero"
      style={{
        backgroundImage:
          "linear-gradient(rgba(62,74,69,.45), rgba(62,74,69,.55)), url('/images/hero.jpeg')",
      }}
    >
      <div className="hero-container">

        <div className="hero-content">

          <div className="hero-badge">
            <FaSpa />
            <span>RISE WITH SHASHANK</span>
          </div>

          <h1>
            Discover Inner Peace
            <br />
            Through <span>Meditation</span>
            <br />
            & <span>Mindfulness</span>
          </h1>

          <div className="hero-divider">
            <span></span>
            <FaSpa className="divider-icon" />
            <span></span>
          </div>

          <p>
            Break free from stress, self-doubt and emotional pain.
            Discover clarity, peace and purpose through mindfulness,
            meditation and inner healing.
          </p>

          <div className="hero-buttons">

            <Link
              to="/programs"
              className="hero-btn primary-btn"
            >
              Explore Programs
              <FaArrowRight />
            </Link>

            <button className="hero-btn secondary-btn">
              <FaPlay />
              Watch Intro
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}