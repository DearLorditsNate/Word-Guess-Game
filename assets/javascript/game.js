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

var newSpan = document.createElement("span");

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

        // Reveal Letters
        revealLetters(randomWord, letterPressed);

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

// Print number of blank spaces equal to random word from word bank | creates a unique span with a unique numbered ID for each space
function printBlankSpaces(str) {
    for (var i = 0; i < str.length; i++) {
        newSpan = document.createElement("span");
        newSpan.setAttribute("id", (i));
        newSpan.innerHTML = " _ ";
        blankSpaces.appendChild(newSpan);
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

// Reveal letters if guessed correctly
function revealLetters(word, letter) {
    for (var i = 0; i < word.length; i++) {
        if (letter == word.charAt(i)) {
            // blankSpaces.innerHTML = "";
            for (var i = 0; i < word.length; i++) {
                if (letter == word.charAt(i)) {
                    var toReplace = document.getElementById((i));
                    toReplace.innerHTML = letter;
                };
            };
        };
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