import React, { Component } from "react";
import Topbar from "../../components/Topbar/Topbar";
import Button from "../../components/Button/Button";
import SubHeading from "../../components/SubHeading/SubHeading";
import TransactionCard from "../../components/TransactionCard/TransactionCard";
import NgoDetailCardDashboard from "../../components/NgoDetailCardDashboard/NgoDetailCardDashboard";
import { Scrollbars } from "react-custom-scrollbars";

import "./Dashboard.css";
import Utils from "../../Utils/Utils";

class Dashboard extends Component {
  constructor(props){
    super(props);
    this.state = {
      details: {},
      availableDonation: 0,
      totalDonation: 0,
      myDonations: []
    }
  }

  componentDidMount(){
    if(window.accountId == null){
      this.props.history.push('/');
      return;
    }

    if(Object.keys(this.state.details) == 0){
      this.loadData();
    }
  }

  loadData(){
    Utils.getNGODetail(window.ngoId, (err, details) => {
      if(err){
        alert('Error loading details');
      }else{
        this.setState({details: details});
        this.forceUpdate();
      }
    });

    Utils.getTotalDonation((total) => {
      this.setState({totalDonation: total ? total : 0});
    });

    Utils.getAvailableDonation((av) => {
      this.setState({availableDonation: av ? av : 0});
    });

    this.loadMyDonations();
  }

  loadMyDonations(){
    window.web3.eth.getBlockNumber()
      .then(bn => {
        window.contract.getPastEvents('Transaction', {
          fromBlock: bn-500,
          toBlock: 'latest'
        }, (err, events) => {
          console.log(err, events);
          if(err == null){
            console.log('Got events', events);
            this.state.myDonations = [];
            events.forEach(event => {
              this.state.myDonations.push({
                  to: event.returnValues.to,
                  from: event.returnValues.from,
                  amount: event.returnValues.amount,
              });
            });
          }else{
            console.log('Error getting events', err);
          }
          this.setState({loaded: true});
        });
        console.log('Current block', bn);
      });
  }

  render() {
    return (
      <div className="MainContainer">
        <div className="MobileContainer MobileContainerFlow">
          <Topbar title="NGO Dashboard" />
          <div className="NgoDetailCardDashboard-wrapper">
            <NgoDetailCardDashboard
              name={this.state.details.name}
              ngoid={window.ngoId}
              email={this.state.details.email}
              phone={this.state.details.mobile}
            />
          </div>
          <SubHeading value="Transactions" />
          <div className="Transaction-container">
            <Scrollbars autoHide autoHideTimeout={1000} autoHideDuration={200}>
              {this.state.myDonations.map(donation => {
                return(
                  <TransactionCard
                    username={donation.from}
                    tid={window.ngoId}
                    pamount={donation.amount + " WEI"}
                  />
                );
              })}
            </Scrollbars>
          </div>
          <div className="Fixed-bottom-wrapper">
            <div className="DonationsStats">
              <div className="stats-container">
                <p className="StatsParameter"> Total</p>
                <p className="statsValue">{this.state.totalDonation} WEI</p>
              </div>
              <div className="stats-container">
                <p className="StatsParameter">Available </p>
                <p className="statsValue">{this.state.availableDonation} WEI</p>
              </div>
            </div>
            <span className="middleLine"></span>
            <div>
              <Button value="Withdraw" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
