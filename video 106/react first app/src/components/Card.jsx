import React from 'react'

const Card = (props) => {
  return (
    <div className='card'style={{backgroundColor:"red"}}>
      <h1>{props.title}</h1>
      <p>Description</p>
    </div>
  )
}

export default Card
