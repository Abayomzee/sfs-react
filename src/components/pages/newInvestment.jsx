import React, { Component } from "react";
import { Link } from "react-router-dom";
import DashboardSideNav from "./../common/dashboardSideNav";
import DashboardTopNav from "./../common/dashboardTopNav";
import InvestmentCard from "../common/investmentCards";
import TableHead from "../common/tableHead";
import TableBody from "../common/tableBody";

import { getInvestments } from "../../services/investmentsServices";

class NewInvestments extends Component {
  state = {
    investments: [],
  };

  componentDidMount() {
    const investments = getInvestments();
    this.setState({ investments });
  }

  render() {
    const { investments: allInvestments } = this.state;
    return (
      <div className="main_dashboad_wrapper">
        <DashboardSideNav />

        <div className="dashboard_body">
          <DashboardTopNav />

          <div className="dashboard_body_content">
            <div className="page_title_text">
              <div className="text">
                <h4>My Investments</h4>
                <p>Select your investment plan of interest</p>
              </div>
              <div className="button">
                <i className="fas fa-filter"></i>
                Filter
                <i className="fas fa-angle-down"></i>
              </div>
            </div>

            <div className="investment_types">
              {allInvestments.map((investment) => (
                <InvestmentCard id={investment.id} investment={investment} />
              ))}
            </div>

            <div className="log_title">
              <div>
                <p>My Portfolio</p>
              </div>
              <div>
                <Link to="#">View All</Link>
              </div>
            </div>

            <div className="logs">
              <div className="history_table_wrapper">
                <div className="history_table">
                  <table className="table table-hover">
                    <TableHead />
                    <TableBody />
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewInvestments;
