import React from "react";
import "./App.css";
import TheNavbar from "./components/TheNavbar";
import Footer from "./components/Footer";
import HomeMenu from "./components/HomeMenu"
import TopicMenu from "./components/TopicMenu"
import UsersMenu from "./components/UsersMenu"
import AllReviewsMenu from "./components/AllReviewsMenu"

function App() {
  return (
    <div style={{ minHeight: "100%", position: "absolute", width: "100%", margin: 0}}>
      <TheNavbar />

      <AllReviewsMenu />

      <Footer />
    </div>
  );
}

export default App;
