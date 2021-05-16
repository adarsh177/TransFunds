import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./DashboardCard.css";

class DashboardCard extends Component {
  render() {
    return (
      <div>
        <div className="DashboardCard-wrapper">
          <div>
            <img className="ngo-logo" src={this.props.src} alt="Ngo logo" />
          </div>
          <div className="card-content">
            <h2 className="ngoName">{this.props.ngo_name}</h2>
            <p className="allTransactionDetails">
              Transaction id - #{this.props.tID}
            </p>
            <p className="allTransactionDetails">
              Amount - ₹ {this.props.amount}
            </p>
            <p className="allTransactionDetails">
              Used for - {this.props.usedfor}
            </p>
          </div>
        </div>
        <span className="cardLine"></span>
      </div>
    );
  }
}

export default withRouter(DashboardCard);
