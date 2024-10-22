import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function Navbar() {
    const location = useLocation()
    const isHome = location.pathname === '/'
    const isShop = location.pathname === '/shop'
    const isCart = location.pathname === '/cart'
    const { cartSize } = useCart()
    return (
        <nav className='navbar'>
            <ul>
                <li>
                    <Link to='/' className={isHome ? 'active' : ''}>To Home</Link> 
                </li>
                <li>
                    <Link to='/shop' className={isShop ? 'active' : ''}>To Shop</Link>
                </li>
                <li>
                    <Link to='/cart' className={isCart ? 'active' : ''}>To Cart</Link>
                </li>
            </ul>
            <div>
                <p>Cart Size: {cartSize}</p>
            </div>
        </nav>
    )
}
