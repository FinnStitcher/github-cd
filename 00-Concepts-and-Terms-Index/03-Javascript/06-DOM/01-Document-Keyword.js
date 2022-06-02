/*
    Here we are going to be recapping about the Document Object Model (DOM)

    The DOM can be thought of as this.
        - You're Tony Stark (Iron Man) and you have your suit of nanobots or nanotechnology.
        - His suit looks just like any other Iron Man suit, but he can utilize the nanobots to morph and change the suit to have whatever weapons he needs
        - Lets say you create a laser cannon with the nanobots
        - After fighting, you put the suit away while the laser cannon is still out.
        - Now when you takes it back out, the suit doesn't come back out with a laser cannon.
          It comes back out with no outer attachemnts



    Tony Stark can be thought of as the Dev
    Putting the suit on is like openning a Browser session that displays what the Users are seeing
    The nanobots are the DOM that can alter the visual experience of the user
    Taking the suit off is like closing a browser session


    
    So when open a browser session with the code you have, you open it with the default configuration that you set it to be
        - in this case, a normal-no-modded Iron Man suit
    
    But as the user interacts with the browser session, it dynamically manipulates itself to fit the needs of the situation
        - when fighting, new weapons come out
    
    Once the user is done using your web application(website), they'll close the tab or the browser itself
        - putting away the suit
    
    then repeat the cycle for every new user or even the same users
    


    The reason that the DOM is like the nanobots is because that is what's happening to the HTML in the browser     
        - The browser is breaking down the HTML down to it's smallest elements(nodes) and allowing us to manipulate them how we see fit
          while we stay on the page
*/

/*
    The way to access the DOM via JS
        - Use the document keyword

        Open the index.html and reference the example below
        Example below
*/

// This will reproduce in the console, the HTML code
console.log(document);

/*
    The document keyword is an object, and just like most built in JS objects, it has methods(functions) attached to it
    This is a list of common methods that you will encounter with a short description.
        - If you want the FULL SYNTAX, please google
*/

// The browser will error us out in the console --> this is to be expected because we're missing the full syntax
// Correct usage will be shown in a later mini application example
document.querySelector(); // allows you to locate any HTML Elements. Just pass in the right identifiers
document.getElementById(); // allows you to locate HTML Elements based on their id attributes
document.getElementsByClassName(); //allows you to locate multiple HTML ELements based on their class attribute
document.getElementsByTagName(); // allows you locate multiple HTML ELements based on their specifc HTML <tag>
document.createElement(); // allows you to create a new dynamic HTML Element within JS
document.append() // allows you to dynamically attach any static HTML element or dynamic HTML element to the Original HTML code base
document.addEventListener(); // allows you to give an HTML element the ability to pay attention to certain actions that a user does and do something based on that action


/*
    External Resources
    https://www.w3schools.com/js/js_htmldom_document.asp
    https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model

*/
