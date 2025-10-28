import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <div>
      <div className='flex justify-center gap-10 py-4'>
        <Link className='text-xl font-bold text-orange-500' to='/product/men'>Men</Link>
        <Link className='text-xl font-bold text-orange-500' to='/product/women'>Women</Link>
      </div>
         
         

      <Outlet/>
    </div>
  )
}

export default Product
