import React, { Component } from 'react';
import "../stylesheets/ReviewVote.css";
import {faArrowAltCircleDown, faArrowAltCircleUp} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

class ReviewVote extends Component {
    render() {
        return (
            <div className="ReviewVote" style={{fontFamily: '"Lato", "sans-serif"', fontSize: "x-large", fontWeight: "bold", marginBottom: "50px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                <FontAwesomeIcon icon={faArrowAltCircleUp} />
                {this.props.votes}
                <FontAwesomeIcon icon={faArrowAltCircleDown} />
            </div>
        );
    }
}

export default ReviewVote;