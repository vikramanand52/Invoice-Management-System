import React, { Component } from "react";
import abc from "../assests/Group 20399.png";
import logo from "../assests/logo.svg";

class Header extends Component {
    render() {
        return (
            <header
                style={{
                    minWidth: "1100px",
                    backgroundColor: "#2d4250",
                    height: "75px",
                }}
            >
                <div class="logo-flex">
                <div class="logo-item">
                <img
                    src={abc}
                    alt="ABC logo"
                    style={{ marginTop: "15px",}}
                />  
                </div>
                <div class="logo-item">
                    <a href="https://www.highradius.com/" target="_blank" rel="noreferrer">
                <img
                    src={logo}
                    alt="HRC Logo"
                    style={{
                        marginTop: "15px",
                    }}
                /></a>
                </div>
                </div>
            </header>
        );
    }
}

export default Header;
