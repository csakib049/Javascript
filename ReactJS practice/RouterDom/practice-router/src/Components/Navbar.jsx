import React from 'react'

const Navbar = () => {
  return (
    <div className='nav'>
        <h1>sakib</h1>
        <div>
            <Link to='/' >Home</Link>
            <Link to='/about' >About</Link>
            <Link to='/contact' >Contact</Link>
            <Link to='/product' >Product</Link>
        </div>
    </div>
  )
}

export default Navbar
