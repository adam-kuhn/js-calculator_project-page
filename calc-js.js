var calcButtons = document.getElementsByClassName("button") //access number buttons on calculator
let equation = [] //empty array to push the equation to. This will then be evaluated and produce the answer

window.onload = function (){
//set eventlisteners to all buttons
  for (n=0; n<calcButtons.length; n++){
  calcButtons[n].addEventListener('click', display)
  }
}



//display numbers and operators as they are pushed. When equal is pushed --> calculate, when clear is pushed, clear everything
function display(e){
  //get id of the clicked button
  var id = e.target.id;

  //when equals button is pushed, calculate the answer
  if (id === "="){
    displayAnswer()
  }
  //when AC/clear button is pushed, clear contents
  else if (id === "clear"){
    clear()
  }
  //when anything else is pushed, display button pushed and full equation
  else{
  document.getElementById("calc-screen").innerHTML = id
  equation.push(id)
  displayEquation()
  }
}//end display function

//joins the equation array and displays on the calculator screen
function displayEquation(){
  document.getElementById("calc-equation").innerHTML = equation.join("")

  if (equation.length > 20){
    return document.getElementById("calc-equation").innerHTML = "screen too small!"
  }
} //end displayEquation


//clears everything by reloading the page
function clear (){
  window.location.reload();
}

//evaluates equation array by making it a string and running the eval function
function displayAnswer(){
  document.getElementById("calc-screen").innerHTML = eval(equation.join(""))

}
