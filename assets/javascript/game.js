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

// Array to push guessed letters to
var lettersGuessed = [];

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

        // Has won?
        hasWon(randomWord);

        // Subtract Guess
        // subtractGuess();


    };
};

/*
======================================
Function Declarations
======================================
*/

// Display list of letters pressed, not allowing for duplicate key presses
function displayLettersPressed(letter, list) {
    // Push letter pressed into the array
    lettersGuessed.push(letter);

    // Cycle through that array to remove duplicates
    // (and if it has to remove a duplicate, don't subract a guess)

    var i; 
    var result = [];
    var obj = {};
    var pushedLetter;
    for (i = 0; i < list.length; i++) {
        obj[list[i]] = 0;
    };
    for (i in obj) {
        result.push(i);
        pushedLetter = true;
    };
    // if (pushedLetter) {
    //     subtractGuess();
    // }
    console.log(result);
    document.getElementById("letters-guessed").innerText = result.join(" ").toUpperCase();
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

// Subtract one guess from guesses remaining
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

// Determine if user has won
function hasWon(word) {
    var currentStatus = "";
    for (var i = 0; i < word.length; i++) {
        currentStatus += document.getElementById(i).innerHTML;
    };
    if (currentStatus === word) {
        alert("You've won!");
        newGame();
    };
};

// Start New Game
function newGame() {
    document.getElementById("current-word").innerHTML = "";
    document.getElementById("letters-guessed").innerHTML = "";
    lettersGuessed = [];
    guessesRemaining = document.getElementById("guesses-remaining");
    blankSpaces = document.getElementById("current-word");
    getRandomWord(wordBank);
    printBlankSpaces(randomWord);
};

/*
======================================
Function Calls
======================================
*/

// console.log(code);

// Initialize first round
newGame();



