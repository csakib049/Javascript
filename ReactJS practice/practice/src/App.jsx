import React, { useState } from 'react'

const App = () => {

  const user={
    name:"sakib",
    age:23,
    id:390
  }

   localStorage.setItem("user",JSON.stringify(user));

   const data=JSON.parse(localStorage.getItem("user"));


   const [nam,setnam]=useState(false);

   function btnclicked (){
       setnam(true);
   }


  return (
    <div>
      <button onClick={btnclicked}>click me </button>

      {nam && <h1>me name is {data.name}</h1>}
    </div>
  )
}

export default App
