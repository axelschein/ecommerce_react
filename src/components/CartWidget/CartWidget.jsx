import React, { useContext, useState} from "react";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
        
    const {cartLength} = useContext(CartContext);

    


    return <>
        {cartLength? <i className="fa fa-shopping-cart"> {cartLength}</i>: null}
        
        
    </>
};

export default CartWidget;