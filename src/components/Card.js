import React from 'react'

function Card(props) {
  return (
    <div>
    <h1>Contact</h1>
    <h2>{props.names}</h2>
    <img src={props.img} alt='' width={150}/>
    <p>phone no: {props.numbers}</p>
    <p> {props.url}</p>
    </div>
  )
}

export default Card