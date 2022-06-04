var buttonTest = document.getElementById('testBtn');

var emptyExample = document.getElementById('emptyExample')

// function changeClass() {
//     buttonTest.classList.remove("buttonID");
//     buttonTest.classList.add("buttonID2");

    // if (buttonTest.className === 'buttonID') {
    //     buttonTest.className = 'buttonID2';
    // };

    // console.log(buttonTest.className)
// };

// buttonTest.addEventListener("click", changeClass);
function emptyDiv(){
    $('#emptyExample').empty();
};


buttonTest.addEventListener("click", emptyDiv);