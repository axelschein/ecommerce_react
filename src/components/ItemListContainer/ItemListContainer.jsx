import React, { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList"
import "./ItemlistContainer.css";

import { useParams } from "react-router-dom";

export default function ItemListContainer() {
    const [items, setItems] = useState([])

    const {categoryId} = useParams([])

    useEffect(()=>{

    let products = [
        {
         id: 'CVAI123',
         name: 'Chocolate/Vanilla',
         pictureUrl: 'https://flavorcupcakery.com/wp1/wp-content/uploads/2020/08/chocolate-vanilla-photo-for-website-300x180.png',
         type: 'cupcake',
         description: 'Chocolate cake, vanilla buttercream frosting (can get custom-colored sprinkles if desired!)',
         price: '100',
         stock: 5
       },
       {
         id: 'RVEL123',
         name: 'Red Velvet',
         pictureUrl: 'https://flavorcupcakery.com/wp1/wp-content/uploads/2020/08/red-velvet-photo-for-website-300x180.png',
         type: 'cupcake',
         description: 'Red velvet cake, cream cheese frosting',
         price: '100',
         stock: 10
                  
       },
       {
         id: 'SCAR123',
         name: 'Salted Caramel',
         pictureUrl: 'https://flavorcupcakery.com/wp1/wp-content/uploads/2020/08/salted-caramel-photo-for-website-300x180.png',
         type: 'cupcake',
         description: 'Chocolate cake, salted caramel frosting, crushed chocolate covered pretzels',
         price: '100',
         stock: 7
       },
       {
        id: 'FUDG123',
        name: 'Fudgy Chocolate Cake',
        pictureUrl: 'https://www.newideafood.com.au/media/14149/fudgy-chocolate-cake.jpg?width=606&height=0&mode=crop&center=0.5,0.5',
        type: 'cake',
        description: 'This ultimate chocolate cake will soon become a family favourite for every celebration!',
        price: '100',
        stock: 7
      },
      {
        id: 'SCAR123',
        name: 'Carrot Cake',
        pictureUrl: 'https://www.newideafood.com.au/media/16538/carrot-cake.jpg?width=606&height=0&mode=crop&center=0.5,0.5',
        type: 'cake',
        description: 'Now it’s a teatime special and the cream cheese frosting makes it much more indulgent',
        price: '100',
        stock: 7
      },
      {
        id: 'SCAR123',
        name: 'Buttercake with lemon icing',
        pictureUrl: 'https://www.newideafood.com.au/media/17920/butter-cake.jpg?width=720&center=0.0,0.0',
        type: 'cake',
        description: 'This yoghurt and lemon drizzle cake is refreshingly zesty.',
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
          {categoryId}
            <ItemList items={items} />
            
        </div>
    );
};

