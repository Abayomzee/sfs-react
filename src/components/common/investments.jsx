import React, { Component } from "react";

class Investments extends Component {
  state = {};
  render() {
    return (
      <div className="packages">
        <div className="packages_img"></div>
        <div className="packages_desc">
          <div className="top">
            <div className="title_text">
              <p>Investment Title</p>
            </div>
            <div className="edit">
              <i className="fas fa-pen"></i>
              <i className="fas fa-trash-alt"></i>
            </div>
          </div>

          <div className="middle">
            <p>
              The Company currently operates in 25 states in Nigeria including
              the Federal Capital Territory– Abuja. With a staff strength ...
            </p>
          </div>

          <div className="bottom">
            <div className="buttons">
              <button className="topup">Top up</button>
              <button className="redeem">Redeem</button>
            </div>
            <div className="price">
              <h2>₦ 501,500.00</h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Investments;
