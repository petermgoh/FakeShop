import React from 'react'
import { useCart } from '../context/CartContext'

export default function CartCard(props) {
    const { item } = props
    const { removeItemFromCart } = useCart()

    return (
        <div className='cart-card'>
            <h3>{item.title}</h3>
            <hr></hr>
            <p>x{item.count}</p>
        </div>
    )
}
