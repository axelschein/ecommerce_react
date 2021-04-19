import React, { useState, useEffect } from "react";
    // array con items de este forma   {item:item, quantity: number}
const CartContext = React.createContext([]);
    

function CartProvider ({children}) {

    const [cart, setCart] = useState([]);
    const [totalItems,setTotalItems] = useState(0);
    const [totalPrice,setTotalPrecio] = useState(0)
    
    useEffect(()=>{
        let cartPrice = cart.reduce((accumulator, currentValue) => {
            return accumulator + currentValue.quantity * currentValue.item.price
        }, 0);

        let cartLength = cart.reduce((accumulator, currentValue) => {
            return accumulator + currentValue.quantity
        }, 0);

        setTotalItems(cartLength);
        setTotalPrecio(cartPrice)

    },[cart])
    

    // const cartPrice = () => {
    //     return 
    // }

    const addItem = (newItem, newQuantity)=>{

        const prevCartItem = cart.find(e=> e.item.id === newItem.id)

        let newCart;
        let qty;
        if (prevCartItem){
            newCart = cart.filter(e => e.item.id !== newItem.id)
            qty = prevCartItem.quantity + newQuantity;
        }else{
            newCart = [...cart]
            qty =  newQuantity;
        }

        setCart([...newCart, 
                { item: newItem , quantity: qty  }])
        
    } // agregar cierta cantidad de un ítem al carrito

    const removeItem = (itemId) =>{
        const newCart = cart.filter(e => e.item.id !== itemId)
        setCart(newCart)
    }// Remover un item del cart por usando su id

    const clear = ()=>{
        setCart([])
    } // Remover todos los items

    const isInCart = (id) =>{
        const currentItem = cart.find(e=> e.item.id === id)

        return currentItem ? true : false
    } 

    return (
        <CartContext.Provider value={{cart, addItem, clear, isInCart, removeItem, totalItems,totalPrice}} >
            {children}
        </CartContext.Provider>
     )

}

export {CartProvider, CartContext};