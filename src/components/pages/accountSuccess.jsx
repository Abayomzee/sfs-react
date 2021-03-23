import React from "react";
import OnboardingBackToHome from "./../common/onboardingBackToHomeLink";
import OnboardSideNav from "./../common/onboardingSideNav";

import images from "../../utils/images";

const AccoutSuccess = () => {
  return (
    <section>
      <div class="login_page_main_div">
        <OnboardSideNav />

        <div class="login_right_section">
          <OnboardingBackToHome />

          <div class="center_form_success">
            <div class="acc_success_div">
              <div class="check_img">
                <img src={images.acctSuccess} alt="" />
              </div>

              <div class="success_texts">
                <h4>Account Created Successfully</h4>
                <p>
                  Your account has been successfully created, but to get <br />
                  started, we need some information from you, this won’t <br />
                </p>
              </div>

              <div class="btn_continue">
                <a href="pin_setup.html">
                  <button>Continue</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccoutSuccess;
