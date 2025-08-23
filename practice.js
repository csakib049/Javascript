const promise=new Promise((resolve,reject)=>{
   setTimeout(()=>{
      let error=true;
      if(!error){
         resolve({user:"sakib",id:"390"});
      }else{
         reject("Error: Something went wrong.------------------------------");
      }
   },2000);
});



promise.then((a)=>{
    console.log(a);
    return a.user;    
}).then((name)=>{
    console.log(name);
}).catch((err)=>{
   console.log(err);
});