import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";

import Logo from "../ui/Logo";
import { Reveal } from "../ui/Motion";
import "./Footer.css";

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/programs", label: "Programs" },
  { to: "/workshops", label: "Workshops" },
  { to: "/retreat", label: "Weekend Retreat" },
  { to: "/corporate", label: "Corporate Wellness" },
  { to: "/gallery", label: "Gallery" },
  { to: "/blog", label: "Blog" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/contact", label: "Contact" },
];

const programLinks = [
  "1:1 Coaching",
  "Breathwork",
  "Meditation",
  "Mindfulness",
  "Emotional Healing",
  "Life Transformation",
  "Relationship Coaching",
  "Wellness Workshops",
];

const socials = [
  { href: "https://www.instagram.com/shashanklalwani/", label: "Instagram", icon: <FaInstagram /> },
  { href: "https://wa.me/919109694003", label: "WhatsApp", icon: <FaWhatsapp /> },
  { href: "https://www.youtube.com/@bkshashank", label: "YouTube", icon: <FaYoutube /> },
  { href: "https://www.linkedin.com/in/shashanklalwani/", label: "LinkedIn", icon: <FaLinkedin /> },
];

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-glow" aria-hidden="true" />

      <div className="container">
        {/* CTA */}
        <Reveal className="footer-cta">
          <div>
            <span className="eyebrow">Live every morning · 5:30 AM IST</span>
            <h2>
              Ready to <em>rise</em> into your best self?
            </h2>
          </div>
          <Link to="/programs" className="btn btn-gold">
            Join the Workshop <FaArrowRight />
          </Link>
        </Reveal>

        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" aria-label="Rise with Shashank — home">
              <Logo size={54} />
            </Link>

            <p>
              We shall make you fall in love with yourself. Helping people
              discover mindfulness, confidence, inner peace and purposeful
              living.
            </p>

            <div className="footer-social">
              {socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-col">
            <h3>Quick Links</h3>
            <ul>
              {quickLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h3>Programs</h3>
            <ul>
              {programLinks.map((p) => (
                <li key={p}>
                  <Link to="/programs">{p}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h3>Contact</h3>
            <ul className="footer-contact">
              <li>
                <FaPhoneAlt />
                <a href="tel:+919109694003">+91 91096 94003</a>
              </li>
              <li>
                <FaEnvelope />
                <a href="mailto:care@healwithshashank.com">care@healwithshashank.com</a>
              </li>
              <li>
                <FaMapMarkerAlt />
                <a href="https://maps.google.com/?q=Pune,India" target="_blank" rel="noopener noreferrer">
                  Pune, India · Working globally
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Rise with Shashank. All Rights Reserved.</p>
          <p className="footer-motto">Meditate · Transform · Rise</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
