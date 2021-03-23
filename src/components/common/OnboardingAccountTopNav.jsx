import React from "react";
import { Link } from "react-router-dom";

const OnboardingAccountTopNav = ({ userType }) => {
  return (
    <div className="login_mini_nav">
      <div>
        <p>Don’t have an account?</p>
      </div>
      <div>
        <Link to={userType === "new" ? "/signup" : "/login"}>
          <button className="btn_getStarted">
            {userType === "new" ? "Signup" : "Login"}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default OnboardingAccountTopNav;
