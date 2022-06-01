var container = document.querySelector(".container");

container.addEventListener("click", function(event) {
  var element = event.target;

  var elementState = element.getAttribute("data-state");

  if (elementState === "hidden") {
    var number = element.getAttribute('data-number');

    element.textContent = number;

    element.dataset.state = "visible";

    console.log(element.dataset.state);
  } else {
    element.textContent = "";

    element.dataset.state = "hidden";

    console.log(element.dataset.state);
  }
});
