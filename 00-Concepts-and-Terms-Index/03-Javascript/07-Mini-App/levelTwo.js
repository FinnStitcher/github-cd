/* 
============================================================================================

Lots of things will be annoyingly spaced out just so that concepts can be seperated nicely 
This aims to combine everything up to this point including HTML and CSS

This will also include other niche things that aren't covered in detail in these notes because 
it would be too long to explicitly type everything out when there are many resources already 
out there that dives into them.

============================================================================================
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

//

calculator.addEventListener("click", function (event) {
  if (event.target.classList[0] !== "btn") return;

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

  // ================================================================

  /*  
    This if statment is to make sure that if the display info says "Results", then we don't
    put the word "Results" into the History list
  */
  if (resDisplayInfo.textContent !== "Results") updateHistory();

  // ================================================================

  resDisplayInfo.textContent = result;
  reset();
  updateDisplay("Click a Button");
}

function reset() {
  num1 = "";
  operation = "";
  num2 = "";
  return;
}

function updateDisplay(resetVal) {
  if (resetVal) {
    calcDisplay.textContent = resetVal;
  } else {
    calcDisplay.textContent = `${num1} ${operation} ${num2}`;
  }
}

// ================================================================================================================================

// This function updates the history side(right side) with the most recent result
// It also allows us to choose from that results still
function updateHistory() {
  // Create all the necessary HTML Elements in JS
  const newHistory = document.createElement("section");
  const info = document.createElement("h1");
  const chooseBtn = document.createElement("button");

  //   Changes the text content of those new HTML elements
  info.textContent = resDisplayInfo.textContent;
  chooseBtn.textContent = "choose";

  //   Give section element the class of choice
  newHistory.classList.add("choice");
  //   put the h1 and button HTML elements within the section Element
  newHistory.append(info, chooseBtn);

  //   finally put the new section element made in JS inside of the original HTML page
  historyContainer.prepend(newHistory);
}

/*












*/

/*
    Now that we're doing extra interactivity with the history side, 
    we are adding an event listener to this side

*/
resContainer.addEventListener("click", function (event) {
  /* We first need to make sure that the event target is the button that the user is clicking on
       I decided to do this via the text that they contain
        - There are many ways to achieve this, this is just one way I thought of
    */
  if (event.target.textContent === "choose") {
    //   Then I nested another if statment inside of it to determine whether or not we add
    // the value of the number next to the button to either num1 or num2
    if (operation === "" && num1 === "") {
      /*
        Everything in JS is an Object
        This is why this can work

        You can follow the trail of the code below by opening the dropdown menus
        when you try console.log(event);
      */
      num1 = event.target.previousElementSibling.textContent;
    } else if (operation !== "" && num2 === "") {
      num2 = event.target.previousElementSibling.textContent;
    }

    // Finally at the end, we update the display
    updateDisplay();
  }
});
