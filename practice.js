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
}


