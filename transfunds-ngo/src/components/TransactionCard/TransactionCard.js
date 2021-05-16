import React, { Component } from "react";
import "./TransactionCard.css";

class TransactionCard extends Component {
  render() {
    return (
      <div>
        <div className="transactionCard-inner-wrapper">
          <div className="transaction-user">
            <h3 className="usename">{this.props.username}</h3>
            <div className="transactionParameter">
              <p>Transaction ID - </p>
              <p> #{this.props.tid}</p>
            </div>
            <div className="transactionParameter">
              <p>{this.props.reasonParameter} </p>
              <p> {this.props.reason}</p>
            </div>
          </div>
          <div className="transaction-amount">
            <p className="positiveamount">{this.props.pamount}</p>
            <p className="negativeamount">{this.props.namount}</p>
          </div>
        </div>
        <span className="transaction-line"></span>
      </div>
    );
  }
}

export default TransactionCard;
