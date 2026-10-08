import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { FaArrowRight, FaTimes } from "react-icons/fa";

import Logo from "../ui/Logo";
import ThemeToggle from "../ui/ThemeToggle";
import "./Navbar.css";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/programs", label: "Programs" },
  { to: "/workshops", label: "Workshops" },
  { to: "/retreat", label: "Retreat" },
  { to: "/corporate", label: "Corporate" },
  { to: "/blog", label: "Blog" },
  { to: "/gallery", label: "Gallery" },
  { to: "/testimonials", label: "Stories" },
  { to: "/contact", label: "Contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock page scroll + allow Esc to close while the drawer is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  return (
    <>
      <motion.header
        className={`navbar ${scrolled ? "scrolled" : ""}`}
        initial={{ y: -90, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="container nav-container">
          <Link to="/" className="nav-logo" aria-label="Rise with Shashank — home">
            <Logo />
          </Link>

          <nav className="desktop-nav" aria-label="Main">
            <ul>
              {links.map((link) => (
                <li key={link.to}>
                  <NavLink to={link.to} end={link.to === "/"}>
                    {({ isActive }) => (
                      <>
                        {link.label}
                        {isActive && (
                          <motion.span
                            layoutId="nav-pill"
                            className="nav-pill"
                            transition={{ type: "spring", stiffness: 380, damping: 32 }}
                          />
                        )}
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="nav-right">
            <ThemeToggle />

            <Link to="/programs" className="btn btn-primary nav-cta">
              Join Workshop
            </Link>

            <button
              type="button"
              className={`menu-btn ${menuOpen ? "open" : ""}`}
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Open menu"
              aria-expanded={menuOpen}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="nav-overlay"
              onClick={() => setMenuOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.aside
              className="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 32 }}
              aria-label="Mobile menu"
            >
              <div className="drawer-top">
                <Logo size={42} />
                <button
                  type="button"
                  className="drawer-close"
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <FaTimes />
                </button>
              </div>

              <motion.ul
                initial="hidden"
                animate="show"
                variants={{ show: { transition: { staggerChildren: 0.05, delayChildren: 0.15 } } }}
              >
                {links.map((link, i) => (
                  <motion.li
                    key={link.to}
                    variants={{
                      hidden: { opacity: 0, x: 30 },
                      show: { opacity: 1, x: 0 },
                    }}
                  >
                    <NavLink to={link.to} end={link.to === "/"} onClick={closeMenu}>
                      <span className="drawer-index">0{i + 1}</span>
                      {link.label}
                    </NavLink>
                  </motion.li>
                ))}
              </motion.ul>

              <div className="drawer-bottom">
                <div className="drawer-theme">
                  <span>Appearance</span>
                  <ThemeToggle />
                </div>

                <Link to="/programs" className="btn btn-primary" onClick={closeMenu}>
                  Join Workshop <FaArrowRight />
                </Link>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
