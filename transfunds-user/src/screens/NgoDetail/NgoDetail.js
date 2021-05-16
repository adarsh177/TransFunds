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
import Utils from "../../Utils/Utils";
import DontaionDialog from "../../components/DonationDialog";

export class NgoDetail extends Component {
  constructor(props){
    super(props);
    this.state = {
      details: {},
      transactions: [],
      showDialog: false,
      total: 0,
    } 
  }

  componentDidMount(){
    if(Object.keys(this.state.details).length == 0)
      this.loadData();
  }

  loadData(){
    var data = {};
    var query = this.props.location.search.replace('?', '');
    query.split('&').forEach(pair => {
        data[pair.split('=')[0]] = pair.split('=')[1];
    })

    this.setState({id: data['id']});
    
    if(!data['id']){
        this.props.history.goBack();
        return;
    }

    this.loadTotalDonation(data['id']);
    Utils.getNGODetail(data['id'], (err, details) => {
      if(err == null){
        this.setState({details: details});
        console.log('Details', details);
        this.forceUpdate();
      }else{
        this.props.history.goBack();
        alert('Error loading information');
      }
      this.loadTransactions(data['id']);
    });
  }

  loadTransactions(id){
    // window.contract.events.Transaction()
    //   .on('data', (data) => {
    //     alert(JSON.stringify(data));
    //   });

    window.web3.eth.getBlockNumber()
      .then(bn => {
        window.contract.getPastEvents('allEvents', {
          fromBlock: bn-500,
          toBlock: 'latest',
          filter: {
            to: id
          }
        }, (err, events) => {
          console.log(err, events);
          if(err == null){
            console.log('Got events', events);
            this.state.transactions = [];
            events.forEach(event => {
                if(event.returnValues.to !== null && event.returnValues.from !== null && event.returnValues.amount !== null){
                    this.state.transactions.push({
                        to: event.returnValues.to,
                        from: event.returnValues.from,
                        amount: event.returnValues.amount,
                    });
                }
            });
            this.forceUpdate();
          }else{
            console.log('Error getting events', err);
          }
          this.setState({loaded: true});
        });
        console.log('Current block', bn);
      });
  }

  onDonate(amount){
    amount = parseInt(amount, 10);
    if(amount > 0){
      this.setState({showDialog: false});
      window.contract.methods.DonateToNGO(this.state.id)
        .send({
          from: window.accountId,
          value: amount
        })
        .on("transactionHash", (hash) => {
          alert('Donation made successfully!');
          this.state.transactions.push({
            to: this.state.id,
            from: window.accountId,
            amount: amount
          });
          this.forceUpdate();
          this.loadData();
        })
        .on("error", (error, recept) => {
            alert("Errer making donation : " + error);
            console.log('Error making donation ', error, recept);
        });
    }else{
      alert('Please enter a valid amount');
    }
  }

  loadTotalDonation(id){
    window.contract.methods.GetTotalDonationOfNGO(id)
      .call()
      .then(donation => {
        this.setState({total: donation});
      }).catch(er => {
        console.log('Error getting total', er);
        this.setState({total: 0});
      })
  }

  render() {
    
    return (
      <div className="MainContainer">
        <div className="MobileContainer MobileContainerFlow">
          <DontaionDialog show={this.state.showDialog} onDonate={(amount)=> this.onDonate(amount)}/>
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
                    name={this.state.details.name}
                    ngoid={this.state.id}
                    phone={this.state.details.mobile}
                    email={this.state.details.email}
                    location={this.state.details.location}
                    donations={this.state.total}
                    onDonationClick={() => this.setState({showDialog: true})}
                  />
                </div>
                <SubHeading value="Working sector" />
                <div className="ws-content-wrapper">
                  <Scrollbars
                    autoHide
                    autoHideTimeout={1000}
                    autoHideDuration={200}
                  >
                    <p className="ws-content">{this.state.details.field}</p>
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
                    {this.state.transactions.map(
                      tr => {
                        return(
                          <TransactionCard
                            username={tr.from}
                            tid={tr.to}
                            pamount={tr.amount + "WEI"}
                          />
                        )
                      }
                    )}
                    
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
