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
    let img = element.patentElement.querySelector("img");
};


