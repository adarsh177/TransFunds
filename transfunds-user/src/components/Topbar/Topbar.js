import React from "react";
import { withRouter } from "react-router-dom";
import "./Topbar.css";
import BackButton from "../../resources/back-arrow.png";

class Topbar extends React.Component {
  render() {
    return (
      <div className="topbar-pre-wrapper">
        <div className="Topbar-wrapper">
          <button className="back-btn">
            <img src={BackButton} alt="back button" />
          </button>

          <div className="Title-wrapper">
            <h1 className="Title">{this.props.title}</h1>
          </div>
        </div>
        <button className="Logout-btn">Log Out</button>
      </div>
    );
  }
}

export default withRouter(Topbar);
