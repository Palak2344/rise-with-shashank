import { useState } from "react";
import "./Navbar.css";
import { FaUsers, FaBars, FaTimes } from "react-icons/fa";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="navbar">
        <div className="container nav-container">

          <div className="logo">
            <img src="/images/logo.png" alt="Rise with Shashank" />

            <div>
              <h2>Rise with</h2>
              <h1>SHASHANK</h1>
            </div>
          </div>

          <nav className="desktop-nav">
            <ul>
              <li><a href="Pages/Home.jsx">Home</a></li>
              <li><a href="Pages/About.jsx">About</a></li>
              <li><a href="Pages/Programs.jsx">Programs</a></li>
              <li><a href="Pages/Workshops.jsx">Workshops</a></li>
              <li><a href="Pages/Gallery.jsx">Gallery</a></li>
              <li><a href="Pages/Testimonials.jsx">Testimonials</a></li>
              <li><a href="Pages/Contact.jsx">Contact</a></li>
            </ul>
          </nav>

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
        onClick={() => setMenuOpen(false)}
      ></div>

      {/* Sidebar */}

      <aside className={`sidebar ${menuOpen ? "active" : ""}`}>

        <div className="sidebar-top">

          <h2>Menu</h2>

          <button onClick={() => setMenuOpen(false)}>
            <FaTimes />
          </button>

        </div>

        <ul>

          <li><a href="Home.jsx">Home</a></li>
          <li><a href="Pages/About.jsx">About</a></li>
          <li><a href="Pages/Programs.jsx">Programs</a></li>
          <li><a href="Pages/Workshops.jsx">Workshops</a></li>
          <li><a href="Pages/Gallery.jsx">Gallery</a></li>
          <li><a href="Pages/Testimonials.jsx">Testimonials</a></li>
          <li><a href="Pages/Contact.jsx">Contact</a></li>

        </ul>

        <button className="sidebar-btn">
          Join Community
        </button>

      </aside>

    </>
  );
}

export default Navbar;