import React, { Component } from "react";
import MenuButton from "./MenuButton";
import "../stylesheets/TopicMenu.css";
import axios from "axios";

class TopicMenu extends Component {
  state = {
    topics: [],
  };

  componentDidMount() {
    axios
      .get("https://bookreview-project.herokuapp.com/api/topics")
      .then((response) => {
        console.log(response.data);
        return response.data;
      })
      .then((data) => {
        this.setState({
          topics: data.all_topics
        });
      });
  }

  render() {
    return (
      <div className="topicMGrid">
        <h1 className="pagetitle">Browse by Topic</h1>

        <img
          className="magnifyingemoji"
          src="https://images-na.ssl-images-amazon.com/images/I/71Y-DybvGGL._AC_SL1500_.jpg"
          alt="magnifying glass emoji"
        />

        {this.state.topics.map((topic) => {
          return <MenuButton attribute={`topics/${topic.topic_name}`} buttonName={topic.topic_name} />;
        })}

      </div>
    );
  }
}

export default TopicMenu;
