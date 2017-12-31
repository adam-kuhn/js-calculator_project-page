var calcButtons = document.getElementsByClassName("button") //access number buttons on calculator

window.onload = function (){

for (n=0; n<calcButtons.length; n++){
  calcButtons[n].addEventListener('click', display)
}



}
let equation = []

//add a function where equation.length is TOO big --> respone with OK smarty


//functions to display numbers/operators and push to the equation array, which will be used to perform the calculation
function displayEquation(){
  document.getElementById("calc-equation").innerHTML = equation.join("")

  if (equation.length > 20){
    return document.getElementById("calc-equation").innerHTML = "screen too small!"
  }
}

function display(e){
  var id = e.target.id;
  if (id === "="){
    displayAnswer()
  }
  else if (id === "clear"){
    clear()
  }
  else{
  document.getElementById("calc-screen").innerHTML = id
  equation.push(id)
  displayEquation()
}
}


//clear everything button
function clear (){
  window.location.reload();
}

function displayAnswer(){
  //this will call on a variable "answer" that I will define below to be the result of the equation
  document.getElementById("calc-screen").innerHTML = eval(equation.join(""))



}
