import React, {useState, useContext} from 'react';
import "./ItemDetail.css";
import  ItemCount  from "../ItemCount/ItemCount";
import {Link} from 'react-router-dom';
import { CartContext } from "../../context/CartContext";


export default function ItemDetail({ item }) {
    const [count, setCount] = useState(0)

    const {addItem} = useContext(CartContext);

    const onAdd = (quantityToAdd) => {
        const count = parseInt(quantityToAdd)
        console.log('se agrego un item', count)
        addItem(item, count)
        setCount(count)
    }
 
    return <>
        <div className='container-img2'>
            <img className="img2" src={item?.pictureUrl} alt="product"/>
        </div>
        <h2 className="titulo" >{item?.name}</h2>
        <p className="description">{item?.description}</p>
        <p className="precio">${item?.price}</p>

        { count === 0 ?
                <ItemCount initial={1} onAdd={onAdd} />
                    :
                <Link to='/cart'> <button className="Agregar" >Terminar mi compra</button>
                </Link>
        }
    </>;
   
}

