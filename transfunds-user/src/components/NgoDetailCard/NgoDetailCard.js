import React, { Component } from "react";
import Button from "../Button/Button";
import "./NgoDetailCard.css";

class NgoDetailCard extends Component {
  render() {
    return (
      <div className="ngoDetail-card-wrapper">
        <div className="card-parameter-wrapper">
          <p className="card-parameter">Name &nbsp;&nbsp;&nbsp;- </p>
          <p className="card-parameter-value">{this.props.name}</p>
        </div>
        <div className="card-parameter-wrapper">
          <p className="card-parameter">Field &nbsp;&nbsp;&nbsp;- </p>
          <p className="card-parameter-value">{this.props.field}</p>
        </div>
        <div className="card-parameter-wrapper">
          <p className="card-parameter">Total donations &nbsp;&nbsp;&nbsp;- </p>
          <p className="card-parameter-value">₹ {this.props.donations}</p>
        </div>
        <div className="card-parameter-wrapper">
          <p className="card-parameter">NGO ID &nbsp;&nbsp;&nbsp;- </p>
          <p className="card-parameter-value">#{this.props.ngoid}</p>
        </div>
        <div className="card-parameter-wrapper">
          <p className="card-parameter">Email &nbsp;&nbsp;&nbsp;- </p>
          <p className="card-parameter-value">{this.props.email}</p>
        </div>
        <div className="card-parameter-wrapper">
          <p className="card-parameter">Phone &nbsp;&nbsp;&nbsp;- </p>
          <p className="card-parameter-value">+91 - {this.props.phone}</p>
        </div>
        <div className="card-parameter-wrapper">
          <p className="card-parameter">Locaion &nbsp;&nbsp;&nbsp;- </p>
          <p className="card-parameter-value ">{this.props.location}</p>
        </div>
        <Button value="Donate" />
      </div>
    );
  }
}

export default NgoDetailCard;
