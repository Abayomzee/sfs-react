import React, { Component } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";

import images from "./../../utils/images";

class Index extends Component {
  state = {};

  componentDidMount() {
    var container_width = 435 * $(".each_comments").length;
    $(".each_comments_div").css("width", container_width + "px");
  }

  render() {
    return (
      <React.Fragment>
        {/* Header Section */}
        <div className="first">
          <div className="inner">
            <div className="left">
              <div className="logo">
                <Link to="/">
                  <img src={images.logo} alt="" />
                </Link>
              </div>

              <div className="header_title">
                <span>
                  Our Mission is to <br />
                  Empower your <br />
                  financial Freedom
                </span>
              </div>

              <div className="header_text">
                <p>
                  We help make dreams happen. Come to us with your <br />
                  dreams of a better future and we will make it <br />
                  happen.
                </p>
              </div>

              <div className="header_btn">
                <a href="create_account.html" className="start">
                  Get started now
                </a>
                {/* <a href="" className="learn">Learn more about us</a> */}
              </div>
            </div>
            <div className="right">
              <div>
                <Link to="/login">
                  <button className="login">Login</button>
                </Link>
              </div>

              <div>
                <Link to="/signup">
                  <button className="signup">Signup</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* End of Header Section */}
        {/* Second section (Your guide section) */}
        <div class="second">
          <div class="second_container">
            <div class="second_title">
              <h4>
                Your guide to financial <br />
                wellness
              </h4>
            </div>

            <div class="services">
              <div class="each_service">
                <div class="service_icon">
                  <div>
                    <img src={images.service1} alt="" />
                  </div>
                </div>

                <div class="service_title">
                  <h4>Invest your spare change</h4>
                </div>

                <div class="service_text">
                  <p>
                    Save time, avoid losing work and information, delegate, and
                    track tasks to stay on schedule
                  </p>
                </div>
              </div>

              <div class="each_service">
                <div class="service_icon">
                  <div>
                    <img src={images.service2} alt="" />
                  </div>
                </div>

                <div class="service_title">
                  <h4>Save for later</h4>
                </div>

                <div class="service_text">
                  <p>
                    Get ready for later in life using sfs Later, the easiest way
                    to save for retirement.
                  </p>
                </div>
              </div>

              <div class="each_service">
                <div class="service_icon">
                  <div>
                    <img src={images.service3} alt="" />
                  </div>
                </div>

                <div class="service_title">
                  <h4>Grow your knowledge</h4>
                </div>

                <div class="service_text">
                  <p>
                    Learn how to get more from your money with
                    easy-to-understand articles and videos from financial
                    experts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End of Second section (Your guide section) */}
        {/* Third section */}
        <div class="third">
          <div class="third_up">
            <div class="up_left">
              <img src={images.up} alt="" />
            </div>
            <div class="up_right">
              <h4>Security that's strong as oak</h4>
              <p>
                Do you waste time organizing sticky notes, searching your email
                and apps for to-dos, and figuring out what to work on first?
                Then you need one solution to prioritize your tasks, manage your
                time, and meet your deadlines.
              </p>
            </div>
          </div>

          <div class="third_up">
            <div class="up_left hide_img">
              <img src={images.down} alt="" />
            </div>

            <div class="up_right">
              <h4>Why you should invest in your future</h4>
              <p>
                Do you waste time organizing sticky notes, searching your email
                and apps for to-dos, and figuring out what to work on first?
                Then you need one solution to prioritize your tasks, manage your
                time, and meet your deadlines.
              </p>
            </div>

            <div class="up_left show_img">
              <img src={images.down} alt="" />
            </div>
          </div>
        </div>
        {/* End of Third section */}
        {/* Fourth section */}
        <div class="fourth">
          <div class="second_container">
            <h4>
              What investors like you <b>are</b>
              <br />
              <b>saying about</b> SFS
            </h4>
          </div>

          <div class="comments">
            <div class="each_comments_div">
              <div class="each_comments">
                <div class="name_role">
                  <p>Fernando Soler</p>
                  <span>Telecommunication Engineer</span>
                </div>

                <div class="comment_text">
                  <p>
                    Quis autem vel eum iure reprehenderit qui in ea voluptate
                    velit esse quam nihil molestiae consequatur, vel illum qui
                    dolorem eum fugiat quo voluptas nulla pariatur? At vero eos
                    et
                  </p>
                </div>
              </div>

              <div class="each_comments">
                <div class="name_role">
                  <p>Fernando Soler</p>
                  <span>Telecommunication Engineer</span>
                </div>

                <div class="comment_text">
                  <p>
                    Quis autem vel eum iure reprehenderit qui in ea voluptate
                    velit esse quam nihil molestiae consequatur, vel illum qui
                    dolorem eum fugiat quo voluptas nulla pariatur? At vero eos
                    et
                  </p>
                </div>
              </div>

              <div class="each_comments">
                <div class="name_role">
                  <p>Fernando Soler</p>
                  <span>Telecommunication Engineer</span>
                </div>

                <div class="comment_text">
                  <p>
                    Quis autem vel eum iure reprehenderit qui in ea voluptate
                    velit esse quam nihil molestiae consequatur, vel illum qui
                    dolorem eum fugiat quo voluptas nulla pariatur? At vero eos
                    et
                  </p>
                </div>
              </div>

              <div class="each_comments">
                <div class="name_role">
                  <p>Fernando Soler</p>
                  <span>Telecommunication Engineer</span>
                </div>

                <div class="comment_text">
                  <p>
                    Quis autem vel eum iure reprehenderit qui in ea voluptate
                    velit esse quam nihil molestiae consequatur, vel illum qui
                    dolorem eum fugiat quo voluptas nulla pariatur? At vero eos
                    et
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End of Fourth section */}
        {/* Footer section */}
        <div class="footer">
          <div class="second_container">
            <div class="futa_header">
              <div class="text_1">
                <h5>
                  Our <br />
                  channels
                </h5>
              </div>
              <div class="text_2">
                <p>
                  Get access to sfs life using <br />
                  any of the following plaforms
                </p>
              </div>
            </div>

            <div class="footer_icon_widget">
              <div class="ft_1">
                <div class="icon_img">
                  <img src={images.v3} alt="" />
                </div>

                <div class="download_inst">
                  <span>
                    <i class="fas fa-download"></i> Download on <br />
                    Play Store
                  </span>
                </div>
              </div>
              <div class="ft_2">
                <div class="icon_img">
                  <img src={images.v2} alt="" />
                </div>

                <div class="download_inst">
                  <span>
                    <i class="fas fa-download"></i> Download on <br />
                    App Store
                  </span>
                </div>
              </div>
              <div class="ft_3">
                <div class="icon_img">
                  <img src={images.v1} alt="" />
                </div>

                <div class="download_inst">
                  <span>
                    <i class="fas fa-download"></i> Get Started <br />
                    Online
                  </span>
                </div>
              </div>
              <div class="ft_4">
                <p>Contact us for more infomation</p>

                <p>Info@sfsnigeria.com</p>

                <p>098-793 079-383</p>
              </div>
            </div>

            {/* <div class="last_futa_section">

                <div>
                    <a href="#"> FAQ </a>
                </div>
                <div>
                    <a href="#"> Terms & Conditions </a>
                </div>
                <div>
                    <a href="#"> Privacy Policy </a>
                </div>

            </div> */}
          </div>
        </div>
        {/* End of Footer section */}
      </React.Fragment>
    );
  }
}

export default Index;
