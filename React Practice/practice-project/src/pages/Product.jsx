import React from 'react'
import {Outlet,Link} from 'react-router-dom'

const Product = () => {
  return (
    <div>
      <h1>Product</h1>

      <div>
        <Link to='/product/men'>Men</Link>
        <Link to='/product/women'>Women</Link>
      </div>

      <Outlet/>
    </div>
  )
}

export default Product
