import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <h1 className="titleFonts">KW</h1>
      <div className="paragraphFonts">
        <ul>
          {/* Home */}
          <li>
            <Link to="/karlys_website">Home</Link>
          </li>
          {/* Portfolio */}
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          {/* Resume */}
          <li>
            <Link to="/resume">Resume</Link>
          </li>
          {/* Contact */}
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
