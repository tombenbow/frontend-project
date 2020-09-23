import React, { Component } from "react";
import "../stylesheets/FilterButton.css";

class FilterButton extends Component {
  state = {
    sort_by: "review_id",
    order: "desc"
  };


  handleChange = (event, type) => {
    event.preventDefault();
    this.setState({
      [type]: event.target.value
    });
  };

  render() {
    return (
      <div className="formbox">
        <form className="form">
          <select
            className="formboxLeft"
            onChange={(event) => {
              this.handleChange(event, "sort_by");
            }}
          >
            <option value="Sort By" key="" disabled selected hidden>
              Order By
            </option>
            <option value="review_id" key="review_id">
              Review ID
            </option>
            <option value="year_book_written_in" key="year_book_written_in">
              Book release date
            </option>
            <option value="book_rating_out_of_5" key="book_rating_out_of_5">
              Reviewers Book Rating
            </option>
            <option value="review_votes" key="review_votes">
              Review Votes
            </option>
          </select>
          <select
            className="formboxRight"
            onChange={(event) => {
              this.handleChange(event, "order");
            }}
          >
            <option value="asc" key="Ascending">
              Ascending
            </option>
            <option value="desc" key="Descending">
              Descending
            </option>
          </select>

        </form>
        <button className="filterButton" onClick={()=>this.props.handleSubmit(this.state.sort_by, this.state.order)}>
            Filter
        </button>
      </div>
    );
  }
}

export default FilterButton;
