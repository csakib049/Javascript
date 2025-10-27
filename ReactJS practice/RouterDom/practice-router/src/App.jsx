import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Contact from './pages/Contact'
import Product from './pages/Product'
import About from './pages/About'
import Home from './pages/Home'
import Navbar from './Components/Navbar'


const App = () => {
  return (

    <div>
     <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/product' element={<Product />} />
      </Routes>
    </div>


  )
}

export default App
