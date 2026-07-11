import "./Footer.css";
import { Link } from "react-router-dom";

import {
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        {/* Company */}
        <div className="footer-col">
          <Link to="/" className="footer-logo">
            <img
              src="/images/logo.png"
              alt="Rise with Shashank"
            />
            <div>
              <h3>Rise with</h3>
              <h2>SHASHANK</h2>
            </div>
          </Link>
          <p>
            We shall make you fall in love with yourself.
            Helping people discover mindfulness,
            confidence, inner peace and purposeful living.

          </p>
          <div className="footer-social">
            <a
              href="https://www.instagram.com/shashanklalwani/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://wa.me/919109694003"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
        {/* Quick Links */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link to="/">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about">
                About
              </Link>
            </li>
            <li>
              <Link to="/programs">
                Programs
              </Link>
            </li>
            <li>
              <Link to="/workshops">
                Workshops
              </Link>
            </li>
            <li>
              <Link to="/gallery">
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/blog">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/testimonials">
                Testimonials
              </Link>
            </li>
            <li>
              <Link to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        {/* Programs */}
        <div className="footer-col">
          <h3>Programs</h3>
          <ul>
            <li>
              <Link to="/programs">
                Meditation
              </Link>
            </li>
            <li>
              <Link to="/programs">
                Mindfulness
              </Link>
            </li>
            <li>
              <Link to="/programs">
                Emotional Healing
              </Link>
            </li>
            <li>
              <Link to="/programs">
                Life Transformation
              </Link>
            </li>
            <li>
              <Link to="/programs">
                Relationship Coaching
              </Link>
            </li>
            <li>
              <Link to="/programs">
                Wellness Workshops
              </Link>
            </li>
          </ul>
        </div>
        {/* Contact */}
        <div className="footer-col">
          <h3>
            Contact
          </h3>
          <p>
            <FaPhoneAlt />
            <a href="tel:+919109694003">
              +91 9109694003
            </a>
          </p>
          <p>
            <FaEnvelope />
            <a href="mailto:shashank.lalwani@gmail.com">
              shashank.lalwani@gmail.com
            </a>
          </p>
          <p>
            <FaMapMarkerAlt />
            <a
              href="https://maps.google.com/?q=India"
              target="_blank"
              rel="noopener noreferrer"
            >
              India
            </a>
          </p>
        </div>
      </div>
      {/* Bottom Footer */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Rise with Shashank.
          All Rights Reserved.
        </p>
        <p>
          Designed & Developed by
          <strong>
            {" "}Palak Choudhary ❤️
          </strong>
        </p>
      </div>
    </footer>
  );
}
export default Footer;