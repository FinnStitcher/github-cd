/*
    The Concept of Recursion can be thought like a controlled Loop. It involves functions and the conditional-continual calling of the function
        - unlike the For-Loop that gets executed right away once being read. This type of loop only happens when called
        - There can be more than one condition that controls the loop
        - It's easy to get into an infinite loop situation that will cause your machine to freeze up
            - It's easy because in the beginning, people tend to forget to add an escape clause
        - You would use this whenever you have a situation where you want more control

    Applying the Concept (MOST BASIC)
        1. Make the function
        2. call the function outside of itself to start the loop
        3. call the function inside of itself to continue the loop
        4. Make sure that you have an escape clause
            - This will require implementing other concepts in JS
                - There are multiple ways to do this using the suggestions below
                    - Variables
                    - arguments / parameters

*/

// Loop 1. --> Using a Variable and incrementing it
var loopOneTracker = 0;
// Step 1.
function recursiveLoopOne() {
  // This is here to visibly see the change
  console.log("Loop 1.\n\n Looped " + loopOneTracker + " many times\n\n");

  //   Step 4.
  //   Includes line directly below and the if-statement
  loopOneTracker++;

  if (loopOneTracker === 10) {
    return;
  } else {
    //   Step 3.
    recursiveLoopOne();
  }
}
// Step 2.
recursiveLoopOne();

/*













*/

// Loop 2. --> Using argument / Parameter
function recursiveLoopTwo(parameterThatWeAreKeepingTrackOf) {
  console.log("Loop 2.\n\n Looped " + parameterThatWeAreKeepingTrackOf + " many times\n\n");

  parameterThatWeAreKeepingTrackOf++;

  if (parameterThatWeAreKeepingTrackOf === 10) {
    return;
  } else {
    recursiveLoopTwo(parameterThatWeAreKeepingTrackOf);
  }
}
recursiveLoopTwo(1);

/*













*/

function levelTwoRecursion(arg, parameter) {
  console.log("Loop 3. Looped times: " + arg);

  /*
        The if statment is order in reverse order because we want to take care of our last edge cases first before doing
        the thing that we want it to do initially.

        You can think of it as if this function will always aim to do One Thing
        But we only want to do that One Thing only if these other conditions aren't met
  */
  if (!parameter) {
    endFunc();
  } else if (arg === 10) {
    levelTwoRecursion(arg + 1, false);
  } else {
    //   This is that One Thing
    levelTwoRecursion(arg + 1, parameter);
  }
}

levelTwoRecursion(1, true);

function endFunc() {
  console.log("ENDING THE LOOP");
}
