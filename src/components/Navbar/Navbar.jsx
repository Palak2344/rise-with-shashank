import { useState } from "react";
import "./Navbar.css";
import { FaUsers, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };
  return (
    <>
      <header className="navbar">
        <div className="container nav-container">
          {/* Logo */}
          <Link to="/" className="logo">
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
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/programs">Programs</Link>
              </li>
              <li>
                <Link to="/workshops">Workshops</Link>
              </li>
              <li>
                <Link to="/gallery">Gallery</Link>
              </li>
              <li>
                <Link to="/testimonials">Testimonials</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
          {/* Right Side */}
          <div className="nav-right">
            <button className="join-btn">
              Join Community 
              <FaUsers />
            </button>
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
        onClick={closeMenu}
      >
      </div>
      {/* Mobile Sidebar */}
      <aside 
        className={`sidebar ${menuOpen ? "active" : ""}`}
      >
        <div className="sidebar-top">
          <h2>Menu</h2>
          <button onClick={closeMenu}>
            <FaTimes />
          </button>
        </div>
        <ul>
          <li>
            <Link 
              to="/" 
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              onClick={closeMenu}
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              to="/programs" 
              onClick={closeMenu}
            >
              Programs
            </Link>
          </li>
          <li>
            <Link 
              to="/workshops" 
              onClick={closeMenu}
            >
              Workshops
            </Link>
          </li>
          <li>
            <Link 
              to="/gallery" 
              onClick={closeMenu}
            >
              Gallery
            </Link>
          </li>
         <li>
            <Link 
              to="/testimonials" 
              onClick={closeMenu}
            >
              Testimonials
            </Link>
          </li>

          <li>
            <Link 
              to="/contact" 
              onClick={closeMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
        <button className="sidebar-btn">
          Join Community
        </button>
      </aside>
    </>

  );

}


export default Navbar;