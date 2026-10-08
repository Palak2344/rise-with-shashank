import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaPlus } from "react-icons/fa";

import SectionHead from "../ui/SectionHead";
import { Stagger, StaggerItem } from "../ui/Motion";
import "./FAQ.css";

const faqs = [
  {
    question: "Is this workshop suitable for beginners?",
    answer:
      "Yes. The workshop is designed for everyone, whether you are new to meditation or already practicing.",
  },
  {
    question: "What time are the sessions?",
    answer:
      "The live meditation sessions are conducted every morning from 5:30 AM to 6:00 AM IST.",
  },
  {
    question: "Will I get recordings?",
    answer:
      "Yes. All participants receive access to the recordings if they miss a live session.",
  },
  {
    question: "How do I join the workshop?",
    answer:
      "After registration, you'll receive the WhatsApp community link and complete joining instructions.",
  },
  {
    question: "Is there any age limit?",
    answer: "Anyone aged 15 years and above can join the workshop.",
  },
  {
    question: "Do you offer 1:1 coaching?",
    answer:
      "Yes. Private coaching follows a four-phase journey — Discover, Reset, Embody and Sustain — tailored to your schedule and goals.",
  },
  {
    question: "How many people join the Weekend Retreat?",
    answer:
      "Each retreat is limited to 12 participants so everyone receives real depth and personal attention.",
  },
  {
    question: "Can you run wellness programs for my company?",
    answer:
      "Yes. Options range from half-day burnout recovery workshops (online or offline) to team retreats, executive 1:1 coaching and monthly wellness retainers.",
  },
  {
    question: "What do I need for the sessions?",
    answer:
      "Just a quiet place, a comfortable seat, a notebook, and an open mind.",
  },
];

function FAQ() {
  const [active, setActive] = useState(0);

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="faq" id="faq">
      <div className="container faq-layout">
        <SectionHead align="left" eyebrow="FAQs" title="Frequently Asked" highlight="Questions">
          Find answers to the most common questions about our meditation and
          lifestyle workshops.
        </SectionHead>

        <Stagger className="faq-list" stagger={0.07}>
          {faqs.map((item, index) => {
            const open = active === index;
            return (
              <StaggerItem className={`faq-item ${open ? "active" : ""}`} key={item.question}>
                <button
                  type="button"
                  className="faq-question"
                  onClick={() => toggle(index)}
                  aria-expanded={open}
                >
                  <span className="faq-num">0{index + 1}</span>
                  <span className="faq-text">{item.question}</span>
                  <motion.span
                    className="faq-icon"
                    animate={{ rotate: open ? 45 : 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <FaPlus />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      className="faq-answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <p>{item.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}

export default FAQ;
