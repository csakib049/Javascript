 function api(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Weather Data");
            resolve(2);
        },4000);
    });
 }


 async function getWeatherData(){
    await api(); 
 }