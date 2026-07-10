import "./Footer.css";

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
          <div className="footer-logo">
            <img src="/images/logo.png" alt="Rise with Shashank" />

            <div>
              <h3>Rise with</h3>
              <h2>SHASHANK</h2>
            </div>
          </div>

          <p>
            We shall make you fall in love with yourself. Helping people
            discover mindfulness, confidence, inner peace, and purposeful
            living.
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
              <a href="#home">Home</a>
            </li>

            <li>
              <a href="#journey">Journey</a>
            </li>

            <li>
              <a href="#programs">Programs</a>
            </li>

            <li>
              <a href="#workshop">Workshop</a>
            </li>

            <li>
              <a href="#testimonials">Testimonials</a>
            </li>

            <li>
              <a href="#gallery">Gallery</a>
            </li>

            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        {/* Programs */}

        <div className="footer-col">
          <h3>Programs</h3>

          <ul>
            <li>Meditation</li>
            <li>Mindfulness</li>
            <li>Emotional Healing</li>
            <li>Life Transformation</li>
            <li>Relationship Coaching</li>
            <li>Wellness Workshops</li>
          </ul>
        </div>

        {/* Contact */}

        <div className="footer-col">
          <h3>Contact</h3>

          <p>
            <FaPhoneAlt /> <span>+91 9109694003</span>
          </p>

          <p>
            <FaEnvelope /> <span>shashank.lalwani@gmail.com</span>
          </p>

          <p>
            <FaMapMarkerAlt /> <span>India</span>
          </p>
        </div>
      </div>

      {/* Bottom Footer */}

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Rise with Shashank. All Rights Reserved.
        </p>

        <p>
          Designed & Developed by <strong>Palak Choudhary ❤️</strong>
        </p>
      </div>
    </footer>
  );
}

export default Footer;