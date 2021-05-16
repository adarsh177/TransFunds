import React from "react";
import { withRouter, Link } from "react-router-dom";
import "./Dashboard.css";
import Topbar from "../../components/Topbar/Topbar";
import Button from "../../components/Button/Button";
import SubHeading from "../../components/SubHeading/SubHeading";
import DashboardCard from "../../components/DashboardCard/DashboardCard";
import { Scrollbars } from "react-custom-scrollbars";

class Dashboard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      myDonations: [], // {to, from, amount}
      loaded: false,
    };
  }

  componentDidMount(){
    if(window.accountId == null){
      this.props.history.push('/');
      return;
    }
    
    if(!this.state.loaded)
      this.loadMyDonations();
  }

  loadMyDonations(){
    window.contract.getPastEvents('Transaction', (err, events) => {
      console.log(err, events);
      if(err == null){
        console.log('Got events', events);
        this.state.myDonations = [];
        events.forEach(event => {
            if(event.returnValues.to !== null && event.returnValues.from !== null && event.returnValues.amount !== null){
                this.state.transactions.push({
                    to: event.returnValues.to,
                    from: event.returnValues.from,
                    amount: event.returnValues.amount,
                });
            }
        });
      }else{
        console.log('Error getting events', err);
      }
      this.setState({loaded: true});
    }).then(rslt => {
      console.log('eve rslt', rslt);
    }).catch(ex => {
      console.log('ev err', ex);
    });
  }

  render() {
    return (
      <div className="MainContainer">
        <div className="MobileContainer MobileContainerFlow">
          <Topbar title="Dashboard" />
          <div className="walletID-wrapper">
            <p className="walletID-heading">Wallet ID -</p>
            <p className="walletID"> {window.accountId}</p>
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
            {
              this.state.myDonations.map(
                donation => {
                  return(
                    <DashboardCard
                      ngo_name={donation.to}
                      tID="-"
                      amount={donation.amount}
                      src="https://codesign.com.bd/conversations/content/images/2020/03/Sprint-logo-design-Codesign-agency.png"
                    />
                  );
                }
              )
            }
          </Scrollbars>
        </div>
      </div>
    );
  }
}

export default withRouter(Dashboard);
