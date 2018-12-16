/*
======================================
Hangman | Star Wars
======================================
*/

// Remove Title Screen and start game when any key is pressed
// document.onkeyup = function() {
//     document.write("Let's get started");
// }

// Word Bank
var wordBank = ["droid", "hoth", "tauntaun"];

// Listen for Key Press | A-Z Only
document.onkeyup = function(event) {
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        alert("input was a-z");
    };
}