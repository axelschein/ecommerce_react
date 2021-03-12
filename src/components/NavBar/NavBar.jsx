import React from "react";
import "./navBar.css";
import CartWidget from "../CartWidget/CartWidget"

export const NavBar = () => {
  return (
    <nav>
        <div class="contain">
            <ul class="navbar-left">
            <li id="brandName"><a href="#">E commerce</a></li>
            <li><a href="#about">About</a></li>
            </ul> 

            <ul class="navbar-right">
            <li><CartWidget /> </li>
            </ul> 
        </div> 
    </nav>
      );
};

export default NavBar;