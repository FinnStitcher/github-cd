/*
    Arrays
    -------
    Arrays are also referred to as Lists in the tech field. The reason being is because of the many algorithms created for them.
    
    The way to declare an array is using the opening and closing square brackets [ ]

    You can hold as many individual-unique items in the array so long as they are seperated by commas
    Examples Below:
*/
var numArray = [1, 2, 3, 4, 5, 6, 7];
var stringArr = ["name", "lastname", "firstname", "city"];
var undefinedArr = [undefined, undefined, undefined, undefined];
var nullArr = [null, null, null, null, null, null, null];
var arrOfDiffDatatypes = [1, "string", undefined, null];

// Arrays can get even more complex in hold other arrays and objects. You would say it as arrays nested in this array, or Objects nested in the array
// Examples Below:

var arrayOfArrays = [
  [1, 2, 3],
  ["This", "is an", "array inside", "of an array"],
  [undefined, null],
];

var arrOfObjects = [
  { key: "value pair" },
  { property: "value pair" },
  { name: "daniel" },
];

// Additionally this idea of nested arrays or objects in the initial array can be applied to the new nested arrays and objects

/*
==================================================================

Things to know ASAP on Arrays

==================================================================

The way that items are called inside of an Array is called an index
Example phrase:
    "At the index of 0, we have a value of 'terminator'"

Corresponding syntax
    var test = ["terminator"];

----------------------
----------------------

In order get the value of that index you need to reference the array and then refernce the index like so
Example Below
*/

// 1. Declare the array variable
var Hogwartz = ["Harry Potter", "Ron Weasley", "Hermoine Granger"];
// 2. Reference the Variable's name followed by the index's reference indicated by the []
// This line below is referring to "Harry Potter"
Hogwartz[1];

