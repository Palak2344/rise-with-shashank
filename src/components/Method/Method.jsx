import { motion } from "framer-motion";
import { FaBrain, FaLeaf, FaWind, FaMoon } from "react-icons/fa";

import SectionHead from "../ui/SectionHead";
import { Reveal, Stagger, StaggerItem } from "../ui/Motion";
import "./Method.css";

const phases = [
  {
    when: "Weeks 1–2",
    title: "Discover",
    text: "An in-depth first assessment brings the hidden patterns behind your stress, poor sleep and constant low-level anxiety into view — observed with care, never judged.",
  },
  {
    when: "Weeks 3–5",
    title: "Reset",
    text: "Breathwork, somatic movement and stillness practices calm an over-activated nervous system, so your body can learn what feeling safe is like again.",
  },
  {
    when: "Weeks 6–9",
    title: "Embody",
    text: "Restorative movement and mindset work help you build a kinder relationship with your body — one based on listening, not punishment.",
  },
  {
    when: "Week 10 onwards",
    title: "Sustain",
    text: "Together we design a daily rhythm that fits your real schedule, home and family, so wellbeing becomes a steady anchor rather than another chore.",
  },
];

const pillars = [
  { icon: <FaBrain />, title: "Mind", text: "Clear intention and calm awareness — the starting point of every lasting change." },
  { icon: <FaLeaf />, title: "Body", text: "Food and movement offered as care, never as punishment." },
  { icon: <FaWind />, title: "Breath", text: "The bridge from a stressed nervous system to a calm, conscious response." },
  { icon: <FaMoon />, title: "Rest", text: "Intentional stillness that restores what effort alone never can." },
];

function Method() {
  return (
    <section className="method section-alt" id="method">
      <div className="container">
        <SectionHead eyebrow="The Methodology" title="A Mind-First Journey," highlight="Built to Last">
          A structured four-phase path that creates steady, lasting change —
          not a quick sprint to a finish line.
        </SectionHead>

        <div className="phases">
          <motion.span
            className="phases-line"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
            aria-hidden="true"
          />

          <Stagger as="ol" className="phase-grid" stagger={0.18}>
            {phases.map((p, i) => (
              <StaggerItem as="li" className="phase" key={p.title}>
                <span className="phase-num">0{i + 1}</span>
                <span className="phase-when">{p.when}</span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        <div className="pillars">
          <Reveal className="pillars-head">
            <span className="eyebrow">Four Pillars · One Practice</span>
            <h3>
              Healing the <span className="accent-text">whole system</span>
            </h3>
            <p>
              Real healing looks after mind, body, breath and rest together —
              never one of them in isolation.
            </p>
          </Reveal>

          <Stagger className="pillar-grid">
            {pillars.map((p, i) => (
              <StaggerItem className="pillar" key={p.title}>
                <span className="pillar-icon">{p.icon}</span>
                <span className="pillar-num">0{i + 1}</span>
                <h4>{p.title}</h4>
                <p>{p.text}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}

export default Method;
