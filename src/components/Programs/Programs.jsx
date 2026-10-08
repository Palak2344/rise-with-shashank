import { FaSpa, FaBrain, FaHeart, FaUsers, FaLeaf, FaLock, FaSun, FaCheck, FaWind, FaUserCheck } from "react-icons/fa";

import SectionHead from "../ui/SectionHead";
import { Reveal, Stagger, StaggerItem } from "../ui/Motion";
import "./Programs.css";

const programs = [
  {
    icon: <FaUserCheck />,
    title: "1:1 Coaching",
    desc: "A personal, mind-first coaching journey through the Discover, Reset, Embody and Sustain phases, shaped around your life.",
  },
  {
    icon: <FaWind />,
    title: "Breathwork",
    desc: "Guided breathing practices that calm the nervous system and help you shift your state quickly and reliably.",
  },
  {
    icon: <FaSpa />,
    title: "Meditation",
    desc: "Learn powerful meditation techniques to calm your mind, reduce stress, and discover lasting inner peace.",
  },
  {
    icon: <FaBrain />,
    title: "Mindfulness",
    desc: "Develop awareness and improve focus by living fully in the present moment with mindfulness practices.",
  },
  {
    icon: <FaHeart />,
    title: "Emotional Healing",
    desc: "Release emotional pain, overcome anxiety, and build a healthier relationship with yourself.",
  },
  {
    icon: <FaLeaf />,
    title: "Life Transformation",
    desc: "Create positive habits, improve confidence, and transform every area of your personal life.",
  },
  {
    icon: <FaUsers />,
    title: "Relationship Coaching",
    desc: "Strengthen relationships through better communication, understanding, and emotional balance.",
  },
  {
    icon: <FaSun />,
    title: "Wellness Workshops",
    desc: "Join interactive workshops designed to help you grow mentally, emotionally, and spiritually.",
  },
];

const included = [
  "5 Days of Live Guided Morning Meditation",
  "Kickoff Training Session (60 Minutes)",
  "Lifetime Access to All Recordings",
  "Habit Building Framework",
  "Community Support & Accountability",
  "Progress Tracking Tools",
];

/* Moves the card's spotlight gradient to follow the cursor */
function trackPointer(e) {
  const rect = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
  e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
}

function Programs() {
  return (
    <section className="programs" id="programs">
      <div className="container">
        <SectionHead eyebrow="Our Programs" title="Transform Your Life Through" highlight="Powerful Programs">
          Discover carefully designed programs that help you develop
          mindfulness, emotional strength, confidence, and inner peace.
        </SectionHead>

        <Stagger className="program-grid">
          {programs.map((item, i) => (
            <StaggerItem className="program-card" key={item.title} onMouseMove={trackPointer}>
              <div className="program-top">
                <span className="icon-bubble">{item.icon}</span>
                <span className="program-num">0{i + 1}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Pricing */}
        <Reveal className="program-cta">
          <div className="cta-left">
            <span className="cta-tag">Less than the price of a pizza 🍕</span>
            <h3>5 Days Amazing Lifestyle Workshop</h3>

            <div className="price">
              <span className="currency">₹</span>
              <span className="amount">501</span>
            </div>
            <p className="cta-subtitle">One-time commitment fee</p>

            <a
              href="https://pages.razorpay.com/transf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold pay-btn"
            >
              <FaLock />
              Pay ₹501 & Reserve Your Spot
            </a>

            <p className="secure-text">Secure payment via Razorpay • Instant Confirmation</p>
          </div>

          <ul className="cta-features">
            {included.map((item) => (
              <li key={item}>
                <span className="check">
                  <FaCheck />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

export default Programs;
