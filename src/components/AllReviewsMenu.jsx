import React, { Component } from "react";
import MenuButton from "./MenuButton";
import "../stylesheets/AllReviewsMenu.css";
import axios from "axios";
import FilterButton from "./FilterButton";
import Spinner from 'react-bootstrap/Spinner'

class AllReviewsMenu extends Component {
  state = {
    bookreviews: [],
    query: "",
    isLoaded: false
  };

  componentDidMount() {
    axios
      .get(
        `https://bookreview-project.herokuapp.com/api/bookreviews${this.state.query}`
      )
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        this.setState({
          bookreviews: data.all_bookreviews,
          isLoaded: !this.state.isLoaded
        });
      });
  }

  handleSubmit = (sort_by, order) => {
    axios
      .get(
        `https://bookreview-project.herokuapp.com/api/bookreviews?sort_by=${sort_by}&order=${order}`
      )
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        this.setState({
          bookreviews: data.all_bookreviews,
        });
      });
  };

  render() {
    return this.state.isLoaded ? (
      <div className="allReviewsGrid">

        <h1 className="pagetitle">All Reviews</h1>

        <img
          className="globeemoji"
          src="https://www.iconfinder.com/data/icons/octicons/1024/globe-512.png"
          alt="globe emoji"
        />

        <FilterButton handleSubmit={this.handleSubmit} />

        {this.state.bookreviews.map((bookreview) => {
          return (
            <MenuButton
              buttonName={bookreview.title}
              key={bookreview.review_id}
              attribute={`reviews/${bookreview.review_id}`}
            />
          );
        })}
        
      </div>
    ) : (
      <div className="spinnerbox">
        <Spinner animation="border" style={{ color: "#343a40" }} />
      </div>
    );
  }
}

export default AllReviewsMenu;
