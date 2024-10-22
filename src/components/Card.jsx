import React from 'react'
import { useCart } from '../context/CartContext'

export default function Card(props) {
    const { item } = props
    const { addItemToCart } = useCart()

    return (
        <div className='card'>
            <img src={item.image} className='card-img'></img>
            <p className='card-title'>{item.title}</p>
            <p className='card-price'>{item.price}</p>
            <button onClick={() => addItemToCart(item)} className='card-button'>Add Item To Cart!</button>
        </div>
    )
}
