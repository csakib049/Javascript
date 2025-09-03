function getdata(dataId,getNextdata){
    setTimeout(()=>{
        console.log("data",dataId);
        if(getNextdata){
            getNextdata();
        }
    },2000);
}

getdata(390,()=>{  
    getdata(389,()=>{
        getdata(382,()=>{
            getdata(377);
        });
    });
});                     
