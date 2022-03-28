
let inputField = document.getElementById("inputbox");
let digitButtons = Array.from(document.getElementsByClassName("button"));
let displayAmount = 0

digitButtons.map(button => {
button.addEventListener("click", (e) => {

  try{

  switch(e.target.innerText){

    case "C":
      inputField.value = "";
      displayAmount = 0;
      break;

    case "←":
      if(inputField.value){
       inputField.value = inputField.value.slice(0, -1);
       displayAmount --;
      }
      break;

    case "=":
      let result = eval(inputField.value);
         inputField.value = result;
         console.log(result);
      break;
      
    default:
      if(displayAmount >= 20){
      }
      else{
        displayAmount++;
        inputField.value += e.target.innerText;
      }
  }
}
catch{
  inputField.value = "error!";
}

})
})






