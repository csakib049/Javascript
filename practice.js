const url = "https://api.thecatapi.com/v1/images/search";

let factpara = document.querySelector("#fact");

let button=document.querySelector("#button");



const getfacts = async () => {
  console.log("Fetching data...");
  let response = await fetch(url);
  let data = await response.json();
  
  console.log(data); // check the array in console

  // Since API returns an array, take the first element
  factpara.innerText = data[0].url;
};




button.addEventListener("click",getfacts);

