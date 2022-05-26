/*
    Every variable needs to be equal to some sort of datatype even if that datatype is already existing data

    All the common datatypes that we'll be going through
        1. Strings
        2. Integers
        3. Booleans
        4. Undefined
        5. Null
        6. Objects
            - Arrays
            - Objects
*/

/*
    Strings are essentially the digitalization of written human text/language
        - In Javascript it is declared three ways
            1. "" -> Double Quotes
            2. '' -> Single Quotes
            3. `` -> Back Ticks

    1. & 2. (relating back to the numbers above)
    There are no syntactical uniqueness between the Double and Single Quotes
        - The reason that these two ways are enabled is because there will be many
          situations that in order to correctly define a string within a complex sequence
          of commands already written, developers will need to use either ""/'' to define the command
          and then using the other unused ""/'' to declare the String datatype

    ---------------------------

    3. (relating back to the numbers above)
    DON'T get bottled necked with this idea for now as it isn't that important to learn ASAP
        
        But to define it.
    
    The back ticks are unqiue because they allow extra functionality. They allow a small escape back into Javascript
    within the back ticks syntax in order to utilize other Javascipt concepts to dynamically render results that will, in the end,
    but changed into a String value

    examples of what it looks like
    1. `Hello ${variable}, is your name Daniel?`
    2. var test = `The time and weather for today is ${timeVar} and ${weatherVar}`
*/

var daniel = "daniel";
var car = "car";
var model = `Toyota`;

/*
    Integers are as they seem. Numbers, decimels, Big Numbers
        - It is important to label the differences because other languages have different datatypes
          for how big or small a number is

*/

var numberOne = 1;
var decimals = 2.23;
var biggerNumber = 2133291039201;

/*
    Booleans are truthy or falsey values, and are written as such.
*/

var truthy = true;
var falsey = false;

/*
    Undefined and Null are syntactically just as related to the colloquial terms as well
    1. Undefined (syntax) = something undefined
    2. null(syntax) = something doesn't exist 

    There will be many instances to utilize these datatypes down the road of complexity
*/

var thisIsUndefined = undefined;
var doesNotExist = null;

/*
  CONT. within the next files
  
    Object Datatypes is a confusing datatype because the way we name our syntax of Arrays and Objects
        1. Arrays and Objects are Object Datatypes
        2. The naming convention sucks but devs decided to do it this way
*/