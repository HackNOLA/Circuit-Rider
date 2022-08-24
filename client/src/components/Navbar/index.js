import React from 'react';
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <div className="container">
            <img href="/" className="brand-logo logo-img valign-wrapper" alt="logo" src="https://www.ministrymatters.com/images/custom/28332/circuit_rider.jpg" />
                <div className="nav-wrapper">
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to={"/"}>Home</Link></li>
                        <li><Link to={"/game"}>Play</Link></li>
                        <li><Link to={"/about"}>About</Link></li>
                        <li><Link to={"/credits"}>Credits</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar