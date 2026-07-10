import "./Programs.css";
import {
  FaSpa,
  FaBrain,
  FaHeart,
  FaUsers,
  FaLeaf,
  FaSun,
} from "react-icons/fa";

const programs = [
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

function Programs() {
  return (
    <section className="programs" id="programs">
      <div className="container">

        {/* Section Header */}
        <div className="program-header">

          <span className="section-tag">
            Our Programs
          </span>

          <h2 className="section-title">
            Transform Your Life Through
            <span> Powerful Programs</span>
          </h2>

          <p className="section-description">
            Discover carefully designed programs that help you develop
            mindfulness, emotional strength, confidence, and inner peace.
          </p>

        </div>

        {/* Program Cards */}
        <div className="program-grid">
          {programs.map((item, index) => (
            <div className="program-card" key={index}>

              <div className="program-icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.desc}</p>

              <button>
                Learn More →
              </button>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Programs;