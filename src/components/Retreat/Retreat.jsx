import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaWind, FaSnowflake, FaTree, FaAppleAlt, FaBookOpen, FaUsers, FaArrowRight, FaSpa } from "react-icons/fa";

import SectionHead from "../ui/SectionHead";
import { Reveal, Stagger, StaggerItem } from "../ui/Motion";
import "./Retreat.css";

const inclusions = [
  { icon: <FaWind />, label: "Guided breathwork sessions" },
  { icon: <FaSnowflake />, label: "Ice bath immersions" },
  { icon: <FaTree />, label: "Nature walks & forest bathing" },
  { icon: <FaAppleAlt />, label: "Nourishing whole-food meals" },
  { icon: <FaBookOpen />, label: "Quiet integration & journaling" },
];

function Retreat() {
  return (
    <section className="retreat" id="retreat">
      <div className="container">
        <SectionHead eyebrow="Immersion Experience" title="The Weekend" highlight="Wellness Retreat">
          Two immersive days in a peaceful natural setting, limited to just 12
          participants. Every session is thoughtfully sequenced so the shifts
          you feel go deep — and stay with you.
        </SectionHead>

        <div className="retreat-grid">
          <Reveal direction="right" className="retreat-visual">
            <motion.img
              src="/images/group.jpg"
              alt="Retreat participants gathered outdoors"
              loading="lazy"
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            />
            <div className="retreat-seats">
              <FaUsers />
              <div>
                <strong>12</strong>
                <span>spaces per retreat</span>
              </div>
            </div>
            <div className="retreat-days">2 days · in nature</div>
          </Reveal>

          <div className="retreat-content">
            <Reveal className="retreat-feature">
              <span className="icon-bubble">
                <FaSpa />
              </span>
              <div>
                <h3>Somatic Reset Workshops</h3>
                <p>
                  Discover where your body stores tension and release it with
                  gentle, guided techniques that use breath and mindful
                  movement to settle the nervous system.
                </p>
              </div>
            </Reveal>

            <Stagger as="ul" className="retreat-list" stagger={0.08}>
              {inclusions.map((item) => (
                <StaggerItem as="li" key={item.label}>
                  <span className="retreat-list-icon">{item.icon}</span>
                  {item.label}
                </StaggerItem>
              ))}
            </Stagger>

            <Reveal className="retreat-cta">
              <div>
                <span className="cta-kicker">Limited availability</span>
                <h4>An investment in yourself</h4>
                <p>
                  In your peace, and in the life you come home to. Groups stay
                  small so everyone gets real depth and attention.
                </p>
              </div>
              <Link to="/contact?interest=Weekend%20Retreat" className="btn btn-gold">
                Reserve Your Space <FaArrowRight />
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Retreat;
