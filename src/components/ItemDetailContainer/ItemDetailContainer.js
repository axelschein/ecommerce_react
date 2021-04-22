import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from "react-router-dom";
import { getFirestore } from "../../firebase";


const products = [
  {
    id: 1123,
    name: 'Chocolate/Vanilla',
    pictureUrl: 'https://flavorcupcakery.com/wp1/wp-content/uploads/2020/08/chocolate-vanilla-photo-for-website-300x180.png',
    category: 'cupcakes',
    description: 'Chocolate cake, vanilla buttercream frosting (can get custom-colored sprinkles if desired!)',
    price: '100',
    stock: 5
  },
  {
    id: 2123,
    name: 'Red Velvet',
    pictureUrl: 'https://flavorcupcakery.com/wp1/wp-content/uploads/2020/08/red-velvet-photo-for-website-300x180.png',
    category: 'cupcakes',
    description: 'Red velvet cake, cream cheese frosting',
    price: '100',
    stock: 10
            
  },
  {
    id: 3123,
    name: 'Salted Caramel',
    pictureUrl: 'https://flavorcupcakery.com/wp1/wp-content/uploads/2020/08/salted-caramel-photo-for-website-300x180.png',
    category: 'cupcakes',
    description: 'Chocolate cake, salted caramel frosting, crushed chocolate covered pretzels',
    price: '100',
    stock: 7
  },
   {
    id: 4123,
    name: 'Fudgy Chocolate Cake',
    pictureUrl: 'https://www.newideafood.com.au/media/14149/fudgy-chocolate-cake.jpg?width=606&height=0&mode=crop&center=0.5,0.5',
    category: 'cakes',
    description: 'This ultimate chocolate cake will soon become a family favourite for every celebration!',
    price: '100',
    stock: 7
  },
  {
    id: 5123,
    name: 'Carrot Cake',
    pictureUrl: 'https://www.newideafood.com.au/media/16538/carrot-cake.jpg?width=606&height=0&mode=crop&center=0.5,0.5',
    category: 'cakes',
    description: 'Now it’s a teatime special and the cream cheese frosting makes it much more indulgent',
    price: '100',
    stock: 7
  },
  {
    id: 6123,
    name: 'Buttercake with lemon icing',
    pictureUrl: 'https://www.newideafood.com.au/media/17920/butter-cake.jpg?width=720&center=0.0,0.0',
    category: 'cakes',
    description: 'This yoghurt and lemon drizzle cake is refreshingly zesty.',
    price: '100',
    stock: 7
  }
]
   

const getItems = (id) => {

    const db = getFirestore();
    const itemsCollection = db.collection('items')
    

    const item = itemsCollection.doc(id)
    return item.get();
}

export default function ItemListContainer() {
    const [item, setItem] = useState([]);
    const {itemId} = useParams()
    

    useEffect(() => {

      getItems(itemId)
      .then((products)=>{
        console.log('existe?', products.exists);
        
        if (products.exists){
          setItem({id:products.id, ...products.data()})

        }
        
      }) 
    }, [itemId])
  
  return <ItemDetail item={ item } />  

}