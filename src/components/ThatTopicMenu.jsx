import React, { Component } from "react";
import MenuButton from "./MenuButton";
import "../stylesheets/ThatTopicMenu.css";
import Spinner from "react-bootstrap/Spinner";
import axios from "axios";

class ThatTopicMenu extends Component {
  state = {
    bookreviews: [],
    isLoaded: false,
    imgSrc: "https://www.iconfinder.com/data/icons/octicons/1024/globe-512.png",
  };

  componentDidMount() {
    // this.getTopicPhoto(this.props.topic);
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
          isLoaded: !this.state.isLoaded,
        });
      });
  }

  // getTopicPhoto = (topic) => {
  //   //should change this into a v-lookup to improve performance, 
  //   if (topic === "Biography") {
  //     this.setState({
  //       imgSrc: "https://static.thenounproject.com/png/95704-200.png",
  //     });
  //   } else if (topic === "Science") {
  //     this.setState({
  //       imgSrc: "https://static.thenounproject.com/png/62984-200.png",
  //     });
  //   } else if (topic === "Romance") {
  //     this.setState({
  //       imgSrc: "https://static.thenounproject.com/png/3154649-200.png",
  //     });
  //   } else if (topic === "Crime") {
  //     this.setState({
  //       imgSrc: "https://static.thenounproject.com/png/60734-200.png",
  //     });
  //   } else {
  //     this.setState({
  //       imgSrc:
  //         "https://www.iconfinder.com/data/icons/octicons/1024/globe-512.png",
  //     });
  //   }
  // };

  render() {
    return this.state.isLoaded ? (
      <div className="allReviewsGrid">
        <h1 className="pagetitle">{this.props.topic}</h1>

        <img className="globeemoji" src={this.state.imgSrc} alt="globe emoji" />

        <h2 className="topicDescription"> {this.props.topicDescription} </h2>

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
    ) : (
      <div className="spinnerbox">
        <Spinner animation="border" style={{ color: "#343a40" }} />
      </div>
    );
  }
}

export default ThatTopicMenu;
