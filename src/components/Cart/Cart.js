import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import firebase from 'firebase/app';

import { CartContext } from "../../context/CartContext";

import  {getFirestore} from "../../firebase";



import "./Cart.css";


export const Cart = () => {
    const [name,setName] = useState('')
    const [phone,setPhone] = useState('')
    const [email,setEmail] = useState('')

    const [idOrden, setIdOrden ] = useState(null)

    
    const {cart,removeItem,cartLength,cartPrice,clear} = useContext(CartContext)

    const guardarOrden = (e)=>{
        e.preventDefault();
        const comprador = { name, phone, email }
        
        console.log(comprador)

        const db = getFirestore();

        const orders = db.collection("orders");

        const date = firebase.firestore.Timestamp.fromDate(new Date());
        const items = cart.map(cartItem => {
            return {id: cartItem.item.id, title: cartItem.item.name, price: cartItem.item.price} 
        });
        const  newOrder = {
            buyer: comprador,
            items,
            date,
            total: cartPrice,
        };
        orders.add(newOrder).then(doc=>{
            setIdOrden(doc.id)
            
          
        })

        // orders
        // .add({buyer: {comprador, items, date, total:cartPrice} })
        // .then(doc=>{
        //     setIdOrden(doc.id)
        // })


        const itemsCollection = db.collection('items')
        .where(firebase.firestore.FieldPath.documentId(), 'in', cart.map(e => e.item.id))

       
        const batch = db.batch();
        const outOfStock = [];

        // por cada item restar del stock la cantidad de el carrito

        itemsCollection.get()
        .then( collection=>{
            collection.docs.forEach(docSnapshot => {
                if (docSnapshot.data().stock >= cart.find(item => item.item.id === docSnapshot.id).quantity)
                batch.update(docSnapshot.ref, {
                    stock: docSnapshot.data().stock - cart.find(item => item.item.id === docSnapshot.id).quantity
                })
                else {
                    outOfStock.push({...docSnapshot.data(), id: docSnapshot.id});
                }
            })

            batch.commit().then(r => {
                console.log('resultado batch:', r)
            })
        })

        console.log(newOrder)
    

    }

    const noItemComp = <h2>No hay Items en el carrito <Link to='/'>Ir al home </Link> </h2>;

    if(cartLength === 0) return noItemComp




    return (
        <div className="cart">
            {idOrden? `Orden generada: ${idOrden}`: null}
            
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

                <form action=""  onSubmit={guardarOrden}>

                    <input className="inputForm" type="text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)}/>
                    <input className="inputForm" type="text" placeholder="Phone" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                    <input className="inputForm" type="text" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>

                <button type="submit"> Generar orden</button>
            </form>

        </div>
    )
}