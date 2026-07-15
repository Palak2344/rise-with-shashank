import "./Footer.css";
import { Link } from "react-router-dom";

import {
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLeaf,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-overlay"></div>

      <div className="container footer-container">
        {/* ===========================
            BRAND
        ============================ */}
        <div className="footer-col footer-brand">
          <Link to="/" className="footer-logo">
            <img
              src="/images/logo.png"
              alt="Rise with Shashank"
              className="footer-logo-img"
            />

            <div className="footer-logo-text">
              <span>Rise with</span>
              <h2>SHASHANK</h2>
            </div>
          </Link>

          <p className="footer-description">
            We shall make you fall in love with yourself.
            <br />
            Helping people discover mindfulness,
            confidence, inner peace and purposeful living.
          </p>

          <div className="footer-social">
            <a
              href="https://www.instagram.com/shashanklalwani/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

            <a
              href="https://wa.me/919109694003"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>

            <a
              href="https://www.youtube.com/@bkshashank"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <FaYoutube />
            </a>

            <a
              href="https://www.linkedin.com/in/shashanklalwani/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* ===========================
            QUICK LINKS
        ============================ */}

        <div className="footer-col">
          <h3>Quick Links</h3>

          <ul>
            <li>
              <Link to="/">
                <FaLeaf />
                Home
              </Link>
            </li>

            <li>
              <Link to="/about">
                <FaLeaf />
                About
              </Link>
            </li>

            <li>
              <Link to="/programs">
                <FaLeaf />
                Programs
              </Link>
            </li>

            <li>
              <Link to="/workshops">
                <FaLeaf />
                Workshops
              </Link>
            </li>

            <li>
              <Link to="/gallery">
                <FaLeaf />
                Gallery
              </Link>
            </li>

            <li>
              <Link to="/blog">
                <FaLeaf />
                Blog
              </Link>
            </li>

            <li>
              <Link to="/testimonials">
                <FaLeaf />
                Testimonials
              </Link>
            </li>

            <li>
              <Link to="/contact">
                <FaLeaf />
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* ===========================
            PROGRAMS
        ============================ */}

        <div className="footer-col">
          <h3>Programs</h3>

          <ul>
            <li>
              <Link to="/programs">
                <FaLeaf />
                Meditation
              </Link>
            </li>

            <li>
              <Link to="/programs">
                <FaLeaf />
                Mindfulness
              </Link>
            </li>

            <li>
              <Link to="/programs">
                <FaLeaf />
                Emotional Healing
              </Link>
            </li>

            <li>
              <Link to="/programs">
                <FaLeaf />
                Life Transformation
              </Link>
            </li>

            <li>
              <Link to="/programs">
                <FaLeaf />
                Relationship Coaching
              </Link>
            </li>

            <li>
              <Link to="/programs">
                <FaLeaf />
                Wellness Workshops
              </Link>
            </li>
          </ul>
        </div>

        {/* ===========================
            CONTACT
        ============================ */}

        <div className="footer-col">
          <h3>Contact</h3>

          <div className="footer-contact">

            <div className="contact-item">
              <div className="icon-box">
                <FaPhoneAlt />
              </div>

              <a href="tel:+919109694003">
                +91 9109694003
              </a>
            </div>

            <div className="contact-item">
              <div className="icon-box">
                <FaEnvelope />
              </div>

              <a href="mailto:shashank.lalwani@gmail.com">
                shashank.lalwani@gmail.com
              </a>
            </div>

            <div className="contact-item">
              <div className="icon-box">
                <FaMapMarkerAlt />
              </div>

              <a
                href="https://maps.google.com/?q=India"
                target="_blank"
                rel="noopener noreferrer"
              >
                India
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* ===========================
            BOTTOM
      ============================ */}

      <div className="footer-divider">
        <span>✦</span>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Rise with Shashank.
          All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;