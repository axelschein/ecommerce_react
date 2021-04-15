import React, { useContext, useState} from "react";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
        
    const {cart, setCart} = useContext(CartContext);
    console.log('cart', cart)
    console.log('setCart', setCart)


    return(
        <button id="cart"><i className="fa fa-shopping-cart"></i><span className="badge">3</span></button>
        
    );
};

export default CartWidget;