import React, { Component } from "react";
import images from "../../utils/images";

class DashboardTopNav extends Component {
  state = {};
  render() {
    return (
      <div className="dasboard_nav">
        <div className="notification">
          <p>Hi Andie! you are yet to complete your account setup</p>
        </div>
        <div className="user_sett">
          <div className="user_image">
            <img src={images.user} alt="" />
          </div>
          <div className="user_name">
            <p>
              Andie kane <i className="fas fa-angle-down"></i>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default DashboardTopNav;
