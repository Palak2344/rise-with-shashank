import { Fragment, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaArrowRight, FaPlay, FaBookOpen, FaSun } from "react-icons/fa";

import Counter from "../ui/Counter";
import "./Hero.css";

const ease = [0.22, 1, 0.36, 1];

const headline = [
  { text: "Discover" },
  { text: "Inner" },
  { text: "Peace" },
  { text: "Through", br: true },
  { text: "Meditation", accent: true },
  { text: "&", br: true },
  { text: "Mindfulness", accent: true },
];

const stats = [
  { to: 8, suffix: "+", label: "Years experience" },
  { to: 200, suffix: "+", label: "Clients guided" },
  { to: 50, suffix: "+", label: "Retreats hosted" },
];

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const ringRotate = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <section className="hero" ref={ref}>
      {/* ambient background */}
      <div className="hero-bg" aria-hidden="true">
        <span className="orb orb-1" />
        <span className="orb orb-2" />
        <span className="orb orb-3" />
      </div>

      <div className="container hero-grid">
        <motion.div className="hero-content" style={{ y: contentY }}>
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.2 }}
          >
            <span className="pulse-dot" />
            Meditate · Transform · Rise
          </motion.div>

          <h1>
            {headline.map((word, i) => (
              <Fragment key={i}>
                <span className="word-wrap">
                  <motion.span
                    className={`word ${word.accent ? "accent-text" : ""}`}
                    initial={{ y: "110%", rotate: 4 }}
                    animate={{ y: 0, rotate: 0 }}
                    transition={{ duration: 1, ease, delay: 0.3 + i * 0.08 }}
                  >
                    {word.text}
                  </motion.span>
                </span>
                {word.br ? <br /> : " "}
              </Fragment>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.9 }}
          >
            Break free from stress, self-doubt and emotional pain. Discover
            clarity, peace and purpose through mindfulness, meditation and inner
            healing.
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 1.05 }}
          >
            <Link to="/programs" className="btn btn-primary">
              Explore Programs <FaArrowRight />
            </Link>

            <a
              href="https://www.youtube.com/@bkshashank"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost play-btn"
            >
              <span className="play-icon">
                <FaPlay />
              </span>
              Watch Intro
            </a>
          </motion.div>

          <motion.div
            className="hero-stats"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.25 }}
          >
            {stats.map((s) => (
              <div key={s.label}>
                <strong>
                  <Counter to={s.to} suffix={s.suffix} />
                </strong>
                <span>{s.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* visual */}
        <div className="hero-visual">
          <motion.svg
            className="hero-rings"
            viewBox="0 0 600 600"
            style={{ rotate: ringRotate }}
            aria-hidden="true"
          >
            <circle cx="300" cy="300" r="290" />
            <circle cx="300" cy="300" r="240" strokeDasharray="2 10" />
            <circle cx="300" cy="300" r="190" />
          </motion.svg>

          <motion.div
            className="hero-arch"
            initial={{ opacity: 0, scale: 0.92, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.3, ease, delay: 0.3 }}
          >
            <motion.img
              src="/images/hero.jpeg"
              alt="Silhouette meditating on a mountain top at sunrise"
              style={{ y: imageY }}
            />
          </motion.div>

          <motion.div
            className="float-card card-a"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease, delay: 1.1 }}
          >
            <span className="float-icon">
              <FaSun />
            </span>
            <div>
              <strong>Live every morning</strong>
              <small>5:30 AM IST guided meditation</small>
            </div>
          </motion.div>

          <motion.div
            className="float-card card-b"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease, delay: 1.3 }}
          >
            <span className="float-icon gold">
              <FaBookOpen />
            </span>
            <div>
              <strong>Published author</strong>
              <small>21 Days of Awesomeness</small>
            </div>
          </motion.div>

          <svg className="spin-badge" viewBox="0 0 120 120" aria-hidden="true">
            <defs>
              <path id="badge-circle" d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" />
            </defs>
            <text>
              <textPath href="#badge-circle">
                MEDITATE • TRANSFORM • RISE • BREATHE •
              </textPath>
            </text>
          </svg>
        </div>
      </div>

      <a href="#about" className="scroll-cue" aria-label="Scroll to about section">
        <span />
      </a>
    </section>
  );
}
