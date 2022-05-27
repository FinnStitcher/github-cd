/*
    Functions are also called Methods. These terms are interchangable in Javascript

    Short version to declare a normal name function
        1. write the function keyword
        2. give it a name
        3. Parenthesis
        4. Curly brackets
        5. inside of the curly brackets, write more code

    
    Related to the steps above
    1.          2.             3. 4.
    function    nameOfFunction () {
        5.
        var code = "otherCode"
    }

    This is reflected down below
*/

// NOTE: AGAIN, this portion is the declaration portion (Creation of a function)
function nameOfFunction() {
    var code = "othercode"
}

/*
    When you want to activate(execute) a function, you need to reference that function's name
        - activation is also referred to as calling the function

    Steps
        1. write the name of the function
        2. followed by Parenthesis
    
    Related to steps above
    1.             2.
    nameOfFunction ();
*/

nameOfFunction();

// =================================================================
// These Two Pieces down below are a Pair for the time being in our entrance to JS 

function anotherOne() {
    var weTheBestMusic = "DJ KHALED"
    return weTheBestMusic;
}

anotherOne();

// You can go ahead and console.log the calling of the function
// Like so -> console.log(anotherOne());
