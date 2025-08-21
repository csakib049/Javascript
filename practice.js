let buttons = document.querySelectorAll(".mybtn");


buttons.classList.add("disabled");
buttons.classList.remove("mybtn");


// buttons.forEach((btn)=>{
//     btn.classList.add("enabled");
// });

// buttons.forEach((btn)=>{
//     btn.classList.replace("enabled","disabled");
// });



//----------------------------------------------------



// buttons.forEach((btn)=>{
//     btn.addEventListener("mouseover",()=>{
//         btn.classList.toggle("hover");
//     });
// });


// buttons.forEach((b)=>{
//     b.addEventListener("click",()=>{
//         b.classList.toggle("hover");
//     });
// }); 

buttons.forEach((b) => {
    b.addEventListener("click", () => {
        b.classList.add("hover");
    });
});
