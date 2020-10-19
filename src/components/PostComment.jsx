import React, { Component } from "react";
import "../stylesheets/PostComment.css";

class postComment extends Component {
  state = {
    value: "",
  };

  render() {
    return (
      <form
        className="commentBox"
        onSubmit={(e) => {
          e.preventDefault();
          console.log(this.state.value);
          this.props.postNewComment(this.state.value)
        }}
      >
        <textarea
          placeholder="Enter Comment Here"
          className="commentPostBox"
          style={{ resize: "none" }}
          onChange={(e) => {
              this.setState({
                  value: e.target.value
              })
          }}
        />
        <button type="submit" className="submitButton">Submit</button>
      </form>
    );
  }
}

export default postComment;
