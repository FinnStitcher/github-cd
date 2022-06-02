/*
    Loops are exactly how they sound. Whenever you want to run a certain set of code multiple times, do a loop style
    There are many syntactical styles of loops, but the one below is the most basic one

    This is called a For-Loop
        - Short for FOR (as long as this condition is true) LOOP (through all the code that is nested in this code bracket)
        
    How to write it
        1. use the FOR keyword
        2. followed by ()
            3. use or create a variable to keep track of
            4. condition. So long as the condition reads as true, then execute the loop
            5. determine how to increment the variable that you are keeping track of 
        6. follow the closing parenthesis with {}
        7. write your executable code.

    Related to the steps above
    1.  2. 3.                                   4.                                  5.                              6.
    for ( var thingThatWeAreKeepingTrackOf = 0; thingThatWeAreKeepingTrackOf < 10; thingThatWeAreKeepingTrackOf++) {
            7.
            //Code to execute with each iteration of the loop
    }

    ALSO written down below
*/

// Run the index.html to see the reuslts
// Loop 1.

for (var thingThatWeAreKeepingTrackOf = 0; thingThatWeAreKeepingTrackOf < 10; thingThatWeAreKeepingTrackOf++) {
  // the \n is code syntax for starting a new paragraph in Word, Pages, Google Docs

  /*  Notice that I am using the backticks
    I mentioned them in the 02-Datatypes/01-Basic.js file
    
    This is how to use in practice. Again the back ticks allow us to escape the String declaration and go back into the world
    of JS in order to extract the pieces of data that we are looking to have be inserted into this string as well

    Note
    ---------
    Syntax to escape = ${}
    the coloring is important
    the value that is inside of ${} is a reference to variable that we created inside of the for loop declaration
    */
  console.log(
    `LOOP 1.\n\nThe variable that we are keeping track of is called: thingThatWeAreKeepingTrackOf\nRight now thingThatWeAreKeepingTrackOf = ${thingThatWeAreKeepingTrackOf}\n\nAnd we increment thingThatWeAreKeepingTrackOf by one number everytime the loop is done\n\n\n\n`
  );
}

// Loop 2.
// more commmon looking loop that you will see online
for (let i = 0; i < 10; i++) {
    console.log(`LOOP 2.\n\nthis loop is the same loop as Loop 1, just with shorter variable names\nRight now i = ${i}\n\ni increments by one each time\n\n\n\n`)    
}

// Loop 3.
// more commmon looking loop that you will see online
for (let whateverINameThis = 0; whateverINameThis < 10; whateverINameThis++) {
    console.log(`LOOP 3.\n\nAgain, the same thing, just with diff names\nRight now whateverINameThis = ${whateverINameThis}\n\n\n\n`)    
}