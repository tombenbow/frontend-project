import React, { Component } from "react";
import "../stylesheets/CommentButton.css";
import styled from "styled-components";
import { Link } from "@reach/router";

class CommentButton extends Component {
  render() {
    return (
      <div className="commentBox">
        <ProfileButton to={`${this.props.attribute}`} className="profileButton">
          {" "}
          <img
            className="profileImage"
            src={this.props.photo}
            alt="profilepic"
          />{" "}
        </ProfileButton>
        <p className="commentText">{this.props.username} replying to {this.props.reviewer}: <br></br>{this.props.reviewText}</p>
        <p className="votes">{this.props.votes}</p>
      </div>
    );
  }
}

const ProfileButton = styled(Link)`
  font-family: "Lato", "sans-serif";
  margin: 0px;
  color: #212529;
  display: flex;
  align-items: left;
  text-decoration: none;

  :hover {
    opacity: 0.5;
    text-decoration: none;
    color: black;
  }
`;

export default CommentButton;
