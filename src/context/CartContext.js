import React,{ useState } from "react";
export const CartContext = React.createContext([])

export const CartProvider = ({children})=>{

    const [cart, setCart] = useState([])

    const addItem = (item, quantity)=>{
        const currentItem = cart.find(e=> e.item.id === item.id)

        removeItem(currentItem.ite.id)
  
        setCart([...cart, 
                { item: item , quantity: currentItem.quantity + quantity }])

    } //agregar cierta cantidad de un item al carrito
    const removeItem = (itemId) => {
        const newCart = cart.filter(e => e.item.id !== itemId)
        setCart(newCart)
    } // Remover un item del cart por usando su id

    const clear = () =>{
        setCart([])

    }  // remover todos los items
    const isInCart = (id) => {
        const currentItem = cart.find(e=> e.item.id === id)

        return currentItem ? true : false


    } 

    return <CartContext.Provider value={{cart,addItem,removeItem,clear,isInCart}} >{children}</CartContext.Provider>

}