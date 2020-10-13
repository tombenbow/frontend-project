import React, { Component } from "react";

class Rating extends Component {
  render() {
    let stars = []

        for (let i = 0; i < this.props.rating; i++) {
            stars.push(
                <img
                src="https://raw.githubusercontent.com/dreyescat/react-rating/master/assets/images/star-full.png"
                alt="rating"
              />
            )
        }

        for (let i = 0; i < 5 - this.props.rating; i++) {
            stars.push(
                <img
                src="https://raw.githubusercontent.com/dreyescat/react-rating/master/assets/images/star-empty.png"
                alt="rating"
              />
            )
        }

    return (
        <div style={{fontSize:"large"}}>
         {stars.map(star => {
            return star
        })}
        </div>
    );
  }
}

export default Rating;
