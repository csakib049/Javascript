
import React, { useState, useEffect } from "react";

const App = () => {


  const [count,setcount]=useState(0);
  const[count2,setcount2]=useState(0);


  function amni(){
    console.log("amni amni call hoy*****************");
  }


  
  useEffect(()=>{
    amni();
  },[count2]);



  function btnclicked(){
    console.log('button was clicked ');

    setcount(count+1);
  }

  function btnclicked2(){
    console.log('button2 was clicked ');

    setcount2(count2+1);
  }






  return (
    <div>

       <h1>{count} </h1>
      <button onClick={btnclicked}>click me 1 </button>


      <h1>{count2} </h1>
      <button onClick={btnclicked2}>click me 2</button>
      
    </div>
  )
}

export default App
