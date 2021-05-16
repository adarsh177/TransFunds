import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./ListYourNgo.css";
import Topbar from "../../components/Topbar/Topbar";
import SubHeading from "../../components/SubHeading/SubHeading";
import { Scrollbars } from "react-custom-scrollbars";
import Utils from "../../Utils/Utils";
import OTPDialog from "../../components/OTPDialog";

export class ListYourNgo extends Component {
  constructor(props){
    super(props);
    this.state={
      vid: '',
      ngoId: '',
      email: '',
      showOtp: false,
    }
  }

  onSubmit(){
    let id = document.getElementById('NgoId').value;
    if(id == ""){
      alert('Enter valid id');
    }else{
      Utils.sendOtp(id, (vid, email) => {
        if(vid){
          this.setState({
            showOtp: true,
            ngoId: id,
            vid: vid,
            email: email
          });
        }else{
          alert('Error sending otp');
        }
      })
      
    }
  }

  onOtpSubmit(otp){
    if(otp.length != 6){
      alert('Enter valid otp');
    }else{
      Utils.verifyOtp(this.state.ngoId, otp, this.state.vid, window.accountId, (status) => {
        this.setState({showOtp: false});
        if(status){
          alert('NGO Listed');
          window.accountId = null;
          this.props.history.push('/');
        }else{
          alert('Error verifying otp');
        }
      })
    }
  }

  render() {
    let instructions =
      "";
    return (
      <div className="MainContainer">
        <div className="MobileContainer MobileContainerFlow">
          <OTPDialog show={this.state.showOtp} email={this.state.email} onOtp={(otp) => this.onOtpSubmit(otp) }/>
          <Topbar title="List Your NGO" />
          <div className="registerNgo-wrapper">
            <input
              type="text"
              id="NgoId"
              className="ngoid-textfield"
              placeholder="Enter your NGO ID (GOVT. Registration No.)"
            />
            <button type="Submit" className="listNgoSubmit-btn" onClick={() => this.onSubmit()}>
              SUBMIT
            </button>
          </div>
          <SubHeading value="Instructions" />
          <Scrollbars autoHide autoHideTimeout={1000} autoHideDuration={200}>
            <p className="instruction-content">{instructions}</p>
          </Scrollbars>
        </div>
      </div>
    );
  }
}

export default withRouter(ListYourNgo);
