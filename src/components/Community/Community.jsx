import "./Community.css";
import {
  FaWhatsapp,
  FaYoutube,
  FaInstagram,
  FaFacebook,
  FaTelegramPlane,
} from "react-icons/fa";

function Community() {
  return (
    <section className="community" id="community">

      <div className="container">

        <span className="section-tag">
          Join Our Community
        </span>

        <h2 className="section-title">
          Grow Together With
          <span> Like-Minded People</span>
        </h2>

        <p className="section-description">
          Become part of our growing community dedicated to mindfulness,
          meditation, emotional healing, and personal transformation.
        </p>

        <div className="community-grid">

          <a
            href="https://chat.whatsapp.com/DOgiwK9jZfHIYeBzT7ZwXC"
            target="_blank"
            rel="noreferrer"
            className="community-card"
          >
            <FaWhatsapp />
            <h3>WhatsApp Community</h3>
            <p>Daily motivation, meditation reminders and support.</p>
          </a>

          <a
            href="#"
            className="community-card"
          >
            <FaTelegramPlane />
            <h3>Telegram</h3>
            <p>Exclusive resources and guided meditation sessions.</p>
          </a>

          <a
            href="#"
            className="community-card"
          >
            <FaYoutube />
            <h3>YouTube</h3>
            <p>Watch meditation videos and transformational talks.</p>
          </a>

          <a
            href="#"
            className="community-card"
          >
            <FaInstagram />
            <h3>Instagram</h3>
            <p>Daily inspiration and behind-the-scenes moments.</p>
          </a>

          <a
            href="#"
            className="community-card"
          >
            <FaFacebook />
            <h3>Facebook</h3>
            <p>Connect with members and join live events.</p>
          </a>

        </div>

      </div>

    </section>
  );
}

export default Community;