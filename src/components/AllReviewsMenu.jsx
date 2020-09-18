import React, { Component } from "react";
import MenuButton from "./MenuButton";
import "../stylesheets/AllReviewsMenu.css";
import axios from "axios";

class AllReviewsMenu extends Component {
  state = {
    bookreviews: [],
  };

  componentDidMount() {
    axios
      .get("https://bookreview-project.herokuapp.com/api/bookreviews")
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        this.setState({
          bookreviews: data.all_bookreviews
        });
      });
  }

  render() {
    return (
      <div className="allReviewsGrid">
        <h1 className="pagetitle">All Reviews</h1>

        <img
          className="globeemoji"
          src="https://www.iconfinder.com/data/icons/octicons/1024/globe-512.png"
          alt="globe emoji"
        />

        {this.state.bookreviews.map((bookreview) => {
          return <MenuButton buttonName={bookreview.title} />;
        })}

      </div>
    );
  }
}

export default AllReviewsMenu;
