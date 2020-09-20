import React, { Component } from "react";
import ReviewButton from "./ReviewButton";
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
          return <ReviewButton buttonName={bookreview.title} votes = {bookreview.review_votes}/>;
        })}

      </div>
    );
  }
}

export default AllReviewsMenu;
