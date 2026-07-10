import "./Workshop.css";
import {
  FaCalendarAlt,
  FaClock,
  FaCheckCircle,
  FaGift,
} from "react-icons/fa";

const days = [
  {
    day: "Day 1",
    title: "AWARENESS",
    focus: "Becoming aware of your thoughts, patterns, and morning habits.",
    meditation: "Body scan and breath awareness",
    habit: "Identifying your morning triggers",
  },
  {
    day: "Day 2",
    title: "INTENTION",
    focus: "Setting clear intentions for your day and life.",
    meditation: "Intention-setting visualization",
    habit: "The power of 'why' in habit formation",
  },
  {
    day: "Day 3",
    title: "PRESENCE",
    focus: "Being fully present in each moment.",
    meditation: "Mindfulness of thoughts and sensations",
    habit: "Creating environmental cues for success",
  },
  {
    day: "Day 4",
    title: "GRATITUDE",
    focus: "Cultivating appreciation and a positive mindset.",
    meditation: "Gratitude meditation & loving-kindness",
    habit: "Stacking habits for lasting change",
  },
  {
    day: "Day 5",
    title: "COMMITMENT",
    focus: "Cementing your practice and moving forward.",
    meditation: "Integration and future visioning",
    habit: "Maintaining momentum beyond the workshop",
  },
];

function Workshop() {
  return (
    <section className="workshop" id="workshop">
      <div className="container">

        <div className="workshop-header">
          <span className="section-tag">Complete Workshop Schedule</span>

          <h2 className="section-title">
            5 Days Amazing Lifestyle Workshop
          </h2>

          <p className="section-description">
            Recordings available • Live participation encouraged
          </p>
        </div>

        <div className="intro-card">
          <h3>Day 0 – Introductory Session</h3>

          <p>
            <FaClock /> Evening before Day 1 • 8:00 PM IST • 60 Minutes
          </p>

          <ul>
            <li><FaCheckCircle /> Welcome & Orientation</li>
            <li><FaCheckCircle /> Meet Your Facilitator</li>
            <li><FaCheckCircle /> Science of Habits</li>
            <li><FaCheckCircle /> Morning Routine Framework</li>
            <li><FaCheckCircle /> Goal Setting</li>
            <li><FaCheckCircle /> Live Q&A</li>
          </ul>

          <strong>
            Key Takeaway:
          </strong>

          <p>
            You'll know exactly what to expect and how to make the most of
            the next five mornings.
          </p>
        </div>

        <h3 className="timeline-title">
          Daily Session Structure
        </h3>

        <div className="timeline">

          <div className="time-card">
            <h4>5:30 – 5:35 AM</h4>
            <p>Arrival & Settling In</p>
            <span>
              Gentle wake-up music • Community check-in • Intention setting
            </span>
          </div>

          <div className="time-card">
            <h4>5:35 – 5:55 AM</h4>
            <p>Guided Meditation</p>
            <span>
              Breath work • Visualization • Mindfulness • Silent meditation
            </span>
          </div>

          <div className="time-card">
            <h4>5:55 – 6:00 AM</h4>
            <p>Closing & Reflection</p>
            <span>
              Gratitude • Daily intention • Habit-building tip
            </span>
          </div>

        </div>

        <h3 className="timeline-title">
          Daily Themes
        </h3>

        <div className="day-grid">

          {days.map((item) => (
            <div className="day-card" key={item.day}>
              <span>{item.day}</span>

              <h3>{item.title}</h3>

              <p>
                <strong>Focus:</strong> {item.focus}
              </p>

              <p>
                <strong>Meditation:</strong> {item.meditation}
              </p>

              <p>
                <strong>Habit Tip:</strong> {item.habit}
              </p>
            </div>
          ))}

        </div>

        <div className="bonus-card">

          <FaGift />

          <h3>🎁 Surprise Bonus: Vision Board Workshop</h3>

          <p>
            Every Thursday • 8:00 PM IST
          </p>

          <p>
            Build a powerful vision board to visualize your goals and align
            your mornings with your bigger purpose. Stay inspired and
            connected long after the workshop ends.
          </p>

        </div>

      </div>
    </section>
  );
}

export default Workshop;