import React, { useEffect, useState } from 'react'
import Card from './Card'

export default function Shop() {
  const [data, setData] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products?limit=10')
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
    <div className='shop'>
      <h1>Products</h1>
      <div className='card-container'>
        {data.map((d) => (
          <Card item={d} key={d.id}/>
        ))}
      </div>
    </div>
  )
}
