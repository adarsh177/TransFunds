import React, { Component } from "react";
import { withRouter } from "react-router";
import Topbar from "../../components/Topbar/Topbar";
import "./NgosList.css";
import { Scrollbars } from "react-custom-scrollbars";
import NgoListCard from "../../components/NgoListCard/NgoListCard";
import SearchIcon from "../../resources/search.png";
import Utils from "../../Utils/Utils";

export class NgosList extends Component {
  constructor(props){
    super(props);
    this.state = {
      ngos: [], //{id, name, field, location}
      loaded: false
    }
  }

  componentDidMount(){
    if(window.accountId == null){
      this.props.history.push('/');
      return;
    }

    if(!this.state.loaded)
      this.loadNGOs();
  }

  loadNGOs(){
    window.contract.methods.GetNGOList()
      .call({from: window.accountId})
      .then(rslt => {
        rslt.forEach(ngo => {
          Utils.getNGODetail(ngo, (err, rslt)=> {
            if(err){
              console.log('Error loading ngos: ' + err);
            }else{
              this.state.ngos.push({
                id: ngo,
                name: rslt.name,
                field: rslt.field,
                name: rslt.name,
                location: rslt.location
              });
              this.forceUpdate();
            }
          });
        })
        console.log(rslt);
      }).catch(err => {
        console.log('err', err);
      });
  }


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
            <button className="search-btn">
              <img className="search-img" src={SearchIcon} alt="search icon" />
            </button>
          </div>
          <span className="ngoslist-line"></span>
          <Scrollbars autoHide autoHideTimeout={1000} autoHideDuration={200}>
            {this.state.ngos.map(
              ngo => {
                return(
                  <NgoListCard
                    ngoname={ngo.name}
                    ngoid={ngo.id}
                    location={ngo.location}
                    field={ngo.field.substring(0, 100)}
                    source="https://codesign.com.bd/conversations/content/images/2020/03/Sprint-logo-design-Codesign-agency.png"
                  />
                );
              }
            )}
          </Scrollbars>
        </div>
      </div>
    );
  }
}

export default withRouter(NgosList);
