import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
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
    answer:
      "Anyone aged 15 years and above can join the workshop.",
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
      <div className="container">
        <div className="faq-header">
          <span className="section-tag">FAQs</span>

          <h2 className="section-title">
            Frequently Asked <span>Questions</span>
          </h2>

          <p className="section-description">
            Find answers to the most common questions about our meditation and
            lifestyle workshops.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((item, index) => (
            <div
              className={`faq-item ${active === index ? "active" : ""}`}
              key={index}
            >
              <button
                className="faq-question"
                onClick={() => toggle(index)}
              >
                <span>{item.question}</span>
                {active === index ? <FaMinus /> : <FaPlus />}
              </button>

              {active === index && (
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;