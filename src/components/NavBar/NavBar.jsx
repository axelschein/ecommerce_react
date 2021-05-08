import React from "react";
import "./navBar.css";
import CartWidget from "../CartWidget/CartWidget"
import {Link} from "react-router-dom"

export const NavBar = () => {
  return (
    <nav>
        <div className="contain">
            <ul className="navbar-left">
              <li>
                <Link to='/' id="brandName" href="#">Cupcake shop !</Link>
              </li>
            
              <li>
                <Link to='/category/cupcakes' >Cupcakes</Link>
              </li>
              <li>
                <Link to='/category/cakes' >Cakes</Link>
              </li>
            </ul> 
            <ul className="navbar-right">
              <li><CartWidget /> </li>
              
            </ul> 
        </div> 
    </nav>
      );
};

export default NavBar;