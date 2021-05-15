import React from "react";
import { withRouter } from "react-router-dom";
import Logo from "../../resources/logo.png";
import Loder from "../../resources/Loader.gif";
import PortisLogo from "../../resources/portis_logo.png";
import "./SplashScreen.css";

class SplashScreen extends React.Component {
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
            <h6 className="Tagline">
              Track your donations with complete transparency
            </h6>
          </div>
          <div className="pre-loader-wrapper">
            <img className="preloader-gif" src={Loder} alt="preloader" />
          </div>
          <div className="portis-badge-wrapper">
            <h6 className="Powered-by">powered by</h6>
            <img src={PortisLogo} alt="portis badge" />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SplashScreen);
