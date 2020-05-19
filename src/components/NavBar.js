import React from "react";
import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <div class="topnav-container">
            <div class="topnav">            
            <Link to="/">Home </Link>
            /
            <Link to="/cryptids"> Cryptids</Link>
            </div>            
        </div>
    )
}

export default NavBar