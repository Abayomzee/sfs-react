import React from "react";
import DashboardSideNav from "../common/dashboardSideNav";
import DashboardTopNav from "../common/dashboardTopNav";

import images from "../../utils/images";
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div className="main_dashboad_wrapper">
      <DashboardSideNav />

      <div className="dashboard_body">
        <DashboardTopNav />

        <div className="dashboard_body_content">
          <div className="center_form_success">
            <div className="acc_success_div">
              <div className="check_img">
                <img src={images.acctSuccess} alt="" />
              </div>

              <div className="success_texts">
                <h4>Account Created Successfully</h4>
                <p>
                  Your account has been successfully created, but to get <br />
                  started, we need some information from you, this won’t <br />
                  take long
                </p>
              </div>

              <div className="btn_continue">
                <Link to="/dashboard">
                  <button>Continue</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
