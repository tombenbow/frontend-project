import React, { Component } from "react";
import MenuButton from "./MenuButton";
import "../stylesheets/ThatTopicMenu.css";
import axios from "axios";
// import FilterButton from "./FilterButton";

class ThatTopicMenu extends Component {
  state = {
    bookreviews: []
  };

  componentDidMount() {
    axios
      .get(
        `https://bookreview-project.herokuapp.com/api/bookreviews?topic=${this.props.topic}`
      )
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        this.setState({
          bookreviews: data.all_bookreviews,
        });
      });
  }

  render() {
    return (
      <div className="allReviewsGrid">
        <h1 className="pagetitle">{this.props.topic}</h1>

        <img
          className="globeemoji"
          src="https://www.iconfinder.com/data/icons/octicons/1024/globe-512.png"
          alt="globe emoji"
        />

        <h2> {this.props.topic_description} </h2>

        {this.state.bookreviews.map((bookreview) => {
          return (
            <MenuButton
              buttonName={bookreview.title}
              key={bookreview.review_id}
              attribute={`reviews/${bookreview.review_id}`}
            />
          );
        })}
      </div>
    );
  }
}

export default ThatTopicMenu;
