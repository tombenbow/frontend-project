import React from "react";
import "../stylesheets/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <a
        href="https://github.com/tombenbow"
        style={{
          color: "white",
          fontFamily: "'Lato', sans-serif",
          fontWeight: "bold"
        }}
      >
        https://github.com/tombenbow
      </a>
    </footer>
  );
}

export default Footer;
