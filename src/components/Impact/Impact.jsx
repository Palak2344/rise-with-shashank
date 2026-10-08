import { FaUserFriends, FaChalkboardTeacher, FaMountain, FaBuilding, FaBook, FaInstagram } from "react-icons/fa";

import SectionHead from "../ui/SectionHead";
import Counter from "../ui/Counter";
import { Stagger, StaggerItem } from "../ui/Motion";
import "./Impact.css";

const stats = [
  { icon: <FaUserFriends />, to: 200, suffix: "+", label: "Individuals coached", note: "Since 2016" },
  { icon: <FaChalkboardTeacher />, to: 500, suffix: "+", label: "Workshop participants", note: "Across India & UAE" },
  { icon: <FaMountain />, to: 50, suffix: "+", label: "Retreats conducted", note: "In 8 locations" },
  { icon: <FaBuilding />, to: 100, suffix: "+", label: "Corporate sessions", note: "With 30+ companies" },
  { icon: <FaBook />, to: 1, suffix: "", label: "Published book", note: "Available on Amazon" },
  {
    icon: <FaInstagram />,
    to: 10,
    suffix: "K+",
    label: "Instagram community",
    note: "@shashanklalwani",
    href: "https://www.instagram.com/shashanklalwani/",
  },
];

function Impact() {
  return (
    <section className="impact" id="impact">
      <div className="container">
        <SectionHead eyebrow="Impact" title="Nervous Systems Reset" highlight="Since 2016">
          A growing community of people who chose a calmer, stronger and more
          intentional way to live.
        </SectionHead>

        <Stagger className="impact-grid" stagger={0.08}>
          {stats.map((s) => {
            const Tag = s.href ? "a" : "div";
            return (
              <StaggerItem key={s.label}>
                <Tag
                  className="impact-card"
                  {...(s.href ? { href: s.href, target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  <span className="impact-icon">{s.icon}</span>
                  <strong>
                    <Counter to={s.to} suffix={s.suffix} />
                  </strong>
                  <h4>{s.label}</h4>
                  <span className="impact-note">{s.note}</span>
                </Tag>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}

export default Impact;
