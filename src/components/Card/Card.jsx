import React from "react";
import "./card.css";
import Cupcake from "../img/cupcake.jpg";




const Card = () => {
    return (
        <div className='container'>
            <h2>Titulo</h2>
            <div className='container-img'>
                <img src={Cupcake}  />
                
            </div>
            <p>Parrafo del primer card </p>
        </div>
        
    );
};

export default Card;