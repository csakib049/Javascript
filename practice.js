const getPromise=()=>{
  return new Promise((resolve,reject)=>{
    console.log("I am promise.");
     resolve("resolve!!!!!!");
  });
};

let promise=getPromise();
promise.then((resolve)=>{
  console.log("Promise fullfield",resolve);
});


// const sakib=()=>{
//   return new Promise((resolve,reject)=>{
//     console.log("Promise message");
//     resolve("resolve message");
//   });
// }


// let s=sakib();
// s.then((resolve)=>{
//   console.log("hi this is sakib ",resolve);
// });
