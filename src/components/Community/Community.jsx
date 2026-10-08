import { FaWhatsapp, FaYoutube, FaInstagram, FaFacebook, FaLinkedin, FaArrowRight } from "react-icons/fa";

import SectionHead from "../ui/SectionHead";
import { Stagger, StaggerItem } from "../ui/Motion";
import "./Community.css";

const channels = [
  {
    name: "WhatsApp Community",
    icon: <FaWhatsapp />,
    href: "https://chat.whatsapp.com/DOgiwK9jZfHIYeBzT7ZwXC",
    color: "#25D366",
    text: "Daily motivation, meditation reminders and support.",
  },
  {
    name: "YouTube",
    icon: <FaYoutube />,
    href: "https://www.youtube.com/@bkshashank",
    color: "#FF0000",
    text: "Watch meditation videos and transformational talks.",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin />,
    href: "https://www.linkedin.com/in/shashanklalwani/",
    color: "#0A66C2",
    text: "Professional insights, mindfulness articles, career guidance, and personal growth content.",
  },
  {
    name: "Instagram",
    icon: <FaInstagram />,
    href: "https://www.instagram.com/shashanklalwani/",
    color: "#E1306C",
    text: "Daily inspiration and behind-the-scenes moments.",
  },
  {
    name: "Facebook",
    icon: <FaFacebook />,
    href: "https://www.facebook.com/bkshashank",
    color: "#1877F2",
    text: "Connect with members and join live events.",
  },
];

function Community() {
  return (
    <section className="community section-alt" id="community">
      <div className="container">
        <SectionHead eyebrow="Join Our Community" title="Grow Together With" highlight="Like-Minded People">
          Become part of our growing community dedicated to mindfulness,
          meditation, emotional healing, and personal transformation.
        </SectionHead>

        <Stagger className="community-grid">
          {channels.map((c) => (
            <StaggerItem key={c.name}>
              <a
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="community-card"
                style={{ "--brand": c.color }}
              >
                <span className="community-icon">{c.icon}</span>
                <h3>{c.name}</h3>
                <p>{c.text}</p>
                <span className="community-go">
                  Join <FaArrowRight />
                </span>
              </a>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

export default Community;
