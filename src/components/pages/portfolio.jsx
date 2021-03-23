import React, { Component } from "react";
import DashboardTopNav from "../common/dashboardTopNav";
import DashboardSideNav from "../common/dashboardSideNav";
import TableHead from "../common/tableHead";
import TableBody from "../common/tableBody";
import Pagination from "../common/pagination";

class Portfolio extends Component {
  state = {};
  render() {
    return (
      <div className="main_dashboad_wrapper">
        <DashboardSideNav />

        <div className="dashboard_body">
          <DashboardTopNav />

          <div className="dashboard_body_content">
            <div className="transaction_history_forHistory">
              <div className="transaction_history_title">
                <div>
                  <h5>Transaction History</h5>
                </div>
                <div className="add_new_savings">
                  <p>
                    <i className="far fa-trash-alt"></i>
                    Clear all
                  </p>
                </div>
              </div>

              <div className="history_table_wrapper">
                <div className="history_table">
                  <table className="table table-hover">
                    <TableHead />
                    <TableBody />
                  </table>

                  <Pagination />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
