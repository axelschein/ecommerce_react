import React, { Fragment } from "react";

export const NavBar = () => {
  return (
    <nav>
        <div class="container">
            <ul class="navbar-left">
            <li id="brandName"><a href="#">E commerce</a></li>
            <li><a href="#about">About</a></li>
            </ul> 

            <ul class="navbar-right">
            <li><a href="#" id="cart"><i class="fa fa-shopping-cart"></i> Cart <span class="badge">3</span></a></li>
            </ul> 
        </div> 
    </nav>
      );
};
