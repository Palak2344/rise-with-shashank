import { FaCheckCircle, FaAward, FaHeart, FaUsers, FaLeaf, FaSmile } from "react-icons/fa";

import SectionHead from "../ui/SectionHead";
import { Stagger, StaggerItem } from "../ui/Motion";
import "./WhyChoose.css";

const reasons = [
  { icon: <FaAward />, title: "Certified Coach", text: "Professional meditation & life coach." },
  { icon: <FaUsers />, title: "500+ Participants", text: "Across India & the UAE." },
  { icon: <FaHeart />, title: "Emotional Healing", text: "Heal anxiety and emotional pain." },
  { icon: <FaLeaf />, title: "Mindfulness", text: "Create peace in everyday life." },
  { icon: <FaSmile />, title: "Positive Lifestyle", text: "Build healthy habits for success." },
  { icon: <FaCheckCircle />, title: "Lifetime Community", text: "Support beyond every session." },
];

function WhyChoose() {
  return (
    <section className="why" id="why">
      <div className="why-glow" aria-hidden="true" />

      <div className="container">
        <SectionHead eyebrow="Why Choose Us" title="Transform Your Life With" highlight="Expert Guidance">
          Every journey is unique. At Rise with Shashank, we provide
          personalized meditation, emotional healing, and life coaching that
          empowers you to live with confidence, clarity, and inner peace.
        </SectionHead>

        <Stagger className="why-grid">
          {reasons.map((r, i) => (
            <StaggerItem className="why-card" key={r.title}>
              <span className="why-num">0{i + 1}</span>
              <span className="why-icon">{r.icon}</span>
              <h4>{r.title}</h4>
              <p>{r.text}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

export default WhyChoose;
