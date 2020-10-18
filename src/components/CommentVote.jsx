import React, { Component } from "react";
import "../stylesheets/CommentVote.css";
import {
  faArrowAltCircleDown,
  faArrowAltCircleUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

class CommentVote extends Component {
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
        `https://bookreview-project.herokuapp.com/api/comments/${this.props.comment_key}`,
        {
          vote: vote,
        }
      );
    }
    if (length === 2) {
      axios
        .patch(
          `https://bookreview-project.herokuapp.com/api/comments/${this.props.comment_key}`,
          {
            vote: vote,
          }
        )
        .then(() => {
          axios.patch(
            `https://bookreview-project.herokuapp.com/api/comments/${this.props.comment_key}`,
            {
              vote: vote,
            }
          );
        });
    }
  };

  render() {
    return (
      <div className="CommentVote">
        <FontAwesomeIcon
          icon={faArrowAltCircleUp}
          className="upVoteComment"
          style={{ opacity: this.state.UVstyle, marginRight: "0px" }}
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
        <p style={{ margin: "0px" }}>{this.state.votes}</p>
        <FontAwesomeIcon
          icon={faArrowAltCircleDown}
          className="downVoteComment"
          style={{ opacity: this.state.DVstyle, marginLeft: "0px" }}
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

export default CommentVote;
