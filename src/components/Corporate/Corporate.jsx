import { Link } from "react-router-dom";
import { FaMountain, FaFire, FaUserTie, FaSyncAlt, FaArrowRight } from "react-icons/fa";

import SectionHead from "../ui/SectionHead";
import Counter from "../ui/Counter";
import { Reveal, Stagger, StaggerItem } from "../ui/Motion";
import "./Corporate.css";

const offerings = [
  {
    icon: <FaMountain />,
    title: "Team Wellness Retreats",
    tags: ["Full day", "Weekend", "Group"],
    text: "Off-site immersions, from a single day to a full weekend, that reset collective stress, strengthen team bonds and give everyone tools they keep using.",
  },
  {
    icon: <FaFire />,
    title: "Burnout Recovery Workshops",
    tags: ["Half day", "Online / Offline", "Individual focus"],
    text: "Focused half-day sessions that give people practical breathwork, somatic techniques and mindset tools for high-pressure work.",
  },
  {
    icon: <FaUserTie />,
    title: "Executive 1:1 Coaching",
    tags: ["Monthly", "1:1 Private", "Leadership"],
    text: "Tailored coaching that helps senior leaders handle high-stakes stress, think with more clarity and lead from a grounded place.",
  },
  {
    icon: <FaSyncAlt />,
    title: "Ongoing Wellness Retainers",
    tags: ["Monthly", "Company-wide", "Sustainable"],
    text: "Monthly programs that weave short breathwork, movement and stillness practices into the everyday rhythm of work across teams.",
  },
];

function Corporate() {
  return (
    <section className="corporate" id="corporate">
      <div className="corporate-glow" aria-hidden="true" />

      <div className="container">
        <SectionHead eyebrow="For Organisations" title="Corporate Wellness That" highlight="Actually Lasts">
          Burnout isn't fixed by a single yoga class. We build practical,
          sustainable routines that fit the rhythm of your organisation and
          help teams regulate stress at scale.
        </SectionHead>

        <Stagger className="corp-grid">
          {offerings.map((o, i) => (
            <StaggerItem className="corp-card" key={o.title}>
              <div className="corp-top">
                <span className="corp-icon">{o.icon}</span>
                <span className="corp-num">0{i + 1}</span>
              </div>
              <h3>{o.title}</h3>
              <ul className="corp-tags">
                {o.tags.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              <p>{o.text}</p>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal className="corp-cta">
          <div className="corp-stats">
            <div>
              <strong>
                <Counter to={100} suffix="+" />
              </strong>
              <span>Corporate sessions</span>
            </div>
            <div>
              <strong>
                <Counter to={30} suffix="+" />
              </strong>
              <span>Companies</span>
            </div>
          </div>

          <Link to="/contact?interest=Corporate%20Wellness" className="btn btn-gold">
            Book a Corporate Discovery Call <FaArrowRight />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

export default Corporate;
