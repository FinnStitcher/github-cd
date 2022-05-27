/*
    As a continuation chain of the standard if-statement, there is the else extension
        - An else extension only ever comes after an if-statment declaration
        - If it meant to run if the condition renders to not be true
*/

if (true === false) {
  console.log("this should not be rendered because true does not equal false");
} else {
  console.log("but this will render because true does not equal false");
}

/*
    There is another extension of the standard If-Statment called the Else-If extension
        - These always come before the last else extension
        - They act similarly to the last else statement
            - They run only when the prior if-statment or prior else-if-statements conditions turned out to not be true
*/

if (true === false) {
  console.log("This not go off and moves to the next else-if-statment");
} else if (false === true) {
  console.log("this also doesn't go off and moves to the next-else if-statment");
} else if (true === true) {
  console.log("this will show because the condition turns out to be true");
} else {
  console.log("this will never run in this long if statement since the 2nd else-if is always true");
}

/*
    When You are chaining else-if's and else extensions onto the original if-statment, it is just called one long if-statement.
    --------

    Additionally, we can nest if-statements inside of other if-statements similar to russian dolls or boxes in boxes
*/

// Example 1. --> 2 layer if-statment
var hasMoney = true;
var hasEnoughMoney = false;

if (hasMoney === true) {
  if (hasEnoughMoney === true) {
    console.log("buys a PS5");
  } else {
    console.log("Cries on the inside");
  }
}

// Example 2. --> 2 layer if-statment with it's own else-if extensions
var isRich = false;
var isFrugal = true;
var isPoor = true;

if(isRich === true) {
    console.log("good on ya, are you frugal?");
    if(isFrugal === false) {
        console.log("Hopefully that money comes over to me then")
    } else {
        console.log("That means you have extra, so pass it on. k thx")
    }
} else if(isPoor === isFrugal) {
    console.log("yeah me too. Frugal cause I'm poor")
} else {
    console.log("yeah I'm not rich either");
}

// You can go deeper with layers of logical statements, but as you see here, it gets harder and harder to read
