import React from 'react'
import Card from './components/Card'
import User from './components/User'


const App = () => {


  const arr=["sakib","shahriar","nazifa"];


  return (
    <div className='parent'>
      <User name={arr[0]}/>
      <User name={arr[1]}/>
      <User name={arr[2]}/>

    </div>
  )
}

export default App

