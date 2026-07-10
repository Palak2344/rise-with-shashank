import "./Journey.css";
import {
  FaHeart,
  FaBrain,
  FaLeaf,
  FaUsers,
} from "react-icons/fa";

function Journey() {
  return (
    <section className="journey">

      <div className="container journey-container">

        <div className="journey-image">

          <img
            src="/images/about.png"
            alt="About Rise with Shashank"
          />

          <div className="experience-card">
            <h2>10+</h2>
            <p>Years of Inspiring Lives</p>
          </div>

        </div>

        <div className="journey-content">

          <span className="section-tag">
            About Rise with Shashank
          </span>

          <h2>
            Begin Your Journey Towards
            <span> Inner Transformation</span>
          </h2>

          <p>
            Rise with Shashank empowers individuals through meditation,
            mindfulness, emotional healing, and transformational coaching.
            Our mission is to help people discover peace, clarity,
            confidence, and purpose in every stage of life.
          </p>

          <div className="features">

            <div className="feature-card">
              <FaHeart />
              <div>
                <h4>Emotional Healing</h4>
                <p>Release stress and emotional blocks.</p>
              </div>
            </div>

            <div className="feature-card">
              <FaBrain />
              <div>
                <h4>Mind Mastery</h4>
                <p>Improve focus and positive thinking.</p>
              </div>
            </div>

            <div className="feature-card">
              <FaLeaf />
              <div>
                <h4>Balanced Lifestyle</h4>
                <p>Create healthier daily habits.</p>
              </div>
            </div>

            <div className="feature-card">
              <FaUsers />
              <div>
                <h4>Supportive Community</h4>
                <p>Grow together with like-minded people.</p>
              </div>
            </div>

          </div>

          <button className="journey-btn">
            Learn More
          </button>

        </div>

      </div>

    </section>
  );
}

export default Journey;