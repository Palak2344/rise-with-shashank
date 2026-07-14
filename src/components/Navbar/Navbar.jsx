import { useState } from "react";
import "./Navbar.css";
import { FaUsers, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);

    // Wait for sidebar to close, then scroll to top
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }, 150);
  };

  return (
    <>
      <header className="navbar">
        <div className="container nav-container">
          {/* Logo */}
          <Link to="/" className="logo" onClick={handleLinkClick}>
            <img
              src="/images/logo.png"
              alt="Rise with Shashank"
            />
            <div>
              <h2>Rise with</h2>
              <h1>SHASHANK</h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/programs">Programs</Link></li>
              <li><Link to="/workshops">Workshops</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/testimonials">Testimonials</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            
            </ul>
          </nav>

          {/* Right Side */}
          <div className="nav-right">

            <button
              className="menu-btn"
              onClick={() => setMenuOpen(true)}
            >
              <FaBars />
            </button>
          </div>
        </div>
      </header>

      {/* Overlay */}
      <div
        className={`overlay ${menuOpen ? "show" : ""}`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile Sidebar */}
      <aside className={`sidebar ${menuOpen ? "active" : ""}`}>
        <div className="sidebar-top">
          <h2>Menu</h2>

          <button onClick={() => setMenuOpen(false)}>
            <FaTimes />
          </button>
        </div>

        <ul>
          <li>
            <Link to="/" onClick={handleLinkClick}>
              Home
            </Link>
          </li>

          <li>
            <Link to="/about" onClick={handleLinkClick}>
              About
            </Link>
          </li>

          <li>
            <Link to="/programs" onClick={handleLinkClick}>
              Programs
            </Link>
          </li>

          <li>
            <Link to="/workshops" onClick={handleLinkClick}>
              Workshops
            </Link>
          </li>

          <li>
            <Link to="/gallery" onClick={handleLinkClick}>
              Gallery
            </Link>
          </li>

          <li>
            <Link to="/blog" onClick={handleLinkClick}>
              Blog
            </Link>
          </li>


          <li>
            <Link to="/testimonials" onClick={handleLinkClick}>
              Testimonials
            </Link>
          </li>

          <li>
            <Link to="/contact" onClick={handleLinkClick}>
              Contact
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
}

export default Navbar;