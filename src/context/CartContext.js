import React, { useState, useEffect } from "react";
    
const CartContext = React.createContext([]);
    

function CartProvider ({children}) {

    const [cart, setCart] = useState([]);
    const [cartLength,setTotalItems] = useState(0);
    const [cartPrice,setTotalPrecio] = useState(0)
    
    useEffect(()=>{
        let cartLength = 0;
        let cartPrice = 0;

        for(let cartItem of cart) {
            cartLength += cartItem.quantity;
            cartPrice += cartItem.quantity * cartItem.item.price;
        }

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
        <CartContext.Provider value={{cart, addItem, clear, removeItem, cartPrice, cartLength}} >
            {children}
        </CartContext.Provider>
     )

}

export {CartProvider, CartContext};