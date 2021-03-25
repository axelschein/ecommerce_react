import React from 'react';
import "./ItemDetail.css";

export default function ItemDetail({ item }) {
 
    return <>
            <div className='container-img2'>
                <img className="img2" src={item?.pictureUrl} alt="Cupcake"/>
            </div>
            <h2>{item?.name}</h2>
            <p>{item?.description}</p>
            <div>${item?.price}</div>
  </>;
   
}