/*
    The most fundamental logical statement is an IF-statement
    
    To build an IF statement, you need these steps
        1. declare the IF-statement with the if keyword
        2. follow keyword with parenthesis
        3. insert the condition(question to evaluate) within the parenthesis
        4. follow the parenthesis with curly brackets
        5. insert the code that the if-statement will execute once the condition if fullfilled(results as a yes or true value)
    
    Related to the steps above
    1.  2. 3.           4.
    if  (  condition  ) {
        5.
        Other code
    }

    Look at the code below to see how it actaully looks like
*/

if(true === true) {
    console.log("hello");
}

/*
    The if statment will always only render the code in the following set of curly brackets IF the condition's result comes out to being true

    All the example conditions below have a result of being true.
        - Some require set up in order to work
        - Explainations of other syntax shown will be below the examples
*/

// Example 1.
if(true === true) {
    console.log("true does equal true. The condition is true")
}

// Example 2.
var testValue = false
if(false === testValue) {
    console.log("false does equal the value of testValue, which is false. Therefore, the condition is true")
}

// Example 3.
var love = "is true";
var hate = "is true";

if(love === hate) {
    console.log("Love does have the same equal value as Hate (is true). Therefore, this condition is true")
}

// Example 4.
if(1 === 1) {
    console.log("1 does equal 1. The condition is true");
}

/*
    There is a reason that I'm only using the triple equals(===)
        1. It double checks to see if the datatypes are the same
        2. It then double checks to see if the value are also the same
    
    There are other ways of comparing values in javascript. If you want to know why we don't commonly use them, do a google search
        1. =
        2. ==
*/

// On top of doing the === comparison, you can do the opposite of that. !==(not equal to)
// Example 1.
if(1 !== 2 ) {
    console.log("1 is not equal to 2. The condition is true")
}

// Example 2.
var light = "Sun";
var dark = "Moon";
if(light !== dark) {
    console.log("The value of the variable light is not equal to the value of the variable dark. The condition is true")
}

// Example 3.
if(true !== false) {
    console.log("true does not equal false. The condition is true")
}

/*
    There is a reason that I'm only using the (!==) syntax as well. it does the same thing as ===, but in reverse
        1. It double checks to see if the datatypes are the NOT the same
        2. It then double checks to see if the value are also NOT the same
    
    There are other ways of comparing incorrect values in javascript. If you want to know why we don't commonly use them, do a google search
        1. !=
*/