for( let select of dropdowns){
  for(currcode in countryList){
    let newOption = document.createElement("option");
    
    newOption.innerText=currcode;
    newOption.value=currcode;
    

    if(select.name=="from" && currCode == "USD"){
      newOption.selected="selected";
    }

    select.append(newOption);
  }



  select.addeventListener("change", (evt)=>{
    updateflag(evt.target);
  });
}



const updateflag=(element)=>{
    let currcode=element.value;
    let countrycode=countryList[currcode];
    let newsrc=`asdfsdfsdf`;
    let img = element.parentElement.querySelector("img");
    img.src=newsrc;
};

   
  let btn = document.querySelector(".btn");
  let from Curr=document.querySelector(".from select");
  let toCurr=document.querySelector(".to select");
  let msg=document.querySelector(".msg");


 btn.addEventListener("click", async (evt)=>{
    evt.preventDefault();
    let amount=document.querySelector(".amount input");

    let amtval=amount.value;

    if(amtval =="" && amtval<1){
      amtval=1;
      amount.value="1";
    }


    const URL=`${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;

    let responce = await fetch(URL);
    let data =await responce.json();
    let rate = data[toCurr.value.toLowerCase()];

    let finalAmount =amtval*rate;
    msg.innerText=`${amtval} ${fromCurr.value} = ${finalAmount} ${toCurr.value}` ;

});