import React, { useState } from 'react'

const App = () => {

  const [num, setNum] = useState("");


  return (
    <div>

      {/* these 3 things  happen while pressig submit  */}
      <form action="" onSubmit={(e) => {
        e.preventDefault();    // prevent default 
        console.log(num); // console e print fortase 
        setNum("");     // empty the box 
      }}>


         {/* input */}
        <input onChange={(e) => {
          setNum(e.target.value);  // invoke function to update the value of num 
        }} type="text" placeholder='enter your name ' value={num} />


        <button>submit</button>  
        


      </form>

    </div>
  )
}

export default App
