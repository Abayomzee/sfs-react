import React, { Component } from "react";

import DashboardSideNav from "./../common/dashboardSideNav";
import DashboardTopNav from "./../common/dashboardTopNav";
import Investments from "../common/investments";
import { Link } from "react-router-dom";

class MyInvestments extends Component {
  state = {};
  render() {
    return (
      <div className="main_dashboad_wrapper">
        <DashboardSideNav />

        <div className="dashboard_body">
          <DashboardTopNav />

          <div className="dashboard_body_content">
            <div className="page_title_text">
              <div className="text">
                <h4>My Investments</h4>
              </div>
              <div className="button">
                <Link to="/newInvestments">
                  <span>
                    <span>+</span> Add new
                  </span>
                </Link>
              </div>
            </div>

            <Investments />
            <Investments />
            <Investments />
            <Investments />
          </div>
        </div>
      </div>
    );
  }
}

export default MyInvestments;
