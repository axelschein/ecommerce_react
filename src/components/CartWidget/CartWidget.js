import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
        
    const {cartLength} = useContext(CartContext);
    return <>
        <li>{ cartLength } </li>
        <li><Link to='/cart'> <i className="fa fa-shopping-cart"> </i></Link> </li> 
                
    </>
}
export default CartWidget;