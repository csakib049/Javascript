function sum(a,b){
    console.log(a+b);
}


function div(a,b){
    console.log(a-b);
}


function calculator (v,n,sumcallback){
    sumcallback(v,n);
}

calculator(1,2,sum);