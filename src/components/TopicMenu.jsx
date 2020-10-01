import React, { Component } from "react";
import MenuButton from "./MenuButton";
import "../stylesheets/TopicMenu.css";
import axios from "axios";
import Spinner from 'react-bootstrap/Spinner'

class TopicMenu extends Component {
  state = {
    topics: [],
    isLoaded: false,
  };

  componentDidMount() {
    axios
      .get("https://bookreview-project.herokuapp.com/api/topics")
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        this.setState({
          topics: data.all_topics,
          isLoaded: !this.state.isLoaded
        })
        return data.all_topics
      })
  }

  render() {
    return this.state.isLoaded ? (
      <div className="topicMGrid">
        <h1 className="pagetitle">Browse by Topic</h1>

        <img
          className="magnifyingemoji"
          src="https://images-na.ssl-images-amazon.com/images/I/71Y-DybvGGL._AC_SL1500_.jpg"
          alt="magnifying glass emoji"
        />

        {this.state.topics.map((topic) => {
          return (
            <MenuButton
              attribute={`topics/${topic.topic_name}`}
              buttonName={topic.topic_name}
              updateAppState={this.props.updateAppState}
              stateKey={"topicDescription"}
              stateValue={topic.topic_description}
            />
          );
        })}
      </div>
    ) : (
      <div className="spinnerbox">
        <Spinner animation="border" style={{ color: "#343a40" }} />
      </div>
    );
  }
}

export default TopicMenu;
