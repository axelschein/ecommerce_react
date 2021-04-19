import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
        
    const {totalItems} = useContext(CartContext);

    


    return <>
        
        <i className="fa fa-shopping-cart"> {totalItems}</i>
        
        
        
    </>
}

export default CartWidget;