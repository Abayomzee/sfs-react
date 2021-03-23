import React from "react";
// import images from "../../utils/images";

const InvestmentDetailsCard = ({ investment }) => {
  return (
    <div className="invest_detail_desc">
      <div className="left">{/* <img src={images.bigLogo} alt="" /> */}</div>

      <div className="right">
        <div className="right_header">
          <h4> {investment.investmentName} </h4>
          <p>{investment.investmentDescription}</p>
        </div>

        <div className="right_footer">
          <div>
            <p>Interest</p>
            <p>10% monthly</p>
          </div>

          <div>
            <p>Minimum investment amount</p>
            <p>₦ 200,000.00</p>
          </div>

          <div>
            <p>Expected Payoff</p>
            <p>₦ 260,500.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentDetailsCard;
