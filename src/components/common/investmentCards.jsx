import React, { Component } from "react";
import images from "../../utils/images";
import { Link } from "react-router-dom";

class InvestmentCard extends Component {
  state = {};
  render() {
    const { investment } = this.props;
    return (
      <div className="one">
        <Link to={`/investmentDetails/${investment.id}`}>
          <div className="top">
            <div>
              <p> {investment.investmentName} </p>
            </div>
            <div>
              <img src={images.smallLogo} alt="" />
            </div>
          </div>

          <div className="midu">
            <p>InvestABLE Amount</p>
            <p>
              ₦ {investment.investmentMinAmout} <span> TO </span> ₦{" "}
              {investment.investmentMaxAmout}
            </p>
          </div>

          <div className="down">
            <p>Interest</p>
            <p>{investment.interestRate} monthly</p>
          </div>
        </Link>
      </div>
    );
  }
}

export default InvestmentCard;
