import React from "react";
import OnboardingAccountTopNav from "./../common/OnboardingAccountTopNav";
import OnboardSideNav from "./../common/onboardingSideNav";
import { Link } from "react-router-dom";
import Form from "./../common/form";
import Joi from "joi-browser";

class Login extends Form {
  state = {
    data: { username: "", password: "" },
    error: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = () => {
    console.log("form submitted");
    this.props.history.push("/otp");
  };

  render() {
    return (
      <section>
        <div className="login_page_main_div">
          <OnboardSideNav />

          <div className="login_right_section">
            <OnboardingAccountTopNav userType="new" />

            <div className="center_form">
              <div className="login_form_div pt-5">
                <div className="form_title">
                  <h1 className="create_acc_text">Login</h1>
                  <p>
                    Sign in with your username or email <br />
                    and password
                  </p>
                </div>

                <div className="login_inputs">
                  <form onSubmit={this.handleSubmit}>
                    {this.renderInput("username", "Username")}
                    {this.renderInput("password", "Password", "password")}
                    <div className="btn_below_link">
                      <div className="forButton">
                        {this.renderButton("Login")}
                      </div>
                      <div className="forLink">
                        <Link to="#">Forgot Password?</Link>
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

export default Login;
