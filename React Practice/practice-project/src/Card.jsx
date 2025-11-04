import React from 'react'
import {useContext} from 'react'
import {Sakib} from './UserContext'

const Card = () => {

  const a=useContext(Sakib);


  return (
    
    <h1>this is a {a}</h1>
  )
}

export default Card
