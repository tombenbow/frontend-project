import React, { Component } from "react";
import "../stylesheets/ReviewButton.css";
import styled from "styled-components";

class ReviewButton extends Component {
  state = {
    name: this.props.buttonName,
    href: this.props.href,
    votes: this.props.votes,
  };

  render() {
    return (
      <RButton
        style={{ fontFamily: "'Lato', sans-serif" }}
        onClick={this.state.href}
      >
        <p className = "title"> {this.props.buttonName} </p>
        <p className = "votes" > Votes: {this.props.votes} </p>
      </RButton>
    );
  }
}

const RButton = styled.button`
  box-shadow: 2px 2px 4px 3px rgba(209, 209, 209, 1);
  font-family: "'Lato', sans-serif";
  margin-top: 20px;
  width: 80%;
  color: black;
  border-radius: 10px;
  border-color: rgb(240, 240, 240);
  text-align: center;
  padding: 20px;
  font-size: large;
  position: relative;
  overflow: hidden;
  z-index: 1;
  background-color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;

  :hover {
    background-color: rgb(180, 180, 180);
    transition: 0.3s;
  }

  /* actually what it looks like afterward */
  ::before {
    content: "";
    position: absolute;
    left: 0;
    width: 100%;
    height: 200%;
    background-color: rgb(240, 240, 240);
    z-index: -1;
    transition: 0.3s;
    bottom: 0;
    border-radius: 50% 50% 0 0;
    color: black;
  }

  /* what the bit that's moved looks like once the animation is complete */
  :hover::before {
    height: 0%;
  }
`;

export default ReviewButton;
