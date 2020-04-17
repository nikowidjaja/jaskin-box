import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import NavLink from "react-bootstrap/NavLink";
import Nav from "react-bootstrap/Nav";
import withRouter from "react-router-dom/withRouter";

class Navbars extends Component {
  render() {

    //CHANGE THIS ASAP
    const match1 = window.location.pathname === "/";
    const match2 = window.location.pathname === "/About";
    const match3 = window.location.pathname === "/Contact";

    return (
      <React.Fragment>
        <Navbar sticky="top" collapseOnSelect expand="sm" className="navbar">
          <Navbar.Brand href="/">
            <img
              className="logo-image"
              src={require("../assets/images/Logo Jaskin.svg")}
              alt=""
            />{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="nav-items">
              <NavLink
                className={`nav-link ${match1 ? "active" : ""}`}
                activeClassName={"on"}
                onClick={() => {
                  window.location.href = "./";
                }}
              >
                Home
              </NavLink>
              <NavLink
                // className="nav-link"
                className={`nav-link ${match2 ? "active" : ""}`}

                onClick={() => {
                  window.location.href = "./About";
                }}
              >
                About
              </NavLink>
              <NavLink
                // className="nav-link"
                className={`nav-link ${match3 ? "active" : ""}`}

                onClick={() => {
                  window.location.href = "./Contact";
                }}
              >
                Contact
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default withRouter(Navbars);
