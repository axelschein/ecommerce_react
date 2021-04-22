import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./Cart.css";


export const Cart = () => {

    const {cart,removeItem,cartLength,cartPrice,clear} = useContext(CartContext)

    const noItemComp = <h2>No hay Items en el carrito <Link to='/'>Ir al home </Link> </h2>;

    if(cartLength === 0) return noItemComp


    return (
        <div className="cart">
{/*             
            {
            !cart.length ?   
            <h2>No hay Items en el carrito <Link to='/'>Ir al home </Link> </h2>: (
            <> */}
                {cart.map(cartItem => (
                <div className="cartGrid" key= {cartItem.item.id} >
                    <div className="item-a"> 
                        <img className="imgChica" src={cartItem.item.pictureUrl}  alt="fotoItem" />
                    </div>
                    <div className="item-b"> Titulo:  {cartItem.item.name}  </div>
                    <div className="item-c"> cantidad: {cartItem.quantity} </div>
                    <button className="item-d" onClick={()=> removeItem(cartItem.item.id)}>borrar</button>
                </div>)
                )}
                <div> Cantidad:{cartLength} </div> 
                <div> Total: ${cartPrice}</div> 
                <button onClick={clear}>Borrar todo</button>         
                {/* </>
            )
            } */}

        </div>
    )
}