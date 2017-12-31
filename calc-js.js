var nbrButtons = document.getElementsByClassName("nbr-btn") //access number buttons on calculator

window.onload = function (){

for (n=0; n<nbrButtons.length; n++){
  nbrButtons[n].addEventListener('click', displayNum)
}



document.getElementById("plus").addEventListener("click", displayPlus);
document.getElementById("minus").addEventListener("click", displayMinus);
document.getElementById("times").addEventListener("click", displayTimes);
document.getElementById("divide").addEventListener("click", displayDivide);
document.getElementById("equals").addEventListener("click", displayAnswer);
document.getElementById("clear").addEventListener("click", clear);


}
let equation = []
let operator = []
let numbers = []
let multDiv = []

//add a function where equation.length is TOO big --> respone with OK smarty


//functions to display numbers/operators and push to the equation array, which will be used to perform the calculation
function displayEquation(){
  document.getElementById("calc-equation").innerHTML = equation.join("")

  if (equation.length > 20){
    return document.getElementById("calc-equation").innerHTML = "screen too small!"
  }
}

function displayNum(e){
  var id = e.target.id;
  document.getElementById("calc-screen").innerHTML = id
  equation.push(id)
  displayEquation()
}


//operator functions
function displayPlus(){
  document.getElementById("calc-screen").innerHTML = "+"
  equation.push("+")
  displayEquation()
}

function displayMinus(){
  document.getElementById("calc-screen").innerHTML = "-"
  equation.push("-")
  displayEquation()
}

function displayTimes(){
  document.getElementById("calc-screen").innerHTML = "*"
  equation.push("*")
  displayEquation()
}

function displayDivide(){
  document.getElementById("calc-screen").innerHTML = "/"
  equation.push("/")
  displayEquation()
}

//clear everything button
function clear (){
  window.location.reload();
}

function displayAnswer(){
  //this will call on a variable "answer" that I will define below to be the result of the equation
  document.getElementById("calc-screen").innerHTML = eval(equation.join(""))



}
//operator will always be at an odd placement, 1,3,5. True but not used in my code
function getEquation(){
  //split the numbers out
  let operation = equation.join("");
    getNumbers = operation.split(/\D/g); //removes everything but digits
  for (x=0; x<getNumbers.length; x++){
    getNumbers[x] = Number(getNumbers[x]) //converts string to a number
    numbers.push(getNumbers[x])
  }

  console.log(numbers)

//split the operators
getOperators = operation.split(/\d/g) //removes everything but operator
  for (j=0; j < getOperators.length; j++){
    if (getOperators[j] == "+" || getOperators[j] == "-" || getOperators[j] == "x" || getOperators[j] == "/" ){ //sending operators to new array (no white space)
    operator.push(getOperators[j])
    }
  }
} //end get Equation function
