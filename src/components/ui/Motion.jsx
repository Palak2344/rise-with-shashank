import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

const offsets = {
  up: { y: 40 },
  down: { y: -40 },
  left: { x: 50 },
  right: { x: -50 },
  none: {},
};

/* Fades + slides children in once they scroll into view */
export function Reveal({
  children,
  as = "div",
  direction = "up",
  delay = 0,
  duration = 0.9,
  className,
  ...rest
}) {
  const Tag = motion[as];

  return (
    <Tag
      className={className}
      initial={{ opacity: 0, ...offsets[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration, delay, ease }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/* Parent that staggers its <StaggerItem> children */
export function Stagger({ children, as = "div", className, stagger = 0.1, ...rest }) {
  const Tag = motion[as];

  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: stagger } } }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export function StaggerItem({ children, as = "div", className, ...rest }) {
  const Tag = motion[as];

  return (
    <Tag
      className={className}
      variants={{
        hidden: { opacity: 0, y: 36, scale: 0.97 },
        show: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { duration: 0.8, ease },
        },
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
