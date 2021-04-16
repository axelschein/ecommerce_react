import React, { useState } from "react";
const CartContext = React.createContext();

function CartProvider ({defaultValue = [], children}) {

    const [cart, setCart] = useState(defaultValue);

    const cartLength = () => {
        return cart.reduce((accumulator, currentValue) => { return accumulator + currentValue.cant}, 0);
    }

    const cartPrice = () => {
        return cart.reduce((accumulator, currentValue) => { return accumulator + currentValue.cant * currentValue.products.precio}, 0);
    }

    const addItem = (newProduct, quantity)=>{
        let prodIndex = cart.findIndex(item => item.products.id === newProduct.id);
        if (prodIndex === -1){
            setCart (cart => [...cart, {products: newProduct, cant: quantity}]);
        } else {
            let modifiedCart = [...cart];
            modifiedCart[prodIndex].cart += quantity;
            setCart (modifiedCart);

        }

        const removeItem = (itemId) =>{
            const newCart = cart.filter(e => e.item.id !== itemId)
            setCart(newCart)
        }// Remover un item del cart por usando su id

        const clear = ()=>{
            setCart([])
        } // Remover todos los items

        

    }

    return (
        <CartContext.Provider value={{cart, addItem, cartLength, cartPrice}} >
        {children}
        </CartContext.Provider>
     )

}

export {CartProvider, CartContext};