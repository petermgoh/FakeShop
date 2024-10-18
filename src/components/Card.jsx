import React from 'react'

export default function Card(props) {
    const { json } = props

    return (
        <div className='item'>
            <img src={json.image} className='item-img'></img>
            <p>{json.title}</p>
        </div>
    )
}
