import React from "react";
import Portis from '@portis/web3';
import Web3 from 'web3';
import { withRouter } from "react-router-dom";
import Logo from "../../resources/logo.png";
import Loder from "../../resources/Loader.gif";
import PortisLogo from "../../resources/portis_logo.png";
import "./SplashScreen.css";
import config from '../../config.json';

class SplashScreen extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    if(window.portis && window.web3 && window.accountId){
      this.moveForward();
    }else{
      this.initWeb3AndPortis();
    }
  }

  initWeb3AndPortis(){
    window.portis = new Portis(config.portis_app_id,{
      nodeUrl: config.nodeUrl,
      chainId: config.chainId
  });
    window.web3 = new Web3(window.portis.provider);
    window.web3.eth.getAccounts((err, acounts) => {
      window.accountId = acounts[0];
      console.log(err, acounts);
      window.contract = new window.web3.eth.Contract(config.contractAbi, config.contractAddress);
      this.moveForward();
    })
  }

  moveForward(){
    setTimeout(() => this.props.history.push('/Dashboard'), 2000);
  }

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
