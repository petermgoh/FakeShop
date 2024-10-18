import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav>
        <Link to='/shop'>To Shop</Link>
        <Link to='/'>To Home</Link>
    </nav>
  )
}
