import React, { Component } from "react";
import MenuButton from "./MenuButton";
import "../stylesheets/AllReviewsMenu.css";
import axios from "axios";
import FilterButton from "./FilterButton";

class AllReviewsMenu extends Component {
  state = {
    bookreviews: [],
    query: "",
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
        });
      });
  }

  componentDidUpdate() {
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
        });
      });
  }

  handleSubmit = (sort_by, order) => {
    console.log(sort_by);
    console.log(order);
    this.setState((prev) => {
      return { ...prev, query: `?sort_by=${sort_by}&order=${order}` };
    });
  };

  render() {
    return (
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
            />
          );
        })}
      </div>
    );
  }
}

export default AllReviewsMenu;
