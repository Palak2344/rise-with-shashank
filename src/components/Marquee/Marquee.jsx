import { FaSpa } from "react-icons/fa";
import "./Marquee.css";

const words = [
  "Meditation",
  "Mindfulness",
  "Breathwork",
  "Emotional Healing",
  "Self Love",
  "Inner Peace",
  "Healthy Habits",
  "Life Coaching",
  "Retreats",
  "Gratitude",
];

/* Infinite scrolling ribbon of practice keywords */
export default function Marquee() {
  const row = [...words, ...words];

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {row.map((word, i) => (
          <span className="marquee-item" key={i}>
            {word}
            <FaSpa />
          </span>
        ))}
      </div>
    </div>
  );
}
