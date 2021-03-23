import React from "react";
import { Link } from "react-router-dom";

const OnboardSideNav = () => {
  return (
    <div className="login_left_section">
      <Link to="/">
        <div className="company_logo">
          <h3>SFS</h3>
          <span>Capital</span>
        </div>
      </Link>

      <div className="welcome_note">
        <p>Welcome to:</p>

        <h1>
          SFS Financial <br />
          service Group
        </h1>

        <p>
          product of a Management Buy-out of <br />
          Skye Financial Services Limited.
        </p>
      </div>

      <div className="patners_login_page"></div>
    </div>
  );
};

export default OnboardSideNav;
