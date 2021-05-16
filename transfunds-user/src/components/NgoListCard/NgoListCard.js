import React, { Component } from "react";
import "./NgoListCard.css";

export default function NgoListCard(props){
  return (
    <div>
      <div className="DashboardCard-wrapper">
        <div>
          <img className="ngo-logo" src={props.source} alt="Ngo logo" />
        </div>
        <div className="card-content">
          <h2 className="ngoName">{props.ngoname}</h2>
          <p className="allTransactionDetails">
            NGO id - #{props.ngoid}
          </p>
          <p className="allTransactionDetails">
            Location - ₹ {props.location}
          </p>
          <p className="allTransactionDetails">Field - {props.field}</p>
        </div>
      </div>
      <span className="cardLine"></span>
    </div>
  );
}
