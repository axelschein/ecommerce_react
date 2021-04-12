import React, {useState} from 'react';
import "./ItemDetail.css";
import  ItemCount  from "../ItemCount/ItemCount";
import {Link} from 'react-router-dom';


export default function ItemDetail({ item }) {
    const [count, setCount] = useState(0)

    const addHandler = (e)=>{
        console.log('se agrego un item', e)
        setCount()

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
                    <Link to='/cart'> <button>Terminar mi compra</button>
                    </Link>
            }


  </>;
   
}

