import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';

const getItems = () => {


    return new Promise((resolve)=>{
        setTimeout(()=>{resolve({
            pictureUrl: 'https://flavorcupcakery.com/wp1/wp-content/uploads/2020/08/chocolate-vanilla-photo-for-website-300x180.png',
            name: 'Chocolate/Vanilla',
            description: 'Chocolate cake, vanilla buttercream frosting (can get custom-colored sprinkles if desired!)',
            price: '100',
            

        })},2000)
    })
}

export default function ItemListContainer() {
    const [item, setItem] = useState([])

    useEffect(()=>{
        getItems().then((res)=> setItem(res))
        return;
    }, [])
    

    // Implementar mock invocando a getItems() y utilizando el resolver then
    return <ItemDetail item={item} />/* JSX que devuelva un ItemDetail (desafío 6b) */
}