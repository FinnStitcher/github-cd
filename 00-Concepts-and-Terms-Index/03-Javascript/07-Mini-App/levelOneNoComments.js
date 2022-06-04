
const calculator = document.querySelector("#calculator");
const calcDisplay = document.querySelector("#display");
const allBtns = document.querySelectorAll(".btn");
const resContainer = document.querySelector("#resultsContainer");
const resDisplayInfo = document.querySelector(".info");
const historyContainer = document.querySelector("#history");
let num1 = "";
let num2 = "";
let operation = "";

calculator.addEventListener("click", function (event) {
 
   if (event.target.classList[0] !== "btn") return;
   
   // If we Actually clicked on a btn, then make a variable and set it's value to being the value of the btn's number
   const btnVal = event.target.textContent;

  if (event.target.classList[1] === "operation" && num1 === "") return;
  else if (event.target.classList[1] === "clear") {
    reset();
    updateDisplay("Click a Button");
  } else if (event.target.classList[1] === "operation" && num1 !== "") {
    operation = event.target.textContent;
    updateDisplay();
  } else if (num1 !== "" && num2 !== "" && event.target.classList[1] === "equals") {
    mathlete();
  } else if (operation === "" && event.target.classList[1] === "numBtn") {
    num1 += btnVal;
    updateDisplay();
  } else if (operation !== "" && event.target.classList[1] === "numBtn") {
    num2 += btnVal;
    updateDisplay();
  }

  //   This console.log() is here to visibly show you the changes
  console.log("Number 1: " + num1, "Operator: " + operation, "Number 2: " + num2);
});

function mathlete() {
  const num1Integer = parseInt(num1);
  const num2Integer = parseInt(num2);
  let result = 0;

  switch (operation) {
    case "+":
      result = num1Integer + num2Integer;
      break;
    case "-":
      result = num1Integer - num2Integer;
      break;
    case "*":
      result = num1Integer * num2Integer;
      break;
    case "•/•":
      result = num1Integer / num2Integer;
      break;
    default:
      return;
  }

  //   Set the display of the history side to the results of the Math
  resDisplayInfo.textContent = result;
  //   call reset function
  reset();
  //   call the updateDisplay function
  updateDisplay("Click a Button");
}

function reset() {
  num1 = "";
  operation = "";
  num2 = "";
  return;
}


function updateDisplay(resetVal) {
  // depending on the argument coming in, then change the calculator display to the argument value
  if (resetVal) {
    calcDisplay.textContent = resetVal;
  } else {
    calcDisplay.textContent = `${num1} ${operation} ${num2}`;
  }
}
