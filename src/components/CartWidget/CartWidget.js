import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
        
    const {totalItems} = useContext(CartContext);

    


    return <>
        
        <Link to='/cart'><i className="fa fa-shopping-cart"> {totalItems}</i></Link> 
        
        
        
    </>
}

export default CartWidget;