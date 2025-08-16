let sakib = document.querySelector(".btn "); 


sakib.classList.add("enable");


sakib.addEventListener("click",()=>{
    sakib.classList.toggle("enable");
    sakib.classList.toggle("disable");
});
