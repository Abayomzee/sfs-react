import React from "react";
import { Link } from "react-router-dom";
import images from "../../utils/images";

const DashboardSideNav = () => {
  return (
    <div className="side_nav">
      <div className="site_logo">
        <Link to="/">
          <img src={images.logo} alt="" />
        </Link>
      </div>

      <div className="side_links">
        <ul>
          <li>
            <Link to="/dashboard">
              <i className="fas fa-th-large"></i>
              Overview
            </Link>
          </li>
          <li>
            <Link to="#">
              <i className="fas fa-copy"></i>
              Investment
            </Link>
          </li>
          <li>
            <Link to="#">
              <i className="fas fa-sync-alt"></i>
              Transactions
            </Link>
          </li>
          <li>
            <Link to="#">
              <i className="fas fa-share-alt"></i>
              Invite Friends
            </Link>
          </li>
          <li>
            <Link to="#">
              <i className="fas fa-cloud-download-alt"></i>
              Download statement
            </Link>
          </li>
        </ul>
      </div>

      <div className="sideNav_footer">
        <p>2019 | Copright - sfs Capital</p>
      </div>
    </div>
  );
};

export default DashboardSideNav;
