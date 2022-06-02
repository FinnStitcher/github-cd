/*
    READ THIS FOR MORE IN DEPTH
    https://developer.mozilla.org/en-US/docs/Web/API/Event

    Short Descrip

    The event parameter is first arguemnt that is built into the Event Listener in JS
    - it contains all of the information that comes from that particular event
    - There are various types of events

    Any type of event listener
*/

const firstDiv = document.querySelector(".findMeByClass");

firstDiv.addEventListener("click", function(event) {
    // Take a look at the console to see the whole value being printed out
    // Go through the dropdown menu
    console.log(event);

    /*
        common properties on the event object that will be used
            - event.target

        Then within the target property, there are even more commonly used properties
            - event.target.classList
            - event.target.previousElementSibling
            - event.target.id
            - event.target.textContent
            - event.target.innerHTML
        
        You can even keep going through the the properties like so
            - event.target.previousSibling.textContent
    */
})