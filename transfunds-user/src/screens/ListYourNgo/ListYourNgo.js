import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./ListYourNgo.css";
import Topbar from "../../components/Topbar/Topbar";
import SubHeading from "../../components/SubHeading/SubHeading";
import { Scrollbars } from "react-custom-scrollbars";

export class ListYourNgo extends Component {
  render() {
    let instructions =
      "Enter you Registeration number provided by the Govt. (refer : https://ngodarpan.gov.in/), Upload your NGO's Logo and click on submit,Hurray! you have just listed your NGO and you are now eligible for taking donations.";
    return (
      <div className="MainContainer">
        <div className="MobileContainer MobileContainerFlow">
          <Topbar title="List Your NGO" />
          <div className="registerNgo-wrapper">
            <input
              type="text"
              className="ngoid-textfield"
              placeholder="Enter your NGO ID (GOVT. Registration No.)"
            />
            <label for="Upload-Logo" className="Label-btn">
              Upload NGO Logo
            </label>
            <input type="file" accept="image/*" name="photo" id="Upload-Logo" />
            <button type="Submit" className="listNgoSubmit-btn">
              SUBMIT
            </button>
          </div>
          <SubHeading value="Instructions" />
          <Scrollbars autoHide autoHideTimeout={1000} autoHideDuration={200}>
            <p className="instruction-content">{instructions}</p>
          </Scrollbars>
        </div>
      </div>
    );
  }
}

export default withRouter(ListYourNgo);
