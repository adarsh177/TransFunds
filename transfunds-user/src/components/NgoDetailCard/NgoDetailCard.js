import React, { Component } from "react";
import Button from "../Button/Button";
import "./NgoDetailCard.css";

class NgoDetailCard extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="ngoDetail-card-wrapper">
        <div className="card-parameter-wrapper">
          <p className="card-parameter">Name &nbsp;&nbsp; </p>
          <p className="card-parameter-value">{this.props.name}</p>
        </div>
        <div className="card-parameter-wrapper">
          <p className="card-parameter">Total donations &nbsp;&nbsp; </p>
          <p className="card-parameter-value">{this.props.donations} WEI</p>
        </div>
        <div className="card-parameter-wrapper">
          <p className="card-parameter">NGO ID &nbsp;&nbsp; </p>
          <p className="card-parameter-value">#{this.props.ngoid}</p>
        </div>
        <div className="card-parameter-wrapper">
          <p className="card-parameter">Email &nbsp;&nbsp; </p>
          <p className="card-parameter-value">{this.props.email}</p>
        </div>
        <div className="card-parameter-wrapper">
          <p className="card-parameter">Phone &nbsp;&nbsp;</p>
          <p className="card-parameter-value">+91 - {this.props.phone}</p>
        </div>
        <div className="card-parameter-wrapper">
          <p className="card-parameter">Locaion &nbsp;&nbsp; </p>
          <p className="card-parameter-value ">{this.props.location}</p>
        </div>
        <Button value="Donate" onClick={() => this.props.onDonationClick()} />
      </div>
    );
  }
}

export default NgoDetailCard;
