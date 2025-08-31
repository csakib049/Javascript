let lastPara=document.createElement("p"); //create paragraph
lastPara.innerText="Name: Md.Sakib Chowdhury";

let box=document.querySelector(".box");//access to div

box.append(lastPara); //add paragraph


let newbtn=document.createElement("button"); //create new button 
newbtn.innerText="click me!";

box.append(newbtn); // add new button

newbtn.remove(); //remove new button



