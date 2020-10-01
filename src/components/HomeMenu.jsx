import React from "react";
import MenuButton from "./MenuButton";
import "../stylesheets/HomeMenu.css";

function HomeMenu() {
  return (
    <div className="homePGrid">
      <h1 className="websitename">BookReviews.io</h1>

      <img
        className="bookemoji"
        src="https://images.emojiterra.com/google/android-pie/512px/1f4d6.png"
        alt="book emoji"
      />

      <MenuButton buttonName="See All Reviews" attribute="reviews" />

      <MenuButton buttonName="Browse By Topic" attribute="topics" />

      <MenuButton buttonName="Browse By Reviewer" attribute="users" />
    </div>
  );
}

export default HomeMenu;
