import React from "react";
import $ from "jquery";
import images from "../../utils/images";
import Form from "./form";
import Joi from "joi-browser";

class InvestmentModal extends Form {
  state = {
    data: { amount: "", duration: "" },
    error: {},
  };

  schema = {
    amount: Joi.number().required().label("Amount"),
    duration: Joi.number().required().label("Duration"),
  };

  componentDidMount() {
    $(".link_part .investment_link").click(function () {
      $(".link_part div").not(this).removeClass("active");
      $(this).addClass("active");

      $("[id*='myinvest_']").not("#myinvest_investment").fadeOut(300);
      $("#myinvest_investment").delay(300).fadeIn();
    });

    $(".link_part .payment_link").click(function () {
      $(".link_part div").not(this).removeClass("active");
      $(this).addClass("active");

      $("[id*='myinvest_']").not("#myinvest_payment").fadeOut(300);
      $("#myinvest_payment").delay(300).fadeIn();
    });

    $("#goto_payment").click(function (e) {
      e.preventDefault();

      $(".investment_link").removeClass("active");
      $(".payment_link").addClass("active");

      $("#myinvest_investment").fadeOut(300);
      $("#myinvest_payment").delay(300).fadeIn();
    });
  }

  render() {
    return (
      <div className="modal fade" id="meep_settings">
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            {/* <!-- Modal Header --> */}
            <div className="modal-header">
              {/* <!-- <h4 className="modal-title">Modal Heading</h4> --> */}
              <button type="button" className="close" data-dismiss="modal">
                <span> Close </span> &times;
              </button>
            </div>

            {/* <!-- Modal body --> */}
            <div className="modal-body p-0">
              <div className="inv_deatails">
                <div className="upper_part">
                  <div className="">
                    <img src={images.logoo} alt="" />
                  </div>
                  <div className="inv_details_desc">
                    <div className="text">
                      <h4>SFS Fixed Income Fund</h4>
                    </div>

                    <div className="brk_down">
                      <div className="interest">
                        <span>Interest</span>
                        <p>13% monthly</p>
                      </div>
                      <div className="invest_amountt">
                        <span>Interest</span>
                        <p>
                          55, 000.00 <span> TO </span> 155, 000.00
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="link_part">
                  <div className="investment_link active">
                    <span>Investment</span>
                  </div>
                  <div className="payment_link">
                    <span>Payment</span>
                  </div>
                </div>

                <div className="investment" id="myinvest_investment">
                  <div className="form_desc">
                    <p>
                      Tell us how much and how long you will like to <br />
                      invest on this plan?
                    </p>
                  </div>

                  <div className="login_inputs">
                    <form action="">
                      {this.renderInput(
                        "amount",
                        "How much do you want to invest",
                        "text",
                        "How much"
                      )}

                      {this.renderInput("duration", "How long")}

                      <div className="btn_full bg_grey" id="goto_payment">
                        {this.renderButton("Next")}
                      </div>
                    </form>
                  </div>
                </div>

                <div className="payment pb-5" id="myinvest_payment">
                  <div className="card_options my-5 available_card">
                    <div>
                      <div className="card_icon">
                        <img src={images.mastercard} alt="" />
                      </div>

                      <div className="card_name">
                        <h6>MASTERCARD - 4567</h6>
                        <p>Guaranty Trust Bank</p>
                      </div>
                    </div>
                    <div className="icon_one">
                      <i className="fas fa-check-circle"></i>
                    </div>
                  </div>

                  <div className="card_options my-5 available_card">
                    <div>
                      <div className="card_icon">
                        <img src={images.mastercard} alt="" />
                      </div>

                      <div className="card_name">
                        <h6>MASTERCARD - 4567</h6>
                        <p>Guaranty Trust Bank</p>
                      </div>
                    </div>
                    <div className="icon_one">
                      <i className="fas fa-check-circle"></i>
                    </div>
                  </div>

                  <div className="btn_full">
                    <a href="./success.html">
                      <button>Purchase</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default InvestmentModal;
