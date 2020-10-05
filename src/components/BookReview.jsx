import React, { Component } from "react";
import "../stylesheets/BookReview.css";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import { Link } from "@reach/router";
import styled from "styled-components";
import CommentButton from "./CommentButton";

class Bookreview extends Component {
  state = {
    isLoaded: false,
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
          title: data.requestedBookReview[0].title,
          username: data.requestedBookReview[0].username,
          body_of_review: data.requestedBookReview[0].body_of_review,
          photo: data.requestedBookReview[0].profile_picture,
        });
        return data.requestedBookReview[0].username;
      })
      .then(() => {
        axios
          .get(
            `https://bookreview-project.herokuapp.com/api/bookreviews/${this.props.review_id}/comments`
          )
          .then((response) => {
            return response.data;
          })
          .then((data) => {
            this.setState({
              comments: data.theReviewsComments,
              isLoaded: !this.state.isLoaded,
            });
          });
      });
  }

  render() {
    return this.state.isLoaded ? (
      <div className="allReviewsGrid">
        <h2 className="pageTitle"> {this.state.username} </h2>
        <ProfileButton to={`/users/${this.state.username}`}>
          <img
            className="profilepicBR"
            src={this.state.photo}
            alt="profilepic"
          />
        </ProfileButton>
        <h1 className="reviewTitle">{this.state.title}</h1>
        <p className="review"> {this.state.body_of_review} </p>

        {this.state.comments.map((comment) => { //make this show "no comments available", if there's no comments
          return (
            <CommentButton
              photo={comment.profile_picture}
              reviewText={comment.body}
              attribute={`/users/${comment.username}`}
              username={comment.username}
              reviewer={this.state.username}
              votes={comment.comment_votes}
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

const ProfileButton = styled(Link)`
  font-family: "Lato", "sans-serif";
  margin: 0px;
  color: #212529;
  text-align: center;
  text-decoration: none;

  :hover {
    opacity: 0.5;
    text-decoration: none;
    color: black;
  }
`;

export default Bookreview;
