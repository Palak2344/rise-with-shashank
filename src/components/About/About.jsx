import { motion } from "framer-motion";
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
  FaQuoteLeft,
} from "react-icons/fa";

import { Reveal, Stagger, StaggerItem } from "../ui/Motion";
import Counter from "../ui/Counter";
import "./About.css";

const expertise = [
  { icon: <FaBrain />, label: "Mindfulness" },
  { icon: <FaHeart />, label: "Emotional Healing" },
  { icon: <FaBullseye />, label: "Life Goals" },
  { icon: <FaBed />, label: "Sleep Issues" },
  { icon: <FaGraduationCap />, label: "Career Guidance" },
  { icon: <FaBriefcase />, label: "Professional Growth" },
  { icon: <FaDumbbell />, label: "Physical Wellness" },
  { icon: <FaStar />, label: "Self Transformation" },
];

const roles = [
  "Mindset Coach",
  "Breathwork Facilitator",
  "Retreat Host",
  "Corporate Wellness Consultant",
  "Published Author",
];

const counters = [
  { to: 8, suffix: "+", label: "Years Experience" },
  { to: 200, suffix: "+", label: "Clients Coached" },
  { to: 500, suffix: "+", label: "Workshop Participants" },
  { to: 50, suffix: "+", label: "Retreats Hosted" },
];

function About() {
  return (
    <section className="about" id="about">
      <div className="container about-wrapper">
        {/* IMAGE */}
        <Reveal direction="right" className="about-image">
          <div className="about-frame">
            <motion.img
              src="/images/profile.jpg"
              alt="Shashank Lalwani"
              loading="lazy"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>

          <div className="experience-badge">
            <strong>
              <Counter to={8} suffix="+" />
            </strong>
            <span>Years of
              <br />
              Experience</span>
          </div>

          <div className="about-quote">
            <FaQuoteLeft />
            <p>Mindfulness is not just a practice — it is the foundation of life.</p>
          </div>
        </Reveal>

        {/* CONTENT */}
        <div className="about-content">
          <Reveal>
            <span className="eyebrow">About Shashank Lalwani</span>
            <h2>
              We Shall Make You Fall in Love With{" "}
              <span className="accent-text">Yourself</span>
            </h2>
            <p className="about-title">Founder &amp; Lead Coach · Pune, India</p>
            <ul className="about-roles">
              {roles.map((role) => (
                <li key={role}>{role}</li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1} className="about-text">
            <p className="lead">
              For over <strong>8 years</strong>, Shashank Lalwani has been
              dedicated to mindfulness, meditation, and helping individuals
              discover peace, confidence, and purpose in life.
            </p>

            <p>
              As the former Customer Experience Head at one of the world's
              largest global fitness communities, he has personally guided
              thousands of people toward building discipline, emotional
              resilience, and a happier lifestyle.
            </p>

            <p>
              Mindfulness is not just a practice for Shashank—it is the
              foundation of his life. Through meditation, self-reflection, and
              practical coaching, he helps people transform their inner world
              and create lasting positive change.
            </p>

            <p>
              He is an <strong>Achology Certified Life Enhancement Coach</strong>{" "}
              and a <strong>Certified Mindfulness Coach</strong>. He has created
              successful workshops including{" "}
              <strong>"7 Days to Amazing Lifestyle"</strong> and{" "}
              <strong>"21 Days of Awesomeness"</strong>, benefiting more than{" "}
              <strong>500+ participants</strong>.
            </p>

            <p>
              He also works with the{" "}
              <strong>Institute of Nutrition and Fitness Sciences</strong> under
              the Mental Well-Being Initiative, providing one-on-one guidance
              and counselling.
            </p>
          </Reveal>

          <Stagger className="expertise" stagger={0.06}>
            {expertise.map((item) => (
              <StaggerItem className="expertise-chip" key={item.label}>
                {item.icon}
                <span>{item.label}</span>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal className="about-counters">
            {counters.map((c) => (
              <div key={c.label}>
                <strong>
                  <Counter to={c.to} suffix={c.suffix} />
                </strong>
                <span>{c.label}</span>
              </div>
            ))}
          </Reveal>

          <Reveal>
            <a
              href="https://www.instagram.com/shashanklalwani/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost instagram-btn"
            >
              <FaInstagram />
              Follow Shashank on Instagram
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default About;
