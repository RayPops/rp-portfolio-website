/**
 * Header component
 *
 * Top navigation bar for your site. Set to remain visible as the
 * user scrolls so that they can constantly reach any part of your page.
 */
import React from "react";

const Header = () => {
  return (
    <div
      style={{
        position: "fixed",
        display: "flex",
        justifyContent: "center",
        gap: "2rem",
        background: "rgba(255,255,255,0.75)",
        padding: "1rem",
        top: 0,
        width: "100vw",
        zIndex: 10,
      }}
    >
      <a href="#home" className="hover-underline-animation">
        Home
      </a>
      <a href="#about" className="hover-underline-animation">
        About
      </a>
      <a href="#portfolio" className="hover-underline-animation">
        Portfolio
      </a>
      <a href="#education" className="hover-underline-animation">
        Education
      </a>
      <a href="#experience" className="hover-underline-animation">
        Experience
      </a>
    </div>
  );
};

export default Header;
