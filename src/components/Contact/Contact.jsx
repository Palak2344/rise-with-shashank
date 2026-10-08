import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaInstagram,
  FaWhatsapp,
  FaPaperPlane,
  FaCheckCircle,
  FaChevronDown,
} from "react-icons/fa";

import SectionHead from "../ui/SectionHead";
import { Reveal, Stagger, StaggerItem } from "../ui/Motion";
import "./Contact.css";

const EMAIL = "care@healwithshashank.com";

const info = [
  { icon: <FaEnvelope />, title: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
  { icon: <FaPhoneAlt />, title: "Phone / WhatsApp", value: "+91 91096 94003", href: "tel:+919109694003" },
  { icon: <FaMapMarkerAlt />, title: "Based in", value: "Pune, India · Working globally" },
  { icon: <FaClock />, title: "Response time", value: "Within 24 hours" },
];

const interests = [
  "1:1 Coaching",
  "5 Days Morning Workshop",
  "Weekend Retreat",
  "Corporate Wellness",
  "Breathwork Workshop",
  "Book Enquiry",
  "Other",
];

function Contact() {
  const [sent, setSent] = useState(false);
  const [searchParams] = useSearchParams();
  const requested = searchParams.get("interest");
  const defaultInterest = interests.includes(requested) ? requested : interests[0];

  // No backend yet: hand the message to the visitor's email app, pre-filled
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = `${data.get("interest")} enquiry from ${data.get("name")}`;
    const body = [
      data.get("message"),
      "",
      `Name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      `Phone: ${data.get("phone") || "-"}`,
      `Organization: ${data.get("organization") || "-"}`,
      `Interested in: ${data.get("interest")}`,
    ].join("\n");

    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
    e.currentTarget.reset();
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <SectionHead eyebrow="Get in Touch" title="Tell Us What" highlight="You're Looking For">
          Whether it's 1:1 coaching, a retreat or bringing this work to your
          team — every journey begins with one honest conversation.
        </SectionHead>

        <div className="contact-wrapper">
          <div className="contact-info">
            <Stagger className="info-list">
              {info.map((item) => {
                const Tag = item.href ? "a" : "div";
                return (
                  <StaggerItem key={item.title}>
                    <Tag className="info-card" href={item.href}>
                      <span className="icon-bubble">{item.icon}</span>
                      <div>
                        <h4>{item.title}</h4>
                        <p>{item.value}</p>
                      </div>
                    </Tag>
                  </StaggerItem>
                );
              })}
            </Stagger>

            <Reveal className="social-row">
              <span>Follow the journey</span>
              <div className="social-icons">
                <a
                  href="https://www.instagram.com/shashanklalwani/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
                <a href="https://wa.me/919109694003" target="_blank" rel="noreferrer" aria-label="WhatsApp">
                  <FaWhatsapp />
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal direction="left" as="form" className="contact-form" onSubmit={handleSubmit}>
            <h3>Begin your journey</h3>

            <div className="form-row">
              <label className="field">
                <input name="name" type="text" placeholder=" " required autoComplete="name" />
                <span>Full Name</span>
              </label>
              <label className="field">
                <input name="phone" type="tel" placeholder=" " autoComplete="tel" />
                <span>Phone</span>
              </label>
            </div>

            <div className="form-row">
              <label className="field">
                <input name="email" type="email" placeholder=" " required autoComplete="email" />
                <span>Email Address</span>
              </label>
              <label className="field">
                <input name="organization" type="text" placeholder=" " autoComplete="organization" />
                <span>Organization (optional)</span>
              </label>
            </div>

            <label className="field field-select">
              <select name="interest" defaultValue={defaultInterest} key={defaultInterest}>
                {interests.map((i) => (
                  <option key={i} value={i}>
                    {i}
                  </option>
                ))}
              </select>
              <span>I'm interested in</span>
              <FaChevronDown className="select-arrow" />
            </label>

            <label className="field">
              <textarea name="message" rows="5" placeholder=" " required />
              <span>Your Message</span>
            </label>

            <button type="submit" className="btn btn-primary">
              Let's Begin Your Journey <FaPaperPlane />
            </button>

            <AnimatePresence>
              {sent && (
                <motion.p
                  className="form-note"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  <FaCheckCircle /> Your email app should open with the message ready to send.
                </motion.p>
              )}
            </AnimatePresence>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default Contact;
