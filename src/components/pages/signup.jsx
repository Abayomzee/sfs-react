import React from "react";
import { Link } from "react-router-dom";
import OnboardingAccountTopNav from "./../common/OnboardingAccountTopNav";
import OnboardSideNav from "./../common/onboardingSideNav";
import Form from "./../common/form";
import Joi from "joi-browser";

class Signup extends Form {
  state = {
    data: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    error: {},
  };

  schema = {
    firstName: Joi.string().required().label("First Name"),
    lastName: Joi.string().required().label("Last Name"),
    email: Joi.string().required().label("email"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = () => {
    console.log("Form Submitted");
    this.props.history.go("/otp");
  };

  render() {
    return (
      <section>
        <div className="login_page_main_div">
          <OnboardSideNav />

          <div className="login_right_section">
            <OnboardingAccountTopNav userType="existing" />

            <div className="center_form">
              <div className="login_form_div">
                <div className="form_title">
                  <h1 className="create_acc_text">Create an account</h1>
                  <p>
                    Lets onboard you so we will know who you are. it will <br />
                    only take a minute
                  </p>
                </div>

                <div className="login_inputs">
                  <form action="">
                    {this.renderInput("firstName", "First Name")}
                    {this.renderInput("lastName", "Last Name")}
                    {this.renderInput("email", "Email", "email")}
                    {this.renderInput("password", "Password", "password")}

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

export default Signup;
