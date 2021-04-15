import React, {useState, useContext} from 'react';
import "./ItemDetail.css";
import  ItemCount  from "../ItemCount/ItemCount";
import {Link} from 'react-router-dom';
import { CartContext } from "../../context/CartContext";


export default function ItemDetail({ item }) {
    const [count, setCount] = useState(0)

    const {cart, addItem} = useContext(CartContext);

    const addHandler = (e)=>{
        console.log('se agregaron', e, 'item')
        
        addItem(item, e)
        setCount(e)

    }

    const terminarCompra = () => {
        addItem(item, count)

    }
 
    return <>
            <div className='container-img2'>
                <img className="img2" src={item?.pictureUrl} alt="Cupcake"/>
            </div>
            <h2 className="titulo" >{item?.name}</h2>
            <p className="description">{item?.description}</p>
            <p className="precio">${item?.price}</p>

            { count === 0 ?
                    <ItemCount stock="5" initial={1} onAdd={addHandler} />
                        :
                    <Link to='/cart'> <button onClick={terminarCompra}>Terminar mi compra</button>
                    </Link>
            }


  </>;
   
}

