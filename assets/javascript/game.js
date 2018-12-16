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
document.onkeyup = function (event) {
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        var code = String.fromCharCode(event.keyCode).toLowerCase();
        console.log(code);
    };
};

/*
======================================
Function Declarations
======================================
*/


/*
======================================
Function Calls
======================================
*/

// keyPressed();
