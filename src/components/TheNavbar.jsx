import React from "react";
import "../stylesheets/TheNavbar.css";
import { Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function TheNavbar() {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      style={{
       
        fontWeight: "bold",
        fontFamily: "'Lato', sans-serif",
        display: "flex",
        alignItems: "flex-end",

      }}
    >
      <a href="https://www.bbc.co.uk/sport/football">
      <img
        alt="book emoji"
        src="https://images.emojiterra.com/google/android-pie/512px/1f4d6.png"
        width="30"
        height="30"
        className="d-inline-block align-top"
        style={{ marginRight: "5px" }}
      />{" "}
      </a>
      <Navbar.Brand href="https://www.bbc.co.uk/sport/football" style={{ padding: "0", fontSize: "1.1em" }}>
        BookReviews.io
      </Navbar.Brand>
    </Navbar>
  );
}

export default TheNavbar;
