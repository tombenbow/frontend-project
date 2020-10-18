import React, { Component } from "react";
import "../stylesheets/CommentDelete.css";
import { faArrowAltCircleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class CommentDelete extends Component {
  state = {
    votes: this.props.votes,
    UVstyle: "",
    DVstyle: "",
    UVvoted: false,
    DVvoted: false,
  };

  render() {
    return (
      <div className="CommentVote">
        <FontAwesomeIcon
          icon={faArrowAltCircleUp}
          className="deleteComment"
          onClick = {() => {
              this.props.deleteComment(this.props.comment_key)
          }}
        />
        <p style={{ margin: "0px" }}>{this.state.votes}</p>
      </div>
    );
  }
}

export default CommentDelete;
