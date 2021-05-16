import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./ListYourNgo.css";
import Topbar from "../../components/Topbar/Topbar";
import SubHeading from "../../components/SubHeading/SubHeading";
import { Scrollbars } from "react-custom-scrollbars";

export class ListYourNgo extends Component {
  render() {
    let instructions =
      "Consequat nostrud Lorem et enim eu culpa aliquip. Labore nisi velit proident aliquip aliqua ipsum sunt do est exercitation veniam pariatur deserunt. Eu esse anim laboris eiusmodnisi incididunt Lorem. Adipisicing ex cillum incididunt laborumConsequat nostrud Lorem et enim eu culpa aliquip. Labore nisi velit proident aliquip aliqua ipsum sunt do est exercitation veniam pariatur deserunt. Eu esse anim laboris eiusmodnisi incididunt Lorem. Adipisicing ex cillum incididunt laborumConsequat nostrud Lorem et enim eu culpa aliquip. Labore nisi velit proident aliquip aliqua ipsum sunt do est exercitation veniam pariatur deserunt. Eu esse anim laboris eiusmodnisi incididunt Lorem. Adipisicing ex cillum incididunt laborumConsequat nostrud Lorem et enim eu culpa aliquip. Labore nisi velit proident aliquip aliqua ipsum sunt do est exercitation veniam pariatur deserunt. Eu esse anim laboris eiusmodnisi incididunt Lorem. Adipisicing ex cillum incididunt laborum";
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
          <Scrollbars>
            <p className="instruction-content">{instructions}</p>
          </Scrollbars>
        </div>
      </div>
    );
  }
}

export default withRouter(ListYourNgo);
