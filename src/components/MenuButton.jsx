import React, { Component } from "react";
import "../stylesheets/MenuButton.css";
import styled from "styled-components";
import { Link } from "@reach/router";

class MenuButton extends Component {
  updateAppState2 = () => {
    if (
      this.props.updateAppState &&
      this.props.stateKey &&
      this.props.stateValue
    ) {
      this.props.updateAppState(this.props.stateKey, this.props.stateValue);
    }
  };

  render() {
    return (
      <MButton
        to={`/${this.props.attribute}`}
        onClick={() => this.updateAppState2()}
      >
        {this.props.buttonName}
      </MButton>
    );
  }
}

const MButton = styled(Link)`
  text-decoration: none;
  box-shadow: 2px 2px 4px 3px rgba(209, 209, 209, 1);
  font-family: "Lato", "sans-serif";
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

  :hover {
    background-color: rgb(180, 180, 180);
    transition: 0.3s;
    text-decoration: none;
    color: black;
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
    text-decoration: none;
  }

  /* what the bit that's moved looks like once the animation is complete */
  :hover::before {
    height: 0%;
  }
`;

export default MenuButton;
