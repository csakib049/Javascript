 new Promise ((resolve,reject)=>{
   setTimeout(()=>{
      let error=true;
      if(!error){
         console.log("Congratulation!!");
         resolve({user:"sakib",id:"390"});
      }else{
         console.log("Error.");
         reject("Something went Wrong!------");
      }
   },2000);
}).then((a)=>{
   console.log(a);
   return a.user;
}).then((b)=>{
   console.log(b);
}).catch((c)=>{
   console.log(c);
   return c;
}).catch((d)=>{
   console.log(d);
});