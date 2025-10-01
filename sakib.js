let guess=25;

let give=prompt("give me a number :");

let i=1;

let flag=false;

while(guess!=give){
    
    i++;

    if(i<=5){
        give=prompt("Nope! Try again...");
    }else{
        give=alert(" You lost ...sorry");
        flag=true;
        break;
    }
}



if(!flag){
   let a=alert("congo....");
}

