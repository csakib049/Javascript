 function api(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Weather Data");
            resolve(2);
        },3000);
    });
 }

    console.log("1st");


 async function getWeatherData(){
    console.log("2nd");
    await api(); 
    console.log("log in successfully . ");
 }