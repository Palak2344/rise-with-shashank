import "./Contact.css";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">

        <div className="contact-header">
          <span className="section-tag">Contact Us</span>

          <h2 className="section-title">
            Let's Begin Your
            <span> Transformation Journey</span>
          </h2>

          <p className="section-description">
            We'd love to hear from you. Reach out for workshops, coaching,
            meditation sessions, or any questions.
          </p>
        </div>

        <div className="contact-wrapper">

          {/* Left Side */}

          <div className="contact-info">

            <div className="info-card">
              <FaPhoneAlt />
              <div>
                <h4>Phone</h4>
                <p>+91 9109694003</p>
              </div>
            </div>

            <div className="info-card">
              <FaEnvelope />
              <div>
                <h4>Email</h4>
                <p>shashank.lalwani@gmail.com</p>
              </div>
            </div>

            <div className="info-card">
              <FaMapMarkerAlt />
              <div>
                <h4>Location</h4>
                <p>India</p>
              </div>
            </div>

            <div className="info-card">
              <FaClock />
              <div>
                <h4>Available</h4>
                <p>Mon – Sun | 8:00 AM – 8:00 PM</p>
              </div>
            </div>

            <div className="social-icons">

              <a
                href="https://www.instagram.com/shashanklalwani/"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram />
              </a>

              <a
                href="https://wa.me/919109694003"
                target="_blank"
                rel="noreferrer"
              >
                <FaWhatsapp />
              </a>

            </div>

          </div>

          {/* Right Side */}

          <form className="contact-form">

            <input
              type="text"
              placeholder="Full Name"
            />

            <input
              type="email"
              placeholder="Email Address"
            />

            <input
              type="tel"
              placeholder="Phone Number"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
            ></textarea>

            <button type="submit">
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;