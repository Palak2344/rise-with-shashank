import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";

const ease = [0.22, 1, 0.36, 1];

/* Shared article header: back link, category, title, meta and banner */
export default function BlogHero({ image, category, title, meta }) {
  return (
    <header className="blog-head">
      <div className="blog-header">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
        >
          <Link to="/blog" className="back-link">
            <FaArrowLeft /> All articles
          </Link>
          <span className="category">{category}</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.1 }}
        >
          {title}
        </motion.h1>

        <motion.div
          className="meta"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.3 }}
        >
          {meta.map((m) => (
            <span key={m}>{m}</span>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="blog-hero"
        initial={{ opacity: 0, scale: 0.96, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.1, ease, delay: 0.25 }}
      >
        <img src={image} alt="" />
      </motion.div>
    </header>
  );
}
