import React, { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList"
import "./ItemlistContainer.css";

export default function ItemListContainer() {
    const [items, setItems] = useState([])

    useEffect(()=>{

    let products = [
        {
         id: 'CVAI123',
         name: 'Chocolate/Vanilla',
         pictureUrl: 'https://flavorcupcakery.com/wp1/wp-content/uploads/2020/08/chocolate-vanilla-photo-for-website-300x180.png',
         description: 'Chocolate cake, vanilla buttercream frosting (can get custom-colored sprinkles if desired!)',
         price: '100',
         stock: 5
       },
       {
         id: 'RVEL123',
         name: 'Red Velvet',
         pictureUrl: 'https://flavorcupcakery.com/wp1/wp-content/uploads/2020/08/red-velvet-photo-for-website-300x180.png',
         description: 'Red velvet cake, cream cheese frosting',
         price: '100',
         stock: 10
                  
       },
       {
         id: 'SCAR123',
         name: 'Salted Caramel',
         pictureUrl: 'https://flavorcupcakery.com/wp1/wp-content/uploads/2020/08/salted-caramel-photo-for-website-300x180.png',
         description: 'Chocolate cake, salted caramel frosting, crushed chocolate covered pretzels',
         price: '100',
         stock: 7
       }
       ];
       
    let promise = new Promise((resolve, reject) => {
     setTimeout(()=> resolve(products), 2000);
    });
    
    
    promise.then((products)=>{
        setItems(products)
    });
  })
    return ( 
        <div >
            <ItemList items={items} />
            
        </div>
    );
};

