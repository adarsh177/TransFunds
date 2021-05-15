import React, { Component } from "react";
import { withRouter } from "react-router";
import Topbar from "../../components/Topbar/Topbar";
import "./NgosList.css";
import { Scrollbars } from "react-custom-scrollbars";
import NgoListCard from "../../components/NgoListCard/NgoListCard";

export class NgosList extends Component {
  render() {
    return (
      <div className="MainContainer">
        <div className="MobileContainer MobileContainerFlow">
          <Topbar title="NGOs list" />
          <div className="searchngo-wrapper">
            <input
              className="searchngo"
              type="text"
              placeholder="Search for NGOs"
            />
          </div>
          <span className="ngoslist-line"></span>
          <Scrollbars>
            <NgoListCard
              ngoname="Hemkunt foundation"
              ngoid="36544"
              location="Delhi"
              field="environment"
              source="https://codesign.com.bd/conversations/content/images/2020/03/Sprint-logo-design-Codesign-agency.png"
            />
            <NgoListCard
              ngoname="Hemkunt foundation"
              ngoid="36544"
              location="Delhi"
              field="environment"
              source="https://codesign.com.bd/conversations/content/images/2020/03/Sprint-logo-design-Codesign-agency.png"
            />
            <NgoListCard
              ngoname="Hemkunt foundation"
              ngoid="36544"
              location="Delhi"
              field="environment"
              source="https://codesign.com.bd/conversations/content/images/2020/03/Sprint-logo-design-Codesign-agency.png"
            />
            <NgoListCard
              ngoname="Hemkunt foundation"
              ngoid="36544"
              location="Delhi"
              field="environment"
              source="https://codesign.com.bd/conversations/content/images/2020/03/Sprint-logo-design-Codesign-agency.png"
            />
            <NgoListCard
              ngoname="Hemkunt foundation"
              ngoid="36544"
              location="Delhi"
              field="environment"
              source="https://codesign.com.bd/conversations/content/images/2020/03/Sprint-logo-design-Codesign-agency.png"
            />
            <NgoListCard
              ngoname="Hemkunt foundation"
              ngoid="36544"
              location="Delhi"
              field="environment"
              source="https://codesign.com.bd/conversations/content/images/2020/03/Sprint-logo-design-Codesign-agency.png"
            />
            <NgoListCard
              ngoname="Hemkunt foundation"
              ngoid="36544"
              location="Delhi"
              field="environment"
              source="https://codesign.com.bd/conversations/content/images/2020/03/Sprint-logo-design-Codesign-agency.png"
            />
          </Scrollbars>
        </div>
      </div>
    );
  }
}

export default withRouter(NgosList);
