import { Link } from "react-router-dom";
import { FaHeart, FaBrain, FaLeaf, FaUsers, FaArrowRight } from "react-icons/fa";

import { Reveal, Stagger, StaggerItem } from "../ui/Motion";
import "./Journey.css";

const features = [
  { icon: <FaHeart />, title: "Emotional Healing", text: "Release stress and emotional blocks." },
  { icon: <FaBrain />, title: "Mind Mastery", text: "Improve focus and positive thinking." },
  { icon: <FaLeaf />, title: "Balanced Lifestyle", text: "Create healthier daily habits." },
  { icon: <FaUsers />, title: "Supportive Community", text: "Grow together with like-minded people." },
];

function Journey() {
  return (
    <section className="journey section-alt">
      <div className="container journey-container">
        <Reveal direction="right" className="journey-image">
          <img src="/images/about.jpg" alt="Shashank leading a meditation circle" loading="lazy" />

          <div className="journey-card">
            <strong>8+</strong>
            <span>Years of Inspiring Lives</span>
          </div>
        </Reveal>

        <div className="journey-content">
          <Reveal>
            <span className="eyebrow">About Rise with Shashank</span>
            <h2>
              Begin Your Journey Towards{" "}
              <span className="accent-text">Inner Transformation</span>
            </h2>
            <p>
              Rise with Shashank empowers individuals through meditation,
              mindfulness, emotional healing, and transformational coaching.
              Our mission is to help people discover peace, clarity,
              confidence, and purpose in every stage of life.
            </p>
          </Reveal>

          <Stagger className="features">
            {features.map((f) => (
              <StaggerItem className="feature-card" key={f.title}>
                <span className="icon-bubble">{f.icon}</span>
                <div>
                  <h4>{f.title}</h4>
                  <p>{f.text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal>
            <Link to="/about" className="btn btn-primary">
              Learn More <FaArrowRight />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default Journey;
