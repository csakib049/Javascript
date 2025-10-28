import React from 'react'
import {Link} from 'react-router-dom'





const Navbar = () => {
  return (
    <div className='flex justify-between bg-cyan-900 '>
      <h2 className='font-bold text-2xl'>Sakib chowdhury </h2>
      <div className='flex gap-8 '>
        <Link to='/'>Home </Link>
        <Link to='/about'>About</Link>
        <Link to='/product'>Product</Link>
      </div>

    </div>
  )
}

export default Navbar
