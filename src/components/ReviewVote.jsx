import React, { Component } from "react";
import "../stylesheets/ReviewVote.css";
import {
  faArrowAltCircleDown,
  faArrowAltCircleUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

class ReviewVote extends Component {
  state = {
    votes: this.props.votes,
    UVstyle: "",
    DVstyle: "",
    UVvoted: false,
    DVvoted: false,
  };

  voteFunction = (vote, length) => {
    if (length === 1) {
      axios.patch(
        `https://bookreview-project.herokuapp.com/api/bookreviews/${this.props.review_id}`,
        {
          vote: vote,
        },
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "PATCH",
            "Access-Control-Allow-Headers":
              "Content-Type, Access-Control-Allow-Headers, Authorisation",
          },
        }
      );
    }
    if (length === 2) {
      axios
        .patch(
          `https://bookreview-project.herokuapp.com/api/bookreviews/${this.props.review_id}`,
          {
            vote: vote,
          },
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Methods": "PATCH",
              "Access-Control-Allow-Headers":
                "Content-Type, Access-Control-Allow-Headers, Authorisation",
            },
          }
        )
        .then(() => {
          axios.patch(
            `https://bookreview-project.herokuapp.com/api/bookreviews/${this.props.review_id}`,
            {
              vote: vote,
            },
            {
              headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "PATCH",
                "Access-Control-Allow-Headers":
                  "Content-Type, Access-Control-Allow-Headers, Authorisation",
              },
            }
          );
        });
    }
  };

  render() {
    return (
      <div className="ReviewVote">
        <FontAwesomeIcon
          icon={faArrowAltCircleUp}
          className="upVoteReview"
          style={{ opacity: this.state.UVstyle }}
          onClick={() => {
            if (this.state.UVvoted === false && this.state.DVvoted === false) {
              this.setState({
                UVstyle: 1,
                UVvoted: true,
                DVvoted: false,
                DVstyle: "",
                votes: this.props.votes + 1,
              });
              this.voteFunction("up", 1);
            }
            if (this.state.UVvoted === false && this.state.DVvoted === true) {
              this.setState({
                UVstyle: 1,
                UVvoted: true,
                DVvoted: false,
                DVstyle: "",
                votes: this.props.votes + 1,
              });
              this.voteFunction("up", 2);
            }
            if (this.state.UVvoted === true) {
              this.setState({
                UVvoted: false,
                UVstyle: "",
                votes: this.props.votes,
              });
              this.voteFunction("down", 1);
            }
          }}
        />
        {this.state.votes}
        <FontAwesomeIcon
          icon={faArrowAltCircleDown}
          className="downVoteReview"
          style={{ opacity: this.state.DVstyle }}
          onClick={() => {
            if (this.state.DVvoted === false && this.state.UVvoted === false) {
              this.setState({
                DVstyle: 1,
                DVvoted: true,
                UVvoted: false,
                UVstyle: "",
                votes: this.props.votes - 1,
              });
              this.voteFunction("down", 1);
            }
            if (this.state.DVvoted === false && this.state.UVvoted === true) {
              this.setState({
                DVstyle: 1,
                DVvoted: true,
                UVvoted: false,
                UVstyle: "",
                votes: this.props.votes - 1,
              });
              this.voteFunction("down", 2);
            }
            if (this.state.DVvoted === true) {
              this.setState({
                DVvoted: false,
                DVstyle: "",
                votes: this.props.votes,
              });
              this.voteFunction("up", 1);
            }
          }}
        />
      </div>
    );
  }
}

export default ReviewVote;
