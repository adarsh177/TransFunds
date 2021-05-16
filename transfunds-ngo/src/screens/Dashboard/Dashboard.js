import React, { Component } from "react";
import Topbar from "../../components/Topbar/Topbar";
import SubHeading from "../../components/SubHeading/SubHeading";
import TransactionCard from "../../components/TransactionCard/TransactionCard";
import NgoDetailCardDashboard from "../../components/NgoDetailCardDashboard/NgoDetailCardDashboard";
import { Scrollbars } from "react-custom-scrollbars";

import "./Dashboard.css";

class Dashboard extends Component {
  render() {
    return (
      <div className="MainContainer">
        <div className="MobileContainer MobileContainerFlow">
          <Topbar title="NGO Dashboard" />
          <div className="NgoDetailCardDashboard-wrapper">
            <NgoDetailCardDashboard
              name="hemkunt Foundation"
              ngoid="5646963"
              email="example@ez.com"
              phone="9876543211"
            />
          </div>
          <SubHeading value="Transactions" />
          <div className="Transaction-container">
            <Scrollbars autoHide autoHideTimeout={1000} autoHideDuration={200}>
              <TransactionCard
                username="Aman Kumar"
                tid="354343"
                pamount="+ ₹551"
              />
              <TransactionCard
                username="Aman Kumar"
                tid="354343"
                pamount="+ ₹551"
              />
              <TransactionCard
                username="Aman Kumar"
                tid="354343"
                pamount="+ ₹551"
              />
              <TransactionCard
                username="Aman Kumar"
                tid="354343"
                reasonParameter="Reason - "
                reason="Food, Cloth"
                namount="- ₹551"
              />
              <TransactionCard
                username="Aman Kumar"
                tid="354343"
                pamount="+ ₹551"
              />
              <TransactionCard
                username="Aman Kumar"
                tid="354343"
                pamount="+ ₹551"
              />
              <TransactionCard
                username="Aman Kumar"
                tid="354343"
                reasonParameter="Reason - "
                reason="Food, Cloth"
                namount="- ₹551"
              />
            </Scrollbars>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
