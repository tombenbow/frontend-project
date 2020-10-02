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
    this.getTopicPhoto(this.props.topic);
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
      })
      .then(() => {
        axios
        .get(
          `https://bookreview-project.herokuapp.com/api/topics`
        )
        .then((response) => {
          return response.data
        })
        .then((data) => {
          data.all_topics.forEach((topic) => {
            if(topic.topic_name === this.props.topic) {
              this.setState({
                topicDescription2: topic.topic_description,
                isLoaded: !this.state.isLoaded,
              });
            }
          })
        });
      })
  }

  getTopicPhoto = (topic) => {
    //should change this into a v-lookup to improve performance, 
    if (topic === "Biography") {
      this.setState({
        imgSrc: "https://static.thenounproject.com/png/95704-200.png",
      });
    } else if (topic === "Business") {
      this.setState({
        imgSrc: "https://www.iconfinder.com/data/icons/ios-11-glyphs/30/money_bag-512.png",
      }); 
    }else if (topic === "Crime") {
      this.setState({
        imgSrc: "https://static.thenounproject.com/png/60734-200.png",
      }); 
    }else if (topic === "Economics") {
      this.setState({
        imgSrc: "https://static.thenounproject.com/png/3202138-200.png",
      });
    }else if (topic === "History") {
      this.setState({
        imgSrc: "https://www.iconfinder.com/data/icons/google-material-design-icons/48/ic_history_48px-512.png",
      }); 
    }else if (topic === "Psychology") {
      this.setState({
        imgSrc: "https://static.thenounproject.com/png/576012-200.png",
      }); 
    }else if (topic === "Romance") {
      this.setState({
        imgSrc: "https://static.thenounproject.com/png/3154649-200.png",
      }); 
    } else if (topic === "Science") {
      this.setState({
        imgSrc: "https://static.thenounproject.com/png/62984-200.png",
      }); 
    }else if (topic === "Science-Fiction") {
      this.setState({
        imgSrc: "https://static.thenounproject.com/png/61057-200.png",
      }); 
    }else if (topic === "Self-Development") {
      this.setState({
        imgSrc: "https://static.thenounproject.com/png/1551954-200.png",
      }); 
    }else if (topic === "Social-Sciences") {
      this.setState({
        imgSrc: "https://www.rockefellerfoundation.org/wp-content/uploads/social-science-icon.png",
      }); 
    }else if (topic === "Technology") {
      this.setState({
        imgSrc: "https://images.vexels.com/media/users/3/157318/isolated/preview/2782b0b66efa5815b12c9c637322aff3-desktop-computer-icon-computer-by-vexels.png",
      }); 
    }
  };

  render() {
    return this.state.isLoaded ? (
      <div className="allReviewsGrid">
        <h1 className="pagetitle">{this.props.topic}</h1>

        <img className="topicEmoji" src={this.state.imgSrc} alt="topic emoji" />

        <h2 className="topicDescription"> {this.state.topicDescription2} </h2>

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
