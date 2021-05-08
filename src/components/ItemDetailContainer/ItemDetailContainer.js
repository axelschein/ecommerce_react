import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from "react-router-dom";
import { getFirestore } from "../../firebase";


   

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