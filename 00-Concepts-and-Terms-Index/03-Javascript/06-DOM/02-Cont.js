// Full syntax of the basic document methods that were in the previous JS file
// most basic versions

const oneHtmlElementClassQuerySelector = document.querySelector(".findMeByClass");
console.log(oneHtmlElementClassQuerySelector)

const oneHtmlElementIDQuerySelector = document.querySelector("#findMeByID");
console.log(oneHtmlElementIDQuerySelector)

const multipleElementsClassQuerySelector = document.querySelector(".multipleSameClassFinder");

const multipleElementsViaClassName = document.getElementsByClassName("multipleSameClassFinder");
console.log(multipleElementsViaClassName)

const multipleElementsViaTagName = document.getElementsByTagName("div");
console.log(multipleElementsViaTagName);

const createAnHtmlElement = document.createElement("main");
console.log(createAnHtmlElement);

// ==========================
// Two Step process
// Either attach to another JS DOM created HTML element, or attach to an HTML element on the actual HTML page
const attachElementsToOtherElements = document.body.append(createAnHtmlElement);
console.log(document.body); // look for that new main created and added to the HTML Page

// ==========================

const attachAnEventListenerToHtmlElement = document.addEventListener("click", function () {
    console.log("clicking");
})