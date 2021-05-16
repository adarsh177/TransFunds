import React from "react";
import { withRouter } from "react-router-dom";
import "./SubHeading.css";

class SubHeading extends React.Component {
  render() {
    return (
      <div className="sub-heading-wrapper">
        <h2 className="sub-heading">{this.props.value}</h2>
        <span className="saperation-line"></span>
      </div>
    );
  }
}

export default withRouter(SubHeading);
