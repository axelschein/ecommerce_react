import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./Cart.css";

// export const Cart = () => {
//     const {cart,removeItem, cartLength, cartPrice, clear} = useContext(CartContext)

//     return (
//         <div>  
//             {!cart.length ? 
//                 <h2>No hay items en el carrito <Link to='/'>Ir al home</Link></h2> 
//                 : (
//                 <>
//                     {cart.map(cartItem => (
//                         <div key={cartItem.item.id} >
//                             <div> Titulo:  {cartItem.item.id}  </div>
//                             <div> cantidad: {cartItem.quantity} </div>
//                             <button onClick={()=> removeItem(cartItem.item.id)}>borrar</button>
//                         </div>)
//                     )}
                    

//                     <div>Total:{cartLength} y {cartPrice}</div> 
//                     <button onClick={clear}>Borrar todo</button>
//                 </>


//         )

//         } 
           
            

//         </div>
//     )


// }

// const mapStateToProps = (state, props) => {
//     return {
//         items: getItems(state, props),
//         currency: getCurrency(state, props),
//         total: getTotal(state, props)
//     }
// }

// const mapDispatchToProps = (dispatch) => ({
//     removeFromCart: (id) => dispatch(removeFromCart(id))
// })

// export default connect(mapStateToProps, mapDispatchToProps)(Cart);

export const Cart = () => {

    const {cart,removeItem,cartLength,cartPrice,clear} = useContext(CartContext)


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
                <div>Total:{cartLength} y {cartPrice}</div> 
                <button onClick={clear}>Borrar todo</button>         
                {/* </>
            )
            } */}

        </div>
    )
}