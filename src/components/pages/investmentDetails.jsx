import React, { Component } from "react";
import InvestmentDetailsCard from "../common/investmentDetailsCard";
import DashboardSideNav from "../common/dashboardSideNav";
import DashboardTopNav from "../common/dashboardTopNav";
import InvestmentModal from "./../common/investmentModal";
import { Line } from "react-chartjs-2";
import data from "./../../utils/chart";
import { getInvestment } from "./../../services/investmentsServices";

class InvestmentDetails extends Component {
  state = {
    investment: {},
  };

  componentDidMount() {
    const investmentId = this.props.match.params.id;
    const investment = getInvestment(investmentId);
    this.setState({ investment });
  }

  render() {
    const { investment } = this.state;
    return (
      <React.Fragment>
        <div className="main_dashboad_wrapper">
          <DashboardSideNav />

          <div className="dashboard_body">
            <DashboardTopNav />

            <div className="dashboard_body_content">
              <div className="invest_detail_top">
                <div className="title">
                  <h4>Investment Details</h4>
                </div>

                <div className="invest_btn green_btn">
                  <button data-toggle="modal" data-target="#meep_settings">
                    Invest Now
                  </button>
                </div>
              </div>

              <InvestmentDetailsCard investment={investment} />

              <div className="chart_section">
                {/* <canvas id="myChart"></canvas> */}
                <Line data={data} />
              </div>
            </div>
          </div>
        </div>

        <InvestmentModal />
      </React.Fragment>
    );
  }
}

export default InvestmentDetails;
