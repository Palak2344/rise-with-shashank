import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FaAmazon, FaHeadphones, FaCheck } from "react-icons/fa";

import SectionHead from "../ui/SectionHead";
import { Reveal, Stagger, StaggerItem } from "../ui/Motion";
import "./Book.css";

const benefits = [
  "Build Powerful Daily Habits",
  "Practical Daily Exercises",
  "Mindset Shifts That Stick",
  "Breathwork & Meditation Techniques",
  "Lasting Inner Growth",
];

function Book() {
  // 3D tilt that follows the cursor
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-18, 18]), { stiffness: 150, damping: 18 });
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [12, -12]), { stiffness: 150, damping: 18 });

  const onMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <section className="books section-alt" id="books">
      <div className="container">
        <SectionHead eyebrow="Best Selling Book" title="Read or Listen to the Book That Can" highlight="Transform Your Life">
          Discover practical techniques to build better habits, improve your
          mindset, reduce stress, and create an extraordinary lifestyle through
          the book or audiobook.
        </SectionHead>

        <div className="book-card">
          <Reveal direction="right" className="book-stage" onMouseMove={onMove} onMouseLeave={onLeave}>
            <span className="book-halo" aria-hidden="true" />
            <motion.div className="book-3d" style={{ rotateX, rotateY }}>
              <img src="/images/book.jpg" alt="21 Days of Awesomeness book cover" loading="lazy" />
              <span className="book-shine" aria-hidden="true" />
            </motion.div>
          </Reveal>

          <div className="book-content">
            <Reveal>
              <span className="book-tag">★ Published Author</span>
              <h3>21 Days of Awesomeness</h3>
              <p>
                A practical 21-day guide built on breathwork, simple daily
                mindset rituals and the science of habits. Each day builds on
                the one before — small, deliberate actions that add up to real
                inner change, whether you're recovering from burnout or
                rediscovering your purpose.
              </p>
            </Reveal>

            <Stagger as="ul" className="book-list" stagger={0.08}>
              {benefits.map((b) => (
                <StaggerItem as="li" key={b}>
                  <span className="check">
                    <FaCheck />
                  </span>
                  {b}
                </StaggerItem>
              ))}
            </Stagger>

            <Reveal className="book-buttons">
              <a
                href="https://www.amazon.in/Awesomeness-Shashank-Lalwani-Sreejata-Mukherjee/dp/9361853392"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <FaAmazon />
                Buy on Amazon
              </a>

              <a
                href="https://www.amazon.in/30-Days-Mental-Well-being-Shashank/dp/B09YDPH1TL/ref=sr_1_1?crid=39TPUC0C9MMBR&dib=eyJ2IjoiMSJ9.B9rkrH9pCiq0KdS7Go4Thw8eS1lzjwWsxpGjlbA3yqU._pLdfvwyanW72agd4e6jCtyT77VU_OTmO93icjCEGuA&dib_tag=se&keywords=shashank+lalwani&qid=1784010311&sprefix=shashank+lalwani%2Caps%2C250&sr=8-1"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
              >
                <FaHeadphones />
                Listen on Audible
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Book;
