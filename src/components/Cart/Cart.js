import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

export const Cart = () => {
    const {cart, addItem, cartLength, cartPrice, clear} = useContext(CartContext)

    return (
        <div> 
            {
            !cart.length ? 
            <h2>No hay items en el carrito <Link to='/'>Ir al home</Link></h2>
            : (<>
                <div>Titulo</div><div>Cantidad</div><button>Borrar</button>
                <div>Titulo</div><div>Cantidad</div><button>Borrar</button>
                <div>Titulo</div><div>Cantidad</div><button>Borrar</button>
                

                <div>Total</div>
                </>


            )
            }

        </div>
    )


}