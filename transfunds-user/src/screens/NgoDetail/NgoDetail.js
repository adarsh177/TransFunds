import React, { Component } from "react";
import { withRouter } from "react-router";
import NgoDetailCard from "../../components/NgoDetailCard/NgoDetailCard";
import Topbar from "../../components/Topbar/Topbar";
import "./NgoDetail.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import SubHeading from "../../components/SubHeading/SubHeading";
import { Scrollbars } from "react-custom-scrollbars";
import TransactionCard from "../../components/TransactionCard/TransactionCard";

export class NgoDetail extends Component {
  render() {
    const workingSector =
      "Anim esse enim adipisicing dolore quis excepteur et. Labore duis proident nisi dolore cupidatat est dolor elit exercitation commodo. In duis culpa ipsum ullamco voluptate in elit aliqua. Aliquip nulla anim est ipsum consequat proident tempor magna ut qui veniam nulla laborum officia. Nulla veniam eiusmod esse cillum labore qui consectetur ipsum nostrud enim ea eiusmod culpa.Sit nisi quis sint esse elit occaecat et qui. Nisi pariatur excepteur magna ipsum voluptate exercitation et aliqua. Cupidatat sunt amet consequat in cillum nulla occaecat qui dolore cillum sint amet. Aliquip sunt dolor sit laborum exercitation fugiat officia dolore laborum irure Lorem velit amet. Irure consequat laboris exercitation exercitation nulla sint aliquip et. Id nostrud mollit labore veniam magna cupidatat sint minim amet quis ex.";
    return (
      <div className="MainContainer">
        <div className="MobileContainer MobileContainerFlow">
          <Topbar title="NGO's details" />
          <div className="pre-wrapper-tabs">
            <Tabs>
              <TabList>
                <Tab>Details</Tab>
                <Tab>Transactions</Tab>
              </TabList>

              <TabPanel>
                <div className="NgoDetailCard-wrapper">
                  <NgoDetailCard
                    name="Hemkunt Fundation"
                    field="Animal care"
                    ngoid="324646"
                    phone="9876543210"
                    email="hmknt@foundation.com"
                    location="Mumbai"
                    donations="5245"
                  />
                </div>
                <SubHeading value="Working sector" />
                <div className="ws-content-wrapper">
                  <Scrollbars
                    autoHide
                    autoHideTimeout={1000}
                    autoHideDuration={200}
                  >
                    <p className="ws-content">{workingSector}</p>
                  </Scrollbars>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="Transaction-wrapper">
                  <Scrollbars
                    autoHide
                    autoHideTimeout={1000}
                    autoHideDuration={200}
                  >
                    <TransactionCard
                      username="Aman kumar"
                      tid="354343"
                      pamount="+ ₹500"
                    />
                    <TransactionCard
                      username="Aman kumar"
                      tid="354343"
                      pamount="+ ₹500"
                    />
                    <TransactionCard
                      username="Aman kumar"
                      tid="354343"
                      pamount="+ ₹500"
                    />
                    <TransactionCard
                      username="Aman kumar"
                      tid="354343"
                      namount="- ₹500"
                      reasonParameter="Reason - "
                      reason="Food, Cloths"
                    />
                    <TransactionCard
                      username="Aman kumar"
                      tid="354343"
                      pamount="+ ₹500"
                    />
                    <TransactionCard
                      username="Aman kumar"
                      tid="354343"
                      pamount="+ ₹500"
                    />
                    <TransactionCard
                      username="Aman kumar"
                      tid="354343"
                      namount="- ₹500"
                      reasonParameter="Reason - "
                      reason="Food, Cloths"
                    />
                  </Scrollbars>
                </div>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(NgoDetail);
