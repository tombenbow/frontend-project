import React, { Component } from "react";
import "../stylesheets/MenuButton.css";
import styled from "styled-components";
import { Link } from "@reach/router";

class MenuButton extends Component {

  render() {
    return (
      <MButton to={`/${this.props.attribute}`} >
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
  border-radius: 15px;
  border-color: rgb(240, 240, 240);
  text-align: center;
  padding: 25px;
  font-size: x-large;
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

  :hover::before {
    height: 0%;
  }

  /* OPTIMISED FOR SMALLER PHONES */
  @media screen and (max-height: 700px) and (max-width: 450px)  {
    padding: 20px;
    margin-top: 20px;
    font-size: large;
  }

  /* OPTIMISED FOR IPAD PRO */
  @media screen and (height: 1366px) and (width: 1024px)  {
    padding: 30px;
    margin-top: 30px;
    font-size: 2em;
  }
`;

export default MenuButton;
