import "./ui.css";

/* Crops the golden emblem out of logo.png into a round badge */
export default function Logo({ size = 48, subtitle = "Rise with", title = "SHASHANK" }) {
  return (
    <span className="brand">
      <span className="brand-mark" style={{ width: size, height: size }}>
        <img src="/images/logo.png" alt="" />
      </span>

      <span className="brand-text">
        <small>{subtitle}</small>
        <strong>{title}</strong>
      </span>
    </span>
  );
}
