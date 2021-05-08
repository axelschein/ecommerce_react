import React from "react";
import "./item.css";
import { Link } from "react-router-dom";


export const Item = ({ item }) => {
    return (
        <div className='container'>
            <div className='container-img'>
                <img src={item.pictureUrl} alt="cake" className="foto" />
            </div>
            <h2>{item.name}</h2>
            <div className="price text-success"><h4>${item.price}</h4></div>
            <Link to={`/item/${item.id}`}><button className="buttonCart">Link al item</button> </Link>
        </div>
        
    );
};
