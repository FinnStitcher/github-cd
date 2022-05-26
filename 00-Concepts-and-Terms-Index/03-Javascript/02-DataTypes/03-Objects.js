/*
    Objects
    -------
    The way to declare an object is using the opening and closing curly brackets { }

    Obejcts contain things as properties or keys
    - Each property/key has a value
    - This is referenced and commonly called the Key Value Pair within an object
    
    There is an example up above already but here it is again for clarity
*/
var firstObject = { key: "value pair" };

/*
The name of the key can be anything that you'd like to name it as a developer, and the value is whatever you want to assign it.
    - You can assign the value to other arrays and objects as well that contain other objects and arrays as well.
Example
*/
var newObject = { name: "daniel" };
var testObj = { test: null };

// This is important to know later down the road when working with API's and big DATA Mining
// But for now we won't be programming big things like this ourselves
var nestingObject = {
  childOne: {
    name: "daniel",
    gChildOne: {
      name: "daniel Jr.",
      ggChildOne: {
        name: "Daniel III",
        gggChildOne: { name: "Daniel IV", lineage: "royalty" },
      },
    },
  },
};

var mixedObject = {
  numArr: [1, 2, 3],
  property: "value pair",
  stringArr: ["hi", "there"],
  nestedObj: { key: undefined },
};

/*
==================================================================

Things to know ASAP on Objects

==================================================================

The way To reference the value on a particular object, you have to reference the 
object itself and the the key(property) you are looking for

Example Below
*/

// 1. Declare the object variable
var referenceMyKeyValuePair = { movieTitle: "Chamber of Secrets" };
// 2. reference the variable followed by a period(.) then followed by the name of the key
// This line below is essentially equal to "Chamber of Secrets"
referenceMyKeyValuePair.movieTitle;

/*
    HOWEVER
    If you decide to use numbers as keys(properties), the syntax is different

    Example Below
*/

var keyIsANumber = { 1: "test", 2: "when using", 3: "numbers" };
keyIsANumber[1]

/* 
    This looks confusing because it's similar to the array syntax. However, it knows to read 
    it as an Object syntax because the name of a variable can never and should never be duplicated.
    Since it was first declared as an object, Javascipt under the hood just knows that it will be read
    as object Syntax over Array syntax
*/
