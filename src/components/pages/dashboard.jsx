import { Line } from "react-chartjs-2";
import { Link } from "react-router-dom";
import React from "react";

import DashboardSideNav from "./../common/dashboardSideNav";
import DashboardTopNav from "./../common/dashboardTopNav";
import data from "./../../utils/chart";
import images from "../../utils/images";

const Dashboard = () => {
  return (
    <div class="main_dashboad_wrapper">
      <DashboardSideNav />

      <div class="dashboard_body">
        <DashboardTopNav />
        <div class="dashboard_body_content">
          <div class="welcome_n_button">
            <div class="welcome">
              <h4>Hi, Welcome</h4>
            </div>
            <div class="buton">
              <Link to="/newInvestment">
                <button>
                  Invest Now
                  <img src={images.checkCircle} alt="" />
                </button>
              </Link>
            </div>
          </div>

          <div class="cards">
            <div class="first_card">
              <div class="card_title">
                <span>Total Invested</span>
              </div>
              <div class="amount_invested">
                <span>₦ 35, 001,500.00</span>
              </div>
              <div class="plans">
                <span>from 15 investment plans</span>
              </div>
            </div>

            <div class="second_card">
              <div class="card_title">
                <span>Total Invested</span>
              </div>
              <div class="amount_invested">
                <span>₦ 35, 001,500.00</span>
              </div>
              <div class="plans">
                <span>from 15 investment plans</span>
              </div>
            </div>

            <div class="third_card">
              <div class="card_title">
                <span>Total Invested</span>
              </div>
              <div class="amount_invested">
                <span>₦ 35, 001,500.00</span>
              </div>
              <div class="plans">
                <span>from 15 investment plans</span>
              </div>
            </div>
          </div>

          <div class="latest_investments">
            <div class="title">
              <h5>Latest Investments</h5>
            </div>

            <div class="investment_sections">
              <div class="fix_plan">
                <div class="product_container">
                  <div class="invest_products_image">
                    <div class="img_btn_link">
                      <Link to="#">Fixed Plan</Link>
                    </div>

                    <div class="img_desc">
                      <h4>investment Title</h4>

                      <p class="invest_desc">
                        The Company currently operates in 25 states in...
                      </p>
                    </div>
                  </div>

                  <div class="interest_percentage">
                    <p>interest</p>
                    <p>
                      <span>13% monthly</span>
                    </p>
                  </div>

                  <div class="invest_amount">
                    <div class="title">
                      <p>InvestABLE Amount</p>

                      <p>
                        <span>₦ 55,000.00</span>
                        <span> TO </span>
                        <span> ABOVE </span>
                      </p>
                    </div>
                  </div>

                  <div class="investors">
                    <p>INVESTORS</p>
                    <p>200</p>
                  </div>
                </div>
              </div>
              <div class="inv_chart">
                <div class="chart_title">
                  <p>Investment chart</p>
                </div>

                <div class="chart_section pt-0">
                  {/* <canvas id="myChart"></canvas> */}
                  <Line data={data} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
