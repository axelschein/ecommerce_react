import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./Cart.css";
import firebase from 'firebase/app'
import 'firebase/firebase'
import { getFirestore } from "../../firebase";


export const Cart = () => {

    // {
    //     buyer: {name: 'Juan', phone: 'mi tel',}
    // }

    const {cart,removeItem,cartLength,cartPrice,clear} = useContext(CartContext)

    const generarOrden = () => {
        const db = getFirestore();

        const ordersCol = db.collection('orders')
        let orden = {}
        orden.date = firebase.firestore.Timestamp.fromDate(new Date());

        orden.buyer = { name:'Juan', phone:'mi telefono', email:'pepe86@AOL.com.ar' }
        orden.total = cartPrice;
        orden.items = cart.map(cartItem => {
            const id = cartItem.item.id;
            const title = cartItem.item.title;
            const price = cartItem.item.price * cart.quantity;
            return {id, title, price}   
        })

        ordersCol.add(orden)
        .then((IdDocumento) => {
            console.log({IdDocumento})
        })
        .catch( err => {
            console.log(err);
        })
        .finally(()=> {
            console.log('se termino la promesa')
        })

        console.log(orden);

    }

    const noItemComp = <h2>No hay Items en el carrito <Link to='/'>Ir al home </Link> </h2>;

    if(cartLength === 0) return noItemComp


    return (
        <div className="cart">
            
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

                <button onClick={generarOrden}>Finalizar Compra</button>     
                {/* </>
            )
            } */}

        </div>
    )
}