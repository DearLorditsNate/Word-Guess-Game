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
var wordBank = ["droid",
                "hoth",
                "tauntaun"];

// Letter Pressed by User
var letterPressed;

// HTML Elements
var lettersGuessed = document.getElementById("letters-guessed");

// Blank spaces equal to random word choice from word bank array
var blankSpaces = document.getElementById("current-word");

// Random Word Choice from Word Bank Array
var randomWord;

// Guesses remaining
var guessesRemaining = document.getElementById("guesses-remaining");

// // New Div
// var newDiv = document.createElement("div");

/*
======================================
Event Listeners
======================================
*/

// Listen for Key Press (A-Z Only) | Store Letter in Lowercase
document.onkeyup = function() {
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        var keyPressed = String.fromCharCode(event.keyCode).toLowerCase();
        letterPressed = keyPressed;
        console.log(letterPressed);

        // Display Letters Pressed
        displayLettersPressed(keyPressed, lettersGuessed);

        // Subtract Guess
        subtractGuess();
    };
};

/*
======================================
Function Declarations
======================================
*/

// Display String of Letters Pressed
function displayLettersPressed(letter) {
    lettersGuessed.innerHTML += letter;
};

// // working on a  version of of displayLettersPressed that doesn't allow repeat letter presses...
// function displayLettersPressed(letter, str) {
//     for (var i = 0; i < str.length; i++) {
//         if (str.charAt(i) != letter) {
//             lettersGuessed.innerHTML += letter;
//         }
//     }
// }

// Choose a random item from the Word Bank array
function getRandomWord(arr) {
    randomWord = arr[Math.floor(Math.random() * arr.length)];
    console.log(randomWord);
};

// Print number of blank spaces equal to random word from word bank
function printBlankSpaces(str) {
    for (var i = 0; i < str.length; i++) {
        blankSpaces.innerHTML += " _ ";
    };
};

// Subtract guess from guesses remaining
function subtractGuess() {
    if (guessesRemaining.innerHTML > 0) {
        guessesRemaining.innerHTML -= 1;
    } else {
        alert("Game over!");
    };
};


/*
======================================
Function Calls
======================================
*/

// console.log(code);

getRandomWord(wordBank);

printBlankSpaces(randomWord);