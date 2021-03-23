import React from "react";
import OnboardSideNav from "./../common/onboardingSideNav";
import OnboardingBackToHome from "./../common/onboardingBackToHomeLink";
import Form from "./../common/form";
import Joi from "joi-browser";

class PinSetup extends Form {
  state = {
    data: { pin: "", newPin: "" },
    error: {},
  };

  schema = {
    pin: Joi.number().required(),
    newPin: Joi.number().required(),
  };
  render() {
    return (
      <section>
        <div className="login_page_main_div">
          <OnboardSideNav />

          <div className="login_right_section">
            <OnboardingBackToHome />

            <div className="center_form">
              <div className="login_form_div">
                <div className="notification_green">
                  <p>
                    <i className="fas fa-lock"></i> Your pin has been created
                    successfully
                  </p>
                </div>

                <div className="form_title">
                  <h1 className="create_acc_text">Pin Setup</h1>
                  <p>
                    Please setup your four digit transaction Pin to continue
                  </p>
                </div>

                <div className="login_inputs">
                  <form action="">
                    {this.renderInput("pin", "Enter 4 Digit PIN")}
                    {this.renderInput("newPin", "Comfirm 4 Digit Pin")}

                    <a href="./add_bank.html">
                      <div className="btn_full">
                        {this.renderButton("Setup Pin")}
                      </div>
                    </a>
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

export default PinSetup;
