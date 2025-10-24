import React from 'react'

const App = () => {

  async function btnclicked(){

    const responce= await fetch('https://jsonplaceholder.typicode.com/todos/1');
    console.log(responce);

    const data=await responce.json();

    console.log(data);
  }


  return (
    <div>
      <button onClick={btnclicked}>click</button>
    </div>
  )
}

export default App
