import React from "react";
import "./navBar.css";
import CartWidget from "../CartWidget/CartWidget"
import {Link} from "react-router-dom"

export const NavBar = () => {
  return (
    <nav>
        <div class="contain">
            <ul class="navbar-left">
              <li>
                <Link to='/' id="brandName" href="#">Cupcakes commerce</Link>
              </li>
            
              <li>
                <Link to={`/category/1`} >Cupcakes</Link>
              </li>
              <li>
                <Link to={`/category/2`} >Cakes</Link>
              </li>
              </ul> 
              <ul class="navbar-right">
              <li><CartWidget /> </li>
            </ul> 
        </div> 
    </nav>
      );
};

export default NavBar;