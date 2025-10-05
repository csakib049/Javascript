let p=new Promise((resolve,reject)=>{

    let success=true;

    if(success){
        resolve("success......");
    }else{
        reject("task is not complete .");
    }

})


p.then((re)=>{
    console.log(re);
}).catch((rej)=>{
   console.log(rej);
});