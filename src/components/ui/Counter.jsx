import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";

/* Counts up from 0 to `to` the first time it scrolls into view */
export default function Counter({ to, suffix = "", duration = 2 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduceMotion = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView || reduceMotion) return;

    const controls = animate(0, to, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setValue(Math.round(v)),
    });

    return () => controls.stop();
  }, [inView, to, duration, reduceMotion]);

  return (
    <span ref={ref}>
      {(reduceMotion ? to : value).toLocaleString("en-IN")}
      {suffix}
    </span>
  );
}
