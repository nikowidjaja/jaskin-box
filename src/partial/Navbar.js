import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
            <div className="navbar__logo">
                <img src={require("../assets/images/Logo Jaskin.svg")} alt="Logo Jaskin" />
                </div>                
            </div>
        )
    }
}
