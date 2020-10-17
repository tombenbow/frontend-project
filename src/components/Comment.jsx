import React, { Component } from "react";
import "../stylesheets/Comment.css";
import { Link } from "@reach/router";
import styled from "styled-components";
import CommentVote from "./CommentVote";

class Comment extends Component {
  render() {
    return (
      <div className="commentBox">
          <ProfileButton to={`/users/${this.props.username}`} className="commentPicture">
            <img
              src={this.props.profilePicture}
              alt="profilePicture"
              className="commentProfilePic"
            />
          </ProfileButton>
          <div className="commentContent">
            <p className="username">{this.props.username}:</p>
            <p className="theComment">{this.props.body}</p>
          </div>
        
        <CommentVote votes={this.props.votes} comment_key={this.props.comment_key}/>
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

export default Comment;
