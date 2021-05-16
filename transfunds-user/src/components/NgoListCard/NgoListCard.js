import React, { Component } from "react";
import { withRouter } from "react-router";
import "./NgoListCard.css";

class NgoListCard extends Component {
  render() {
    return (
      <div>
        <div className="DashboardCard-wrapper">
          <div>
            <img className="ngo-logo" src={this.props.source} alt="Ngo logo" />
          </div>
          <div className="card-content">
            <h2 className="ngoName">{this.props.ngoname}</h2>
            <p className="allTransactionDetails">
              NGO id - #{this.props.ngoid}
            </p>
            <p className="allTransactionDetails">
              Location - ₹ {this.props.location}
            </p>
            <p className="allTransactionDetails">Field - {this.props.field}</p>
          </div>
        </div>
        <span className="cardLine"></span>
      </div>
    );
  }
}

export default withRouter(NgoListCard);
