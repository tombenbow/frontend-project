import React, { Component } from "react";
import MenuButton from "./MenuButton";
import "../stylesheets/UsersMenu.css";
import axios from "axios";

class UsersMenu extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
    axios
      .get("https://bookreview-project.herokuapp.com/api/users/allusers")
      .then((response) => {
        console.log(response.data);
        return response.data;
      })
      .then((data) => {
        this.setState({
          users: data.all_users
        });
      });
  }

  render() {
    return (
      <div className="topicMGrid">
        <h1 className="pagetitle">Browse by User</h1>

        <img
          className="peopleemoji"
          src="https://cdn.icon-icons.com/icons2/1674/PNG/512/person_110935.png"
          alt="person emoji"
        />

        {this.state.users.map((users) => {
          return <MenuButton buttonName={users.username} />;
        })}

      </div>
    );
  }
}

export default UsersMenu;