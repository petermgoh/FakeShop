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
            
            <Link to='/' className={isHome ? 'active' : 'inactive'}>Home</Link> 
                
            <Link to='/shop' className={isShop ? 'active' : 'inactive'}>Products</Link>
               
            <Link to='/cart' className={isCart ? 'active' : 'inactive'}>Cart</Link>
            
            
            <p>Cart Size: {cartSize}</p>
            
        </nav>
    )
}
