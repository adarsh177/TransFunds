import React from "react";
import { withRouter, Link } from "react-router-dom";
import "./Dashboard.css";
import Topbar from "../../components/Topbar/Topbar";
import Button from "../../components/Button/Button";
import SubHeading from "../../components/SubHeading/SubHeading";
import DashboardCard from "../../components/DashboardCard/DashboardCard";
import { Scrollbars } from "react-custom-scrollbars";

class Dashboard extends React.Component {
  render() {
    const idvalue = "ksajdfksgdkfgskbdfksfgaksfdljaj35dsf34sfsdfhakfkmba";
    return (
      <div className="MainContainer">
        <div className="MobileContainer MobileContainerFlow">
          <Topbar title="Dashboard" />
          <div className="walletID-wrapper">
            <p className="walletID-heading">Wallet ID -</p>
            <p className="walletID"> #{idvalue}</p>
          </div>
          <div className="navigation-btn-wrapper">
            <Link to="/ngolist">
              <Button value="ngos list" />
            </Link>
            <Link to="/listyourngo">
              <Button value="list you ngo" />
            </Link>
          </div>
          <SubHeading value="My Donation" />
          <Scrollbars autoHide autoHideTimeout={1000} autoHideDuration={200}>
            <DashboardCard
              ngo_name="Hemkunt Foundation"
              tID="63641"
              amount="2346"
              usedfor="Food, cloths"
              src="https://codesign.com.bd/conversations/content/images/2020/03/Sprint-logo-design-Codesign-agency.png"
            />
            <DashboardCard
              ngo_name="Hemkunt Foundation"
              tID="63641"
              amount="2346"
              usedfor="Food, cloths"
              src="https://codesign.com.bd/conversations/content/images/2020/03/Sprint-logo-design-Codesign-agency.png"
            />
            <DashboardCard
              ngo_name="Hemkunt Foundation"
              tID="63641"
              amount="2346"
              usedfor="Food, cloths"
              src="https://codesign.com.bd/conversations/content/images/2020/03/Sprint-logo-design-Codesign-agency.png"
            />
            <DashboardCard
              ngo_name="Hemkunt Foundation"
              tID="63641"
              amount="2346"
              usedfor="Food, cloths"
              src="https://codesign.com.bd/conversations/content/images/2020/03/Sprint-logo-design-Codesign-agency.png"
            />
            <DashboardCard
              ngo_name="Hemkunt Foundation"
              tID="63641"
              amount="2346"
              usedfor="Food, cloths"
              src="https://codesign.com.bd/conversations/content/images/2020/03/Sprint-logo-design-Codesign-agency.png"
            />
            <DashboardCard
              ngo_name="Hemkunt Foundation"
              tID="63641"
              amount="2346"
              usedfor="Food, cloths"
              src="https://codesign.com.bd/conversations/content/images/2020/03/Sprint-logo-design-Codesign-agency.png"
            />
            <DashboardCard
              ngo_name="Hemkunt Foundation"
              tID="63641"
              amount="2346"
              usedfor="Food, cloths"
              src="https://codesign.com.bd/conversations/content/images/2020/03/Sprint-logo-design-Codesign-agency.png"
            />
          </Scrollbars>
        </div>
      </div>
    );
  }
}

export default withRouter(Dashboard);
