import React, { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList"
import "./ItemlistContainer.css";
import { useParams } from "react-router-dom";
import { getFirestore } from "../../firebase";


export default function ItemListContainer() {
    const [items, setItems] = useState([])

    const {categoryId} = useParams()

    useEffect(()=>{  
      const db = getFirestore();
      const itemsCollection = db.collection('items')
      
      function filtrado() {
        if (categoryId){
          return itemsCollection
        .where('category', '==', categoryId).limit(5)

        } else {
          return itemsCollection
          
        }

      }
      const promise = filtrado().get();

    promise.then((snaptshot)=>{
      console.log(snaptshot);

      if(snaptshot.size > 0) {
        console.log(snaptshot.docs.map(doc => doc.data())) 
        console.log(snaptshot.docs.map(doc => doc.id))
        setItems(snaptshot.docs.map(doc => {
          return { id:doc.id, ...doc.data()}
          }
        ))
      }
        
    })

  },[categoryId])
  
    return ( 
        <div >
          <h1 className="categoryTitle">{categoryId}</h1>
            <ItemList items={items} />
            
        </div>
    );
};

