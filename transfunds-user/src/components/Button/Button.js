import React from "react";
import { withRouter } from "react-router-dom";
import "./Button.css";

class Button extends React.Component {
  render() {
    return <button className="button">{this.props.value}</button>;
  }
}

export default withRouter(Button);
