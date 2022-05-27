/* 
    Before getting into variables. We're going to talk about the console.log()
    For now, take is a magical command that outputs whatever you put into it. I suggest that you
    console.log() a lot of the variables, methods, and functions that you create as you read these pieces

    Examples.
*/

console.log("test");
console.log(1)

/*
    These series of folders and files are meant to help you understand 
    the fundamentals of Javascript

    Starting with Variables. 

    On a surface level and for our current purposes, 
    variables are made for a two of things
        - Storing data
        - Referencing data

    ========================================================
    These are steps in making variables
        1. Declare the variable
        2. Name the variable
        3. Set it equal to a datatype or existing data

    This example is here to dissect the syntax in the style of excel's columns
    1.        2.                3.
    const   daniel              = "daniel"
    let     thao                = "thao"
    var     teachAssistant     = true

    ---------
    Look below for the actual syntax
    ---------
*/

const daniel = "daniel";
let thao = "thao";
var teachAssistant = true;


/*
    A couple of things to note.

    ====================================

    There are three current variable declarations (variable types)
        (Newest versions)
        1. const -> this type of variable can never be changed once declared, but it can be MUTATED(a concept we'll go through later)
        2. let -> this type of variable can be changed once declared and it can be mutated
        (Legacy Version)
        3. var -> the combination of const and let prior to them being built

    Even though var is still used because of legacy code that many companies use,
    It is best practice to use the newer versions. The reason being is because the
    "var" declaration has and continues to have issues tied to its usage.
    
    A short list of known potential issues(concepts that will be said later)
        1. Shadowing
        2. Scoping
        3. Inheritance

    ====================================

    When naming a variable, if using multiple terms to name the variable, devs tend to use the camelcasing
    method over other methods.

    For example
        1. danielThao
        2. teachingAssistance
        3. carHonda
        4. pinkIphone
*/

/*
    When you want to use or reuse a variable, always reference the variable by the name that you gave it
    
    Variables store data, so refer to it later in your code
*/