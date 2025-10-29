import React from 'react'

const Navbar = (props) => {

    const btnclicked=()=>{
            if(props.theme=='Light') props.setTheme('Dark');
            else props.setTheme('Light');
    }


  return (
    <div>
         
        <button className='bg-amber-600 size-20 active:bg-amber-400 '  onClick={btnclicked}>click me </button>
      
    </div>
  )
}

export default Navbar
