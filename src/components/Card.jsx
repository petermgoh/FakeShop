import React from 'react'
import { useCart } from '../context/CartContext'

export default function Card(props) {
    const { item } = props
    const { addItemToCart } = useCart()

    return (
        <div className='item'>
            <img src={item.image} className='item-img'></img>
            <p>{item.title}</p>
            <p>{item.price}</p>
            <button onClick={() => addItemToCart(item)}>Add Item To Cart!</button>
        </div>
    )
}
