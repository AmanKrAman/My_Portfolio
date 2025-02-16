import React from "react";
import "./Footer.css";
import user_icon from "../../assets/user_icon.svg";
import logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={logo} alt="" />
          <p>
            As a full-stack developer, I'm driven by my passion for creating
            clean, efficient code and building innovative solutions that make a
            difference. I believe in continuous learning and staying at the
            forefront of technology trends to deliver the best possible results
            for every project.
          </p>
        </div>
        {/* <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt="" />
                    <input type="email" placeholder='Enter your email' />
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div> */}
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          @2025 Aman Kumar. All rights reserved.
        </p>
        <div className="footer-bottom-right">
          <p>Term of services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
