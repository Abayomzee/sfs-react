import React from "react";
import { Link } from "react-router-dom";

const OnboardingBackToHome = () => {
  return (
    <div className="login_mini_nav_two">
      <div>
        <Link to="/">
          <p>
            <i className="fas fa-arrow-left"></i>
            Back to Home
          </p>
        </Link>
      </div>
    </div>
  );
};

export default OnboardingBackToHome;
