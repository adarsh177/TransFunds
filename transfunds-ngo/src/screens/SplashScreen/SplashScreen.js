import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Logo from "../../resources/logo.png";
import Loder from "../../resources/Loader.gif";
import PortisLogo from "../../resources/portis_logo.png";
import MaticLogo from "../../resources/matic_logo.png";
import "./SplashScreen.css";

class SplashScreen extends Component {
  render() {
    return (
      <div className="MainContainer">
        <div className="MobileContainer MobileContainerFlow">
          <div className="Branding">
            <img src={Logo} alt="TransFunds" />
            <h1 className="Brandname">
              <span className="ColourBlueThisWord">Trans</span>
              <span className="ColourGreyThisWord">Funds</span>
            </h1>
            <h6 className="Tagline">(NGO Admin App)</h6>
            <h6 className="Tagline">
              Track your donations with complete transparency
            </h6>
          </div>
          <div className="pre-loader-wrapper">
            <img className="preloader-gif" src={Loder} alt="preloader" />
          </div>
          <div className="portis-badge-wrapper">
            <h6 className="Powered-by">powered by</h6>
            <div className="badge">
              <img className="bothbadges" src={PortisLogo} alt="portis badge" />
              <span className="middleLine"></span>
              <img className="bothbadges" src={MaticLogo} alt="matic Logo" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SplashScreen);
