const url="https://jsonplaceholder.typicode.com/users";

const getfacts=async()=>{
    console.log("getting data .................");
    let response = await fetch(url);
    console.log(response); // JSON format
    let data = await response.json();
    console.log(data); 
};