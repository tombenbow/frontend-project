import React from "react";
import "./App.css";
import TheNavbar from "./components/TheNavbar";
import Footer from "./components/Footer";
import HomeMenu from "./components/HomeMenu"
import TopicMenu from "./components/TopicMenu"
import UsersMenu from "./components/UsersMenu"
import AllReviewsMenu from "./components/AllReviewsMenu"
import { Router } from "@reach/router"

function App() {
  return (
    <div style={{ minHeight: "100%", position: "absolute", width: "100%", margin: 0}}>
      <TheNavbar />

      <Router>
        <HomeMenu path="/"/>
        <TopicMenu path="/topics"/>
        <UsersMenu path="/users/" />
        <AllReviewsMenu path="/reviews" />
      </Router>
      
      <Footer />
    </div>
  );
}

export default App;
