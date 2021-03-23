import React from "react";
import { Link } from "react-router-dom";
import OnboardSideNav from "./../common/onboardingSideNav";
import OnboardingBackToHome from "./../common/onboardingBackToHomeLink";
import Form from "./../common/form";
import Joi from "joi-browser";

class AddBank extends Form {
  state = {
    data: {
      nameOnCard: "",
      cardNumber: "",
      securityNumber: "",
      expireyDate: "",
    },
    error: {},
  };

  schema = {
    nameOnCard: Joi.string().required().label("Name on card"),
    cardNumber: Joi.number().required().label("Card Number"),
    securityNumber: Joi.number().required().label("Security Number"),
    expireyDate: Joi.string().required().label("Expirey Date"),
  };

  render() {
    return (
      <section>
        <div class="login_page_main_div">
          <OnboardSideNav />

          <div class="login_right_section">
            <OnboardingBackToHome />

            <div class="center_form pt-4">
              <div class="login_form_div pt-5">
                <div class="form_title">
                  <h1 class="create_acc_text">Add Bank Card</h1>
                  <p>Please add you bank card for easy access to featues</p>
                </div>

                <div class="login_inputs">
                  <form action="">
                    {this.renderInput("nameOnCard", "Name on card")}
                    {this.renderInput("cardNumber", "Card Number")}
                    {/* <Input label="Name on card" />

                    <Input label="Card Number" /> */}

                    <div class="input_div half_input_div">
                      <div class="col_6">
                        {this.renderInput("securityNumber", "Security Number")}

                        {/* <Input label="Security Number" /> */}
                      </div>
                      <div class="col_6">
                        {this.renderInput("expireyDate", "Expirey Date")}

                        {/* <Input label="Expirey Date" /> */}
                      </div>
                    </div>

                    <div class="btn_below_link">
                      <div class="forLink prev_color">
                        <Link to="#">Previous</Link>
                      </div>

                      <div class="forButton">
                        <Link to="/accountSuccess">Signup</Link>
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

export default AddBank;
