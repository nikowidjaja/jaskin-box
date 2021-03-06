import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer__logo">
          © 2019 PT Jawasurya Kencana Indah. All Rights Reserved
        </div>
        <div className="footer__side">
          <div className="footer__side__items" onClick={() => {
            window.location.href = "./";
          }}>Home</div>
          <div className="footer__side__items" onClick={() => {
            window.location.href = "./About";
          }}>About</div>
          <div className="footer__side__items" onClick={() => {
            window.location.href = "./Contact";
          }}>Contact</div>
        </div>
      </div>
    );
  }
}
