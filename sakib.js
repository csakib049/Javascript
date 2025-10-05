function addten(n){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(n+10);
        },3000);
    });
}


addten(5)
   .then((result1)=>{
    console.log("result1:",result1);
    return addten(result1);
   }).then((result2)=>{
    console.log("result2:",result2);
    return addten(result2);
   }).then((result3)=>{
    console.log("result3:",result3);
   }).catch((error)=>{
    console.log("error:",error);
   });