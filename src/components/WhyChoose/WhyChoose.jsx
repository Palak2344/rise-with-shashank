import "./WhyChoose.css";
import {
  FaCheckCircle,
  FaAward,
  FaHeart,
  FaUsers,
  FaLeaf,
  FaSmile,
} from "react-icons/fa";

function WhyChoose() {
  return (
    <section className="why">
      <div className="container why-container">

        <div className="why-image">
          <img src="/images/profile.jpg" alt="Shashank" />

          <div className="experience">
            <h2>10+</h2>
            <p>Years Experience</p>
          </div>
        </div>

        <div className="why-content">

          <span className="section-tag">
            Why Choose Us
          </span>

          <h2>
            Transform Your Life With
            <span> Expert Guidance</span>
          </h2>

          <p>
            Every journey is unique. At Rise with Shashank,
            we provide personalized meditation,
            emotional healing, and life coaching that
            empowers you to live with confidence,
            clarity, and inner peace.
          </p>

          <div className="why-grid">

            <div className="why-card">
              <FaAward />
              <div>
                <h4>Certified Coach</h4>
                <p>Professional meditation & life coach.</p>
              </div>
            </div>

            <div className="why-card">
              <FaUsers />
              <div>
                <h4>5000+ Students</h4>
                <p>Lives transformed worldwide.</p>
              </div>
            </div>

            <div className="why-card">
              <FaHeart />
              <div>
                <h4>Emotional Healing</h4>
                <p>Heal anxiety and emotional pain.</p>
              </div>
            </div>

            <div className="why-card">
              <FaLeaf />
              <div>
                <h4>Mindfulness</h4>
                <p>Create peace in everyday life.</p>
              </div>
            </div>

            <div className="why-card">
              <FaSmile />
              <div>
                <h4>Positive Lifestyle</h4>
                <p>Build healthy habits for success.</p>
              </div>
            </div>

            <div className="why-card">
              <FaCheckCircle />
              <div>
                <h4>Lifetime Community</h4>
                <p>Support beyond every session.</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default WhyChoose;