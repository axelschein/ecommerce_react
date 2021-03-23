import React from 'react'
import { Item } from '../Item/Item'

export const ItemList = ({items=[]}) => {


    return (
        <div className="wrap">
            {items.map(item => <Item item={item}/> )}
        </div>
    )
}