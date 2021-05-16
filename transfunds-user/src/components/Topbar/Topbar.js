import React from "react";
import { withRouter } from "react-router-dom";
import "./Topbar.css";
import BackButton from "../../resources/back-arrow.png";

class Topbar extends React.Component {
  constructor(props){
    super(props);
  }

  logout(){
    window.portis.logout();
    window.web3 = null;
    window.accountId = null;
    this.props.history.push('/');
  }

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
        <button onClick={() => this.logout()} className="Logout-btn">Log Out</button>
      </div>
    );
  }
}

export default withRouter(Topbar);
