import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Card from './Card'

export default function Shop() {
  const [data, setData] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products?limit=5')
        if (!response.ok) {
          throw new Error('Network response was not ok')
        } 
        const result = await response.json()
        setData(result)
        setLoading(false)
      } catch (err) {
        setError('Error fetching card data')
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1>Shop Page</h1>
      <div className='item-container'>
        {data.map((d) => (
          <Card json={d} key={d.id}/>
        ))}
      </div>
    </div>
  )
}
