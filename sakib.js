function addten(n){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(n+10);
        },1000);
    });
}


(async function run( ) {
     
    let result1 = await addten(5);
    console.log("result: ",result1);
    
    let result2 = await addten(result1);
    console.log("result: ",result2);

    let result3 = await addten(result2);
    console.log("result: ",result3);
})();


