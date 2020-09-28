import React from "react";
import "./App.css";
import TheNavbar from "./components/TheNavbar";
import Footer from "./components/Footer";
import HomeMenu from "./components/HomeMenu"
import TopicMenu from "./components/TopicMenu"
import ThatTopicMenu from "./components/ThatTopicMenu"
import UsersMenu from "./components/UsersMenu"
import ThatUsersMenu from "./components/ThatUsersMenu"
import AllReviewsMenu from "./components/AllReviewsMenu"
import BookReview from "./components/BookReview"
import { Router } from "@reach/router"

function App() {
  return (
    <div style={{ minHeight: "100%", position: "absolute", width: "100%", margin: 0}}>
      <TheNavbar />

      <Router>
        <HomeMenu path="/"/>
        <TopicMenu path="/topics"/>
        <ThatTopicMenu path="/topics/:topic" />
        <UsersMenu path="/users/" />
        <ThatUsersMenu path="users/:username" />
        <AllReviewsMenu path="/reviews" />
        <BookReview path="/reviews/:review_id" />
      </Router>
      
      <Footer />
    </div>
  );
}

export default App;
