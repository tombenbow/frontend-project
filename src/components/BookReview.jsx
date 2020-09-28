import React, { Component } from "react";
import "../stylesheets/BookReview.css";
import axios from "axios";

class Bookreview extends Component {
  state = {
  };

  componentDidMount() {
    axios
      .get(
        `https://bookreview-project.herokuapp.com/api/bookreviews/${this.props.review_id}`
      )
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        this.setState({
            title: data.requestedBookReview.["0"].title,
            body_of_review: data.requestedBookReview.["0"].body_of_review,
            username: data.requestedBookReview.["0"].username
        });
      });
  }

  componentDidUpdate() {
    axios
    .get(
        `https://bookreview-project.herokuapp.com/api/users/${this.state.username}`
    )
    .then((response) => {
        return response.data;
    })
    .then((data) => {
        this.setState({
            photo: data.requested_user.["0"].profile_picture,
            membership_duration: data.requested_user.["0"].membership_duration,
            name: data.requested_user.["0"].name_of_user
        })
    })
  }

  render() {
    return (
      <div className="allReviewsGrid">
        <h1 className="pagetitle">{this.state.title}</h1>

        <img
          className="profilepic"
          src= {this.state.photo}
          alt="profilepic"
        />

        <h2 className="userDetails"> {this.state.username} </h2>

        <h3 className="userDetails"> Name: {this.state.name} </h3>

        <h4 className="userDetails"> Membership Duration: {this.state.membership_duration} </h4>
        
        <p> {this.state.body_of_review} </p>

      </div>
    );
  }
}

export default Bookreview;