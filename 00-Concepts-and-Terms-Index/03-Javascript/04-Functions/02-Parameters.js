/*
    Parameters are also called Arguments in the field
        - These terms are interchangeable when referring to functions or methods.

    -------------------------
    The need for Parameters(Arguements) is to diversify and cover dynamic-unique use-cases with just one function.
    Example:
        - Having one calculator function being able to do many types of operations
            1. Addition
            2. Subraction
            3. Muliply
            4. Divide
    -------------------------

    You can have as many parameters(arguments) in a function as your computer can handle. We just need to seperate
    them with commas. Look to the example down below as to see the syntax
    
    Where does the Parameter(Argument) Syntax get inserted in our function syntax?
        - it goes into the Parenthesis of the base function syntax
            - This is the same for the pairing that we saw in the last fundamentals file in the last one
                1. When the parameters are placed in the declaration, it means that the Devs have created this
                   function with the intent to OPTIONALLY TAKE IN these amount of parameters
                2. When the parameters are placed in the activation(call / Execution), it means that the Devs are PASSING IN
                   to the function pieces of data with the intent that the function will do something with that data
    
*/

// This function takes two parameters
function parameterTest(parameter, argument) {
  console.log();
}

/*
    =================================================================================

    UNCOMMENT these Function Calls TO SEE THEIR RESULTS TO understand the helper text
    Look for something along the lines of parameterTest();

    =================================================================================
*/

/*
    =================================================================================

    This activation passes no parameters
        - Even though this function call doesn't pass any data into the function, the function will be called.
        - for the CURRENT function, no errors will happen
*/
parameterTest();

/*
    =================================================================================

    This activation only passes one parameter
        - This function call will still run
        - for the Current iteration of the function, no errors will happen
            - This data value will be referred to as 'parameter' within the function.
            - You can find the syntax on line 29
*/
// parameterTest("these parameters can be anything that I want them to be");

/*
    =================================================================================

   This activation passes two parameters
        - This function call will still run
        - for the Current iteration of the function, no errors will happen
            - The first data value(1) will be referred to as 'parameter' within the function
            - The second data value(2) will be referred to as 'argument' within the function
            - You can find the syntax on line 29
*/
// parameterTest(1, 2);

/*
    =================================================================================

    This activation passes Three parameters
        - This function call will still run
        - for the Current iteration of the function, no errors will happen
            - The first data value(null) will be referred to as 'parameter' within the function
            - The second data value(true) will be referred to as 'argument' within the function
            - the third data value(undefined) will not be referred to as anything within the function since
              the function isn't built(created/decalred) to take a third parameter
            - You can find the syntax on line 29
*/
// parameterTest(null, true, undefined);




// What was went over in June 4th, 2022
function createTask(input) {
  const test = [
    { task: "clean" },
    { task: "eat" },
    { task: "work" },
    { task: "workout" },
    { task: "shower" },
    { task: "bath" },
  ];

  if (input === "thao") {
    for (let i = 0; i < test.length; i++) {
      checkTask(test[i].task);
    }
  }
}

function checkTask(tasksToDo) {
  console.log(tasksToDo);
}

createTask("thao");
