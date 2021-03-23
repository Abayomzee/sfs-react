import React from "react";
import { Link } from "react-router-dom";

import OnboardingBackToHome from "./../common/onboardingBackToHomeLink";
import OnboardSideNav from "./../common/onboardingSideNav";
import Form from "./../common/form";
import Joi from "joi-browser";

class Otp extends Form {
  state = {
    data: {
      code: "",
    },
    error: {},
  };

  schema = {
    code: Joi.number().required(),
  };

  doSubmit = () => {
    console.log("OTP form submitted");
  };
  render() {
    return (
      <section>
        <div className="login_page_main_div">
          <OnboardSideNav />

          <div className="login_right_section">
            <OnboardingBackToHome />

            <div className="center_form pt-4">
              <div className="login_form_div pt-5">
                <div className="form_title">
                  <h1 className="create_acc_text">Comfirm email address</h1>
                  <p>
                    We’ve sent a 6 digits code to your email tied this <br />
                    account. Enter code below
                  </p>
                </div>

                <div className="login_inputs">
                  <form onSubmit={this.handleSubmit}>
                    {this.renderInput("code", "Enter Code", "text", null, true)}

                    <div className="btn_below_link">
                      <div className="forLink prev_color">
                        <Link to="#">Previous</Link>
                      </div>

                      <div className="forButton">
                        {this.renderButton("Signup")}
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Otp;
