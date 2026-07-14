import "./Community.css";
import {
  FaWhatsapp,
  FaYoutube,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
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
            href="https://www.youtube.com/@bkshashank"
            className="community-card"
          >
            <FaYoutube />
            <h3>YouTube</h3>
            <p>Watch meditation videos and transformational talks.</p>
          </a>
          <a
           href="https://www.linkedin.com/in/shashanklalwani/"
             target="_blank"
             rel="noopener noreferrer"
             className="community-card"
>
  <FaLinkedin />
  <h3>LinkedIn</h3>
  <p>
    Connect with Shashank Lalwani for professional insights,
    mindfulness articles, career guidance, and personal growth content.
  </p>
</a>

          <a
            href="https://www.instagram.com/shashanklalwani/"
            className="community-card"
          >
            <FaInstagram />
            <h3>Instagram</h3>
            <p>Daily inspiration and behind-the-scenes moments.</p>
          </a>

          <a
            href="https://www.facebook.com/bkshashank"
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