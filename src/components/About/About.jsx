import "./About.css";

import {
  FaBrain,
  FaHeart,
  FaBullseye,
  FaBed,
  FaGraduationCap,
  FaBriefcase,
  FaDumbbell,
  FaStar,
  FaInstagram,
} from "react-icons/fa";

function About() {
  return (
    <section className="about" id="about">
      <div className="container">

        {/* Section Title */}

        <div className="section-title">
          <span>ABOUT SHASHANK</span>

          <h2>
            We Shall Make You Fall in Love With Yourself
          </h2>
        </div>

        <div className="about-wrapper">

          {/* LEFT IMAGE */}

          <div className="about-image">

            <img
              src="/images/profile.jpg"
              alt="Shashank Lalwani"
            />

            <div className="experience-badge">
              <h2>15+</h2>
              <p>Years Experience</p>
            </div>

          </div>

          {/* RIGHT CONTENT */}

          <div className="about-content">

            <h3>About Shashank Lalwani</h3>

            <p>
              For over <strong>15 years</strong>, Shashank Lalwani has
              been dedicated to mindfulness, meditation, and helping
              individuals discover peace, confidence, and purpose in
              life.
            </p>

            <p>
              As the former Customer Experience Head at one of the
              world's largest global fitness communities, he has
              personally guided thousands of people toward building
              discipline, emotional resilience, and a happier
              lifestyle.
            </p>

            <p>
              Mindfulness is not just a practice for Shashank—it is
              the foundation of his life. Through meditation,
              self-reflection, and practical coaching, he helps
              people transform their inner world and create lasting
              positive change.
            </p>

            <p>
              He is an
              <strong> Achology Certified Life Enhancement Coach </strong>
              and a
              <strong> Certified Mindfulness Coach</strong>.
              He has created successful workshops including
              <strong> "7 Days to Amazing Lifestyle"</strong> and
              <strong> "21 Days of Awesomeness"</strong>,
              benefiting more than
              <strong> 500+ students</strong>.
            </p>

            <p>
              He also works with the
              <strong>
                {" "}
                Institute of Nutrition and Fitness Sciences
              </strong>
              {" "}under the Mental Well-Being Initiative,
              providing one-on-one guidance and counselling.
            </p>

            {/* Expertise */}

            <div className="expertise">

              <div className="card">
                <FaBrain />
                <span>Mindfulness</span>
              </div>

              <div className="card">
                <FaHeart />
                <span>Emotional Healing</span>
              </div>

              <div className="card">
                <FaBullseye />
                <span>Life Goals</span>
              </div>

              <div className="card">
                <FaBed />
                <span>Sleep Issues</span>
              </div>

              <div className="card">
                <FaGraduationCap />
                <span>Career Guidance</span>
              </div>

              <div className="card">
                <FaBriefcase />
                <span>Professional Growth</span>
              </div>

              <div className="card">
                <FaDumbbell />
                <span>Physical Wellness</span>
              </div>

              <div className="card">
                <FaStar />
                <span>Self Transformation</span>
              </div>

            </div>

            {/* Counter */}

            <div className="counter">

              <div>
                <h2>15+</h2>
                <p>Years Experience</p>
              </div>

              <div>
                <h2>500+</h2>
                <p>Students Guided</p>
              </div>

              <div>
                <h2>25+</h2>
                <p>Workshop Batches</p>
              </div>

              <div>
                <h2>1000+</h2>
                <p>Lives Inspired</p>
              </div>

            </div>

            {/* Instagram */}

            <a
              href="https://www.instagram.com/shashanklalwani/"
              target="_blank"
              rel="noopener noreferrer"
              className="instagram-btn"
            >
              <FaInstagram />

              <span>
                Follow Shashank on Instagram
              </span>

            </a>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;