import React from "react";
import "../DashboardCard/DashboardCard.css"; /* css used in this component is of the component dashboard card */
import "./NgoListCard.css";

export default function NgoListCard(props) {
  return (
    <div>
      <div className="DashboardCard-wrapper custom-bottom-margin">
        <div>
          <img className="ngo-logo" src={props.source} alt="Ngo logo" />
        </div>
        <div className="card-content">
          <h2 className="ngoName">{props.ngoname}</h2>
          <p className="allTransactionDetails">NGO id - #{props.ngoid}</p>
          <p className="allTransactionDetails">Location - {props.location}</p>
          <div className="fieldplushbutton">
            <p className="allTransactionDetails field-custom-size">
              Field - {props.field}
            </p>
            <span className="card-btn-wrapper">
              <a className="card-btn" onClick={() => props.onClick()}>
                Learn more
              </a>
            </span>
          </div>
        </div>
      </div>
      <span className="cardLine"></span>
    </div>
  );
}
