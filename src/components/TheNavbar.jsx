import React from "react";
import "../stylesheets/TheNavbar.css";
import { Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "@reach/router";

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
      <Link to={`/`}>
        <img
          alt="book emoji"
          src="https://images.emojiterra.com/google/android-pie/512px/1f4d6.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
          style={{ marginRight: "5px" }}
        />{" "}
      </Link>
      <Link to={`/`}>
        <Navbar.Brand style={{ padding: "0", fontSize: "1.1em" }}>
          BookReviews.io
        </Navbar.Brand>
      </Link>
    </Navbar>
  );
}

export default TheNavbar;
