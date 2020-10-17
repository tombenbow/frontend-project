import React, { Component } from "react";
import "../stylesheets/BookReview.css";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import { Link } from "@reach/router";
import styled from "styled-components";
import Rating from "./Rating";
import ReviewVote from "./ReviewVote";
import Comment from "./Comment";

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
          year_book_written_in:
            data.requestedBookReview[0].year_book_written_in,
          rating: data.requestedBookReview[0].book_rating_out_of_5,
          review_votes: data.requestedBookReview[0].review_votes,
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
      <>
        <div className="TheReview">
          <h2 className="pageTitle"> {this.state.username} </h2>
          <ProfileButton to={`/users/${this.state.username}`}>
            <img
              className="profilepicBR"
              src={this.state.photo}
              alt="profilepic"
            />
          </ProfileButton>
          <h1 className="reviewTitle">
            {this.state.title} ({this.state.year_book_written_in})
          </h1>
          <Rating rating={this.state.rating} />
          <p className="review"> {this.state.body_of_review} </p>
        </div>
        <div>
          <h1
            style={{
              fontWeight: "bold",
              fontSize: "x-large",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {" "}
            Was this Review helpful?
          </h1>
          <ReviewVote
            votes={this.state.review_votes}
            review_id={this.props.review_id}
          />
        </div>
        <div>
          {this.state.comments.map((comment) => {
            return (
              <Comment
                key={comment.comment_key}
                profilePicture={comment.profile_picture}
                votes={comment.comment_votes}
                username={comment.username}
                body={comment.body}
              />
            );
          })}
        </div>
      </>
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
