import { useState } from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

import SectionHead from "../ui/SectionHead";
import { Stagger, StaggerItem } from "../ui/Motion";
import "./Testimonials.css";

const testimonials = [
  {
    name: "Priya Rajan",
    role: "1:1 Coaching Client",
    tag: "Coaching",
    label: "Personal Coaching",
    review:
      "For the first time in ten years, my shoulders aren't touching my ears. The physical release came only after the mental one.",
  },
  {
    name: "Vikrant Thapar",
    role: "VP Engineering, FinFold India",
    tag: "Coaching",
    label: "Executive Coaching",
    review:
      "Not a quick fix. A deep, slow, structural change to how I experience my own life. I'm a different person — and my team notices.",
  },
  {
    name: "Kabir Mehta",
    role: "Weekend Retreat Participant",
    tag: "Retreat",
    label: "Retreat",
    review:
      "I thought I needed more discipline. I actually needed more compassion. Shashank helped me find the difference.",
  },
  {
    name: "Anita Shah",
    role: "COO, Peak Media Group",
    tag: "Corporate",
    label: "Corporate",
    review:
      "Our team's energy shifted completely after the corporate immersion. More present, less reactive, genuinely communicating.",
  },
  {
    name: "Neena Kaur",
    role: "Wellness Participant, Delhi",
    tag: "Breathwork",
    label: "Breathwork",
    review:
      "The breathwork sessions alone were worth it. I had no idea my breath could change my entire state so quickly — and reliably.",
  },
  {
    name: "Arjun Bhat",
    role: "Executive Coaching Client",
    tag: "Coaching",
    label: "Coaching",
    review:
      "I came in stressed and deeply skeptical. I left with tools I still use every single day, seven months later.",
  },
  {
    name: "Meera Joshi",
    role: "Retreat Participant, Pune",
    tag: "Retreat",
    label: "Retreat",
    review:
      "Shashank doesn't sell you wellness. He builds it with you. The difference is enormous.",
  },
  {
    name: "Deepak Nair",
    role: "HR Director, Lumira Corp",
    tag: "Corporate",
    label: "Corporate",
    review:
      "We saw measurable improvements in team-engagement scores within twelve weeks of the retainer program.",
  },
  {
    name: "Ranga Chaitanya",
    role: "Amazing Lifestyle Workshop Participant",
    tag: "Workshop",
    review:
      "I am very happy that I joined the 7 Days Amazing Lifestyle Workshop. Waking up early was a dream for me, and after doing this course I now wake up at 5 AM without using any alarm. I have become more organized in both my personal and professional life. Thank you, Shashank. Keep up the good work!",
  },
  {
    name: "Kumari TV",
    role: "Amazing Lifestyle Workshop Participant",
    tag: "Workshop",
    review:
      "It was truly a lifestyle change in just 7 days. From the very first meditation session I felt positive energy. The habit tracker and journaling helped me stay focused on my goals. Shashank is a wonderful life coach and his soothing voice made every meditation session peaceful.",
  },
  {
    name: "Upasana Dhingra",
    role: "Amazing Lifestyle Workshop Participant",
    tag: "Workshop",
    review:
      "The workshop helped me clear my mind from unnecessary thoughts that I couldn't share with anyone. I developed the habit of waking up early, which gave me enough time to work on my personal goals every day.",
  },
  {
    name: "Anushree Suman",
    role: "Amazing Lifestyle Workshop Participant",
    tag: "Workshop",
    review:
      "It was one of the best workshops I have attended. I highly recommend it to people dealing with stress and anxiety. These sessions bring peace, relaxation, self-love, and confidence.",
  },
  {
    name: "Neha Dixit",
    role: "Amazing Lifestyle Workshop Participant",
    tag: "Workshop",
    review:
      "It was a wonderful experience. My favorite sessions were Self Love and Physical Health. Waking up early, journaling, reducing screen time, and the Walk to Remember activity were all amazing. Thank you Shashank Sir.",
  },
  {
    name: "Pooja Sabnani",
    role: "Amazing Lifestyle Workshop Participant",
    tag: "Workshop",
    review:
      "Earlier, the day controlled me, but now I consciously manage my time and habits. I feel calmer, sleep better, and have become more productive using the Pomodoro Technique. Morning meditation is now my favorite part of the day.",
  },
  {
    name: "Phuldeep Kaur Nanda",
    role: "Participant • Canada",
    tag: "Workshop",
    review:
      "The workshop was a breath of fresh air for me. I reduced my screen time by almost 89% in the first week, connected deeply with myself, learned self-forgiveness, and enjoyed peaceful sleep through meditation. Sending lots of love and gratitude from Canada.",
  },
  {
    name: "Roshita Nair",
    role: "Amazing Lifestyle Workshop Participant",
    tag: "Workshop",
    review:
      "If you want to transform your life, you should definitely join these workshops. They helped me prioritize my goals, develop self-empathy, and almost double my productivity.",
  },
];

const filters = ["All", "Workshop", "Coaching", "Retreat", "Corporate", "Breathwork"];

const initials = (name) =>
  name
    .split(" ")
    .slice(0, 2)
    .map((part) => part[0])
    .join("");

function Testimonials() {
  const [filter, setFilter] = useState("All");
  const shown = filter === "All" ? testimonials : testimonials.filter((t) => t.tag === filter);

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <SectionHead eyebrow="Testimonials" title="Stories of" highlight="Transformation">
          Real experiences from workshop participants, coaching clients,
          retreat guests and corporate teams.
        </SectionHead>

        <div className="testimonial-filters" role="tablist" aria-label="Filter testimonials">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              role="tab"
              aria-selected={filter === f}
              className={filter === f ? "active" : ""}
              onClick={() => setFilter(f)}
            >
              {filter === f && (
                <motion.span
                  layoutId="testimonial-filter"
                  className="filter-pill"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              <span className="filter-label">{f}</span>
            </button>
          ))}
        </div>

        {/* keyed by filter so the stagger animation replays on every switch */}
        <Stagger className="testimonial-grid" stagger={0.06} key={filter}>
          {shown.map((item) => (
            <StaggerItem className="testimonial-card" key={item.name}>
              <div className="testimonial-top">
                <div className="stars" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }, (_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <span className="testimonial-tag">{item.label || item.tag}</span>
              </div>

              <FaQuoteLeft className="quote" />
              <p className="review">{item.review}</p>

              <div className="client">
                <span className="avatar">{initials(item.name)}</span>
                <div>
                  <h4>{item.name}</h4>
                  <span>{item.role}</span>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

export default Testimonials;
