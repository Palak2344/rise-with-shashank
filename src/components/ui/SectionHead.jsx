import { Reveal } from "./Motion";

/* Consistent eyebrow + title + description block for every section */
export default function SectionHead({ eyebrow, title, highlight, children, align = "center" }) {
  return (
    <Reveal className={`section-head ${align === "left" ? "left" : ""}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}

      <h2>
        {title}
        {highlight && (
          <>
            {" "}
            <span className="accent-text">{highlight}</span>
          </>
        )}
      </h2>

      {children && <p>{children}</p>}
    </Reveal>
  );
}
