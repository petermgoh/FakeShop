import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav>
        <ul>
            <li>
                <Link to='/'>To Home</Link> 
            </li>
            <li>
                <Link to='/shop'>To Shop</Link>
            </li>
            <li>
                <Link to='/cart'>To Cart</Link>
            </li>
        </ul>
    </nav>
  )
}
