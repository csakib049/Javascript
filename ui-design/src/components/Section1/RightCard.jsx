import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  return (
    <div className=' h-full w-80 shrink-0  rounded-4xl relative overflow-hidden'>

        <img  className='h-full w-full object-cover ' src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=400" alt="working professional" /> 




        <RightCardContent/>
    </div>
  )
}

export default RightCard
