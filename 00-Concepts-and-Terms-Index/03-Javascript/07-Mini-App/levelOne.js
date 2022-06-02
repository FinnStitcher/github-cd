/* 
============================================================================================

Lots of things will be annoyingly spaced out just so that concepts can be seperated nicely 
This aims to combine everything up to this point including HTML and CSS

This will also include other niche things that aren't covered in detail in these notes because 
it would be too long to explicitly type everything out when there are many resources already 
out there that dives into them.

============================================================================================
*/

/*
    Notes (chronological) for variables down below
    ---------------------------------------------
    - Grabs the whole calculator
    - Grabs the display for the calculator
    - Grabs all the btns within the calculator
    - Grabs the whole results/history container
    - Grabs the results info in the display
    - Grabs the history container
    - set a variable equal to an empty string called num1 to store the number values when clicking the calc
    - set a variable equal to an empty string called num2 to store the number values when clicking the calc
    - set a variable equal to an empty string called operation to store the operation value when clicking the calc

    Const is another way to declare a variable. I use CONST and LET over VAR
*/

const calculator = document.querySelector("#calculator");
const calcDisplay = document.querySelector("#display");
const allBtns = document.querySelectorAll(".btn");
const resContainer = document.querySelector("#resultsContainer");
const resDisplayInfo = document.querySelector(".info");
const historyContainer = document.querySelector("#history");
let num1 = "";
let num2 = "";
let operation = "";

/*














*/

/*
    Add event listners to these HTML elements for when user clicks on them

    Notes for Event Listeners
    ---------------------------------------------
    - Add a Click event listener on the calculator and do something when clicked
*/

calculator.addEventListener("click", function (event) {
  /*  If the thing clicked is not a button, return. Meaning stop all code here and 
        return (whatever comes after this keyword)

        I don't use the curly braces here and it still works because the code I'm only
        executing one specific action after this if-statment declaration
    */

  if (event.target.classList[0] !== "btn") return;

  // If we Actually clicked on a btn, then make a variable and set it's value to being the value of the btn's number
  const btnVal = event.target.textContent;

  /* This long if-statement is set in this way for a reason
     The reason being that you always want to do your last edge cases first
        - Meaning that the priority of conditions comes in reverse order compared to how we naturally think
            1. Condition one makes sure that we can't select an operator without having num1 set
            2. Then we make sure that if we click the CLEAR button that we clear all things
            3. Then we make sure that we can only add the operator once num1 has a value greater than ""
            4. Then we make sure that the equals button only does it's calculation if we have num1 and num2 set
            5. Then we make sure that so long as the operator is not set to a value, we add value to num1
            6. Then we make sure that once an operator is selected, we only add value to num2


    Then the reason that I even an IF-Statment here is because I want the calculator to account for big numbers
    like 100. Done by clicking the buttons (1, 0, 0)
        - Also to account for operations like 100 + 100 etc..
  */
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

/*













*/

/*
    This function will do all the calculations
    after doing the calculations, reset the global variables,
    then update the HTML calculator display
*/
function mathlete() {
  const num1Integer = parseInt(num1);
  const num2Integer = parseInt(num2);
  let result = 0;

  /*
    Switch case is another type of If-Statement, but we only evaluate one variable vs mulitple variables
        - Each case is like a condition in an if-statment. If I were to rewrite this whole Switch-Case statment
          as an If-Statement, this is what it would look like
            - if(operation === "+") result = num1Integer + num2Integer
              else if (operation === "-") result = num1Integer - num2Integer
              else if (operation === "*") result = num1Integer * num2Integer
              else if (operation === "•/•") result = num1Integer •/• num2Integer
              
  */
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

/*
    This function resets the global variables for the math calculations
*/
function reset() {
  num1 = "";
  operation = "";
  num2 = "";
  return;
}

/*
    This function will always update the display of the HTML whenever called(activated)
        - it will update it to either the buttons you clicked, or a placeholder text
*/
function updateDisplay(resetVal) {
  // depending on the argument coming in, then change the calculator display to the argument value
  if (resetVal) {
    calcDisplay.textContent = resetVal;
  } else {
    calcDisplay.textContent = `${num1} ${operation} ${num2}`;
  }
}
