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
// var lettersGuessed = document.getElementById("letters-guessed");

// Array to push guessed letters to
var lettersGuessed = [""];

// Blank spaces equal to random word choice from word bank array
var blankSpaces = document.getElementById("current-word");

// Random Word Choice from Word Bank Array
var randomWord;

// Guesses remaining
var guessesRemaining = document.getElementById("guesses-remaining");

// Spans to use for blank space generation
var newSpan = document.createElement("span");

/*
======================================
Event Listeners
======================================
*/

// Listen for Key Press (A-Z Only) | Store Letter in Lowercase
document.onkeyup = function() {
    // Separate this out into a helper function?
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        var keyPressed = String.fromCharCode(event.keyCode).toLowerCase();
        letterPressed = keyPressed;
        console.log(letterPressed);

        // Display Letters Pressed
        displayLettersPressed(letterPressed, lettersGuessed);

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
// function displayLettersPressed(letter) {
//     lettersGuessed.innerHTML += letter;
// };

// working on a version of of displayLettersPressed that doesn't allow repeat letter presses...
// function displayLettersPressed(letter, str) {
//     // console.log(str.innerHTML);
//     var toString = str.innerHTML;
//     for (var i = 0; i < toString.length; i++) {
//         if (toString.charAt(i) === letter) {
//             // lettersGuessed.innerHTML += letter;
//             return false;
//         } else {
//             // lettersGuessed.innerHTML += "";
//             lettersGuessed.innerHTML += letter;
//         };
//         // console.log(letterGuessed.innerHTML);
//         // console.log(toString);
//     };
// };


// it prints the letter one time for each match it DOESNT find. so if the array is 5 long, it finds 5 non-matches and prints the letter 5 times
function displayLettersPressed(letter, list) {
    for (var i = 0; i < list.length; i++) {
        if (list[i] !== letter) {
            lettersGuessed.push(letter);
        };
    };
    console.log(lettersGuessed);
};

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
        guessesRemaining.innerHTML--;
    } else {
        alert("Game over!");
    };
};

// Reveal letters if guessed correctly
function revealLetters(word, letter) {
    for (var i = 0; i < word.length; i++) {
        if (letter == word.charAt(i)) {
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

