import { motion } from "framer-motion";
import { FaClock, FaCheckCircle, FaGift, FaCalendarAlt } from "react-icons/fa";

import SectionHead from "../ui/SectionHead";
import { Reveal, Stagger, StaggerItem } from "../ui/Motion";
import "./Workshop.css";

const days = [
  {
    day: "Day 1",
    title: "Awareness",
    focus: "Becoming aware of your thoughts, patterns, and morning habits.",
    meditation: "Body scan and breath awareness",
    habit: "Identifying your morning triggers",
  },
  {
    day: "Day 2",
    title: "Intention",
    focus: "Setting clear intentions for your day and life.",
    meditation: "Intention-setting visualization",
    habit: "The power of 'why' in habit formation",
  },
  {
    day: "Day 3",
    title: "Presence",
    focus: "Being fully present in each moment.",
    meditation: "Mindfulness of thoughts and sensations",
    habit: "Creating environmental cues for success",
  },
  {
    day: "Day 4",
    title: "Gratitude",
    focus: "Cultivating appreciation and a positive mindset.",
    meditation: "Gratitude meditation & loving-kindness",
    habit: "Stacking habits for lasting change",
  },
  {
    day: "Day 5",
    title: "Commitment",
    focus: "Cementing your practice and moving forward.",
    meditation: "Integration and future visioning",
    habit: "Maintaining momentum beyond the workshop",
  },
];

const schedule = [
  {
    time: "5:30 – 5:35 AM",
    title: "Arrival & Settling In",
    text: "Gentle wake-up music • Community check-in • Intention setting",
  },
  {
    time: "5:35 – 5:55 AM",
    title: "Guided Meditation",
    text: "Breath work • Visualization • Mindfulness • Silent meditation",
  },
  {
    time: "5:55 – 6:00 AM",
    title: "Closing & Reflection",
    text: "Gratitude • Daily intention • Habit-building tip",
  },
];

const introPoints = [
  "Welcome & Orientation",
  "Meet Your Facilitator",
  "Science of Habits",
  "Morning Routine Framework",
  "Goal Setting",
  "Live Q&A",
];

function Workshop() {
  return (
    <section className="workshop section-alt" id="workshop">
      <div className="container">
        <SectionHead eyebrow="Complete Workshop Schedule" title="5 Days" highlight="Amazing Lifestyle Workshop">
          Recordings available • Live participation encouraged
        </SectionHead>

        {/* Day 0 */}
        <Reveal className="intro-card">
          <div className="intro-left">
            <span className="day-chip">Day 0</span>
            <h3>Introductory Session</h3>
            <p className="intro-time">
              <FaClock /> Evening before Day 1 • 8:00 PM IST • 60 Minutes
            </p>
            <div className="takeaway">
              <strong>Key Takeaway</strong>
              <p>
                You'll know exactly what to expect and how to make the most of
                the next five mornings.
              </p>
            </div>
          </div>

          <ul className="intro-points">
            {introPoints.map((point) => (
              <li key={point}>
                <FaCheckCircle /> {point}
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Daily session timeline */}
        <Reveal as="h3" className="sub-title">
          Daily Session Structure
        </Reveal>

        <div className="timeline">
          <motion.div
            className="timeline-line"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          />
          <Stagger className="timeline-grid" stagger={0.2}>
            {schedule.map((s) => (
              <StaggerItem className="time-card" key={s.time}>
                <span className="time-dot" />
                <span className="time">{s.time}</span>
                <h4>{s.title}</h4>
                <p>{s.text}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        {/* Daily themes */}
        <Reveal as="h3" className="sub-title">
          Daily Themes
        </Reveal>

        <Stagger className="day-grid">
          {days.map((item) => (
            <StaggerItem className="day-card" key={item.day}>
              <span className="day-chip">{item.day}</span>
              <h3>{item.title}</h3>
              <dl>
                <dt>Focus</dt>
                <dd>{item.focus}</dd>
                <dt>Meditation</dt>
                <dd>{item.meditation}</dd>
                <dt>Habit Tip</dt>
                <dd>{item.habit}</dd>
              </dl>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Bonus */}
        <Reveal className="bonus-card">
          <motion.span
            className="bonus-icon"
            animate={{ rotate: [0, -10, 10, -6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, repeatDelay: 2.5 }}
          >
            <FaGift />
          </motion.span>

          <div>
            <span className="bonus-label">Surprise Bonus</span>
            <h3>Vision Board Workshop</h3>
            <p className="bonus-time">
              <FaCalendarAlt /> Every Thursday • 8:00 PM IST
            </p>
            <p>
              Build a powerful vision board to visualize your goals and align
              your mornings with your bigger purpose. Stay inspired and
              connected long after the workshop ends.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Workshop;
