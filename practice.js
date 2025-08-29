let sum=0;
//arrow function
let increase=()=>{
    let h1=document.querySelector("#h1");
    h1.innerHTML= increment(); 
}


//normal function
function increment(){
        sum+=1;
    return sum;

}