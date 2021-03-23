import React from "react";
import { Link } from "react-router-dom";
import DashboardSideNav from "../common/dashboardSideNav";
import DashboardTopNav from "../common/dashboardTopNav";
import $ from "jquery";
import Form from "./../common/form";
import Joi from "joi-browser";

class MyAccount extends Form {
  state = {
    data: {
      fullName: "",
      email: "",
      phoneNumber: "",
      currentPassword: "",
      newPassword: "",
      reEnterNewPassword: "",
    },
    error: {},
  };

  schema = {
    fullName: Joi.string(),
    email: Joi.string(),
    phoneNumber: Joi.number(),
    currentPassword: Joi.string(),
    newPassword: Joi.string(),
    reEnterNewPassword: Joi.string(),
  };

  componentDidMount() {
    $(".links .password_link").click(function () {
      $(".links div").not(this).removeClass("active");
      $(this).addClass("active");

      $("[id*='myaccount_']").not("#myaccount_update_password").fadeOut(300);
      $("#myaccount_update_password").delay(300).fadeIn();
    });

    $(".links .profile_link").click(function () {
      $(".links div").not(this).removeClass("active");
      $(this).addClass("active");

      $("[id*='myaccount_']").not("#myaccount_profile").fadeOut(300);
      $("#myaccount_profile").delay(300).fadeIn();
    });
  }

  render() {
    return (
      <div className="main_dashboad_wrapper">
        <DashboardSideNav />

        <div className="dashboard_body">
          <DashboardTopNav />

          <div className="extra_space">
            <div className="account_title_text">
              <h5>My Account</h5>
            </div>

            <div className="myAccount_settings">
              <div class="links">
                <div class="profile_link active">
                  <span>Profile</span>
                </div>
                <div class="password_link">
                  <span>Password</span>
                </div>
                <div class="pin_link">
                  <span>Transaction pin</span>
                </div>
              </div>

              <div class="settings_info" id="myaccount_profile">
                <div class="header">
                  <p>Update your personal information</p>
                </div>

                <div class="settings_input">
                  <div class="prof_pics">
                    <div class="header">
                      <p>Your profile picture</p>
                    </div>

                    <div class="prof_image"></div>

                    <div class="edit">
                      <div>
                        <Link to="#">
                          <i class="fas fa-pen"></i> Change
                        </Link>
                      </div>
                      <div>
                        <Link to="#">
                          <i class="fas fa-trash-alt"></i> Delete
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div class="prof_form">
                    <div class="login_inputs">
                      <form onSubmit={this.handleSubmit}>
                        {this.renderInput("fullName", "Full Name")}
                        {this.renderInput("email", "Email address", "email")}
                        {this.renderInput("phoneNumber", "Phone Number")}

                        <div class="btn_full">
                          {this.renderButton("Update Profile")}
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>

              <div class="settings_info" id="myaccount_update_password">
                <div class="header">
                  <p>Update your current password by comfirming the new one</p>
                </div>

                <div class="password_update">
                  <div class="login_inputs">
                    <form onSubmit={this.handleSubmit}>
                      {this.renderInput(
                        "currentPassword",
                        "Current Password",
                        "password"
                      )}
                      {this.renderInput(
                        "newPassword",
                        "New Password",
                        "password"
                      )}
                      {this.renderInput(
                        "reEnterNewPassword",
                        "Re-enter Password",
                        "password"
                      )}

                      <div class="btn_full bg_blue">
                        <button>Update Password</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MyAccount;
