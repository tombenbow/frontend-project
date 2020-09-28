import React, { Component } from "react";
import MenuButton from "./MenuButton";
import "../stylesheets/ThatUsersMenu.css";
import axios from "axios";

class ThatTopicMenu extends Component {
  state = {
    bookreviews: [],
    query: "",
  };

  componentDidMount() {
    axios
      .get(
        `https://bookreview-project.herokuapp.com/api/bookreviews?username=${this.props.username}`
      )
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        this.setState({
          bookreviews: data.all_bookreviews,
        });
      });
    axios
      .get(
          `https://bookreview-project.herokuapp.com/api/users/${this.props.username}`
      )
      .then((response) => {
          return response.data;
      })
      .then((data) => {
          this.setState({
              photo: data.requested_user.["0"].profile_picture,
              membership_duration: data.requested_user.["0"].membership_duration,
              name: data.requested_user.["0"].name_of_user
          })
      })
  }

  render() {
    return (
      <div className="allReviewsGrid">
        <h1 className="pagetitle">{this.props.username}</h1>

        <img
          className="profilepic"
          src= {this.state.photo}
          alt="profilepic"
        />

        <h2 className="userDetails"> Name: {this.state.name} </h2>

        <h3 className="userDetails"> Membership Duration: {this.state.membership_duration} </h3>
        
        {this.state.bookreviews.length > 0 ? (
                    this.state.bookreviews.map((bookreview) => {
                        return (
                          <MenuButton
                            buttonName={bookreview.title}
                            key={bookreview.review_id}
                            attribute={`reviews/${bookreview.review_id}`}
                          />
                        );
                      })
        ) : (
            <h4 className="userDetails" style={{marginTop: "30px", fontWeight: "bold"}}>No reviews available</h4>
        )}
      </div>
    );
  }
}

export default ThatTopicMenu;