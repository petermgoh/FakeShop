import React from 'react'
import { useCart } from '../context/CartContext'

export default function CartCard(props) {
    const { item } = props
    const { removeItemFromCart, cartItems } = useCart()
    return (
        <div className='cart-card'>
            <h3 style={{ maxWidth: '200px', wordWrap: 'break-word' }}>{item.title}</h3>
            <hr></hr>
            <p>x{item.count} -- {item.count * item.price}$</p>

        </div>
    )
}
