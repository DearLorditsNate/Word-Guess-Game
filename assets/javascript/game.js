/*
 ________________________________
|                                |
|      Hangman | Star Wars       |
|________________________________|

*/

/*
======================================
Global Variables
======================================
*/

// Word Bank
var wordBank = ["droid", "hoth", "tauntaun"];

// Letter Pressed by User
var letterPressed;

// HTML Elements
var lettersGuessed = document.getElementById("letters-guessed");

// New Div
var newDiv = document.createElement("div");

/*
======================================
Event Listeners
======================================
*/

// Remove Title Screen and start game when any key is pressed
// document.onkeyup = function() {
//     document.write("Let's get started");
// }


// Listen for Key Press (A-Z Only) | Store Letter in Lowercase
document.onkeyup = function() {
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        var keyPressed = String.fromCharCode(event.keyCode).toLowerCase();
        letterPressed = keyPressed;
        console.log(letterPressed);

        // Display Letters Pressed
        displayLettersPressed(keyPressed, lettersGuessed);
    };
};

/*
======================================
Function Declarations
======================================
*/

// Make a for loop that gets the varible from the array, finds out how long it is, and appends the number of <p> "_"s that are equal to it

// Display String of Letters Pressed
function displayLettersPressed(letter, str) {
    lettersGuessed.innerHTML += letter;
}

// // working on a  version of of displayLettersPressed that doesn't allow repeat letter presses...
// function displayLettersPressed(letter, str) {
//     for (var i = 0; i < str.length; i++) {
//         if (str.charAt(i) != letter) {
//             lettersGuessed.innerHTML += letter;
//         }
//     }
// }


/*
======================================
Function Calls
======================================
*/

// console.log(code);