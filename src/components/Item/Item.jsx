import React from "react";
import "./item.css";
import { Link } from "react-router-dom";


export const Item = ({ item }) => {
    return (
        <div className='container'>
            <div className='container-img'>
                <img src={item.pictureUrl} alt="Cupcake" />
            </div>
            <h2>{item.name}</h2>
            {/* <h5 className="card-title">{item.description}</h5> */}
            <div className="price text-success"><h5 className="mt-4">${item.price}</h5></div>
            <Link to={`/item/${item.id}`}> Link al item</Link>
        </div>
        
    );
};

// export default Item;