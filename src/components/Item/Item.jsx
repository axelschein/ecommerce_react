import React from "react";
import "./item.css";


export const Item = ({ item }) => {
    return (
        <div className='container'>
            <div className='container-img'>
                <img src={item.pictureUrl} alt="Cupcake" />
            </div>
            <h2>{item.name}</h2>
            {/* <h5 className="card-title">{item.description}</h5> */}
            <div className="price text-success"><h5 className="mt-4">${item.price}</h5></div>
        </div>
        
    );
};

export default Item;