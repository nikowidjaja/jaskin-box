import React, { Component } from "react";
import Navbars from "../partial/Navbar";
import Footer from "../partial/Footer";

export default class Contact extends Component {
  componentDidMount() {
    document.getElementsByClassName("navbar")[0].style.backgroundColor = "#e096c0";
    document.getElementsByClassName("footer")[0].style.backgroundColor="#e096c0";
  }
  render() {
    return (
      <React.Fragment>
        <Navbars />
        <div className="contact">
          <div className="contact--left">
            <div className="contact--left__email">marketing@jaskin.co.id</div>
            <div className="contact--left__text text-default">
              PT JAWASURYA KENCANA INDAH
              <br />
              Kawasan Industri Terboyo
              <br />
              Blok N No. 1 Terboyo Park Semarang - Indonesia <br />
              Telp : (024) 6585034 <br />
              Fax : (024) 6584975
            </div>
          </div>
          <div className="contact--right">
            <img
              alt="/"
              src={require("../assets/images/Illustration/I-Contact.png")}
            />
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}
