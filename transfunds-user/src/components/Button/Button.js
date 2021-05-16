import React from "react";
import { withRouter } from "react-router-dom";
import "./Button.css";

class Button extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return <button className="button" onClick={() => {
      if(this.props.onClick){
        this.props.onClick()
      }
    }}>{this.props.value}</button>;
  }
}

export default withRouter(Button);
