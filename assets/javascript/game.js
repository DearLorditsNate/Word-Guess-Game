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
var wordBank = ["DROID", "HOTH", "TAUNTAUN"];

// Clue Bank
var clueBank = ["Their kind aren't welcome here", "Snow day", "They smell terrible, but they'll keep you alive"]

// Letter Pressed by User
var letterPressed;

// Array to push guessed letters to
var lettersGuessed = [];

// Random Word Choice from Word Bank Array
var randomWord;

// Guesses remaining
var guessesRemaining = document.getElementById("guesses-remaining");

// Spans to use for blank space generation
var newSpan = document.createElement("span");

// Win/Loss Counters
var wins = 0;
var losses = 0;

/*
======================================
Event Listeners
======================================
*/

// Listen for Key Press (A-Z Only) | Store Letter in Uppercase
document.onkeyup = function() {
    // Separate this out into a helper function?
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        var keyPressed = String.fromCharCode(event.keyCode).toUpperCase();
        letterPressed = keyPressed;
        console.log(letterPressed);

        // Display Letters Pressed
        displayLettersPressed(letterPressed, lettersGuessed);

        // Reveal Letters
        revealLetters(randomWord, letterPressed);

        // Has won?
        hasWon(randomWord);

        // Subtract Guess
        subtractGuess();


    };
};

// Event listener for New Game Button
document.getElementById("new-game-button").onclick = function() {
    newGame();
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
        // pushedLetter = true;
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
    var blankSpaces = document.getElementById("current-word");
    for (var i = 0; i < str.length; i++) {
        newSpan = document.createElement("span");
        newSpan.setAttribute("id", (i));
        newSpan.innerHTML = " _ ";
        blankSpaces.appendChild(newSpan);
    };
};

// Print Clue
function printClue(word, clues) {
    var index = wordBank.indexOf(word);
    var print = document.getElementById("clue");
    for (var i = 0; i < clues.length; i++) {
        if (index === i) {
            newSpan = document.createElement("span");
            newSpan.innerHTML = clues[i];
            print.appendChild(newSpan);
        };
    };
};

// Subtract one guess from guesses remaining
function subtractGuess() {
    if (guessesRemaining.innerHTML > 0) {
        guessesRemaining.innerHTML--;
    } else {
        alert("Game over!");
        document.getElementById("new-game-button").style.visibility = "visible";
        losses++;
        document.getElementById("losses").innerText = "Losses: " + losses;
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
        document.getElementById("new-game-button").style.visibility = "visible";
        wins++;
        document.getElementById("wins").innerText = "Wins: " + wins;
    };
};

// Start New Game
function newGame() {
    // Reset Current Word
    document.getElementById("current-word").innerHTML = "";
    blankSpaces = document.getElementById("current-word");
    getRandomWord(wordBank);
    printBlankSpaces(randomWord);
    printClue(randomWord, clueBank);
    // Reset Letters Guessed
    document.getElementById("letters-guessed").innerHTML = "";
    lettersGuessed = [];
    // Reset Guesses Remaining
    document.getElementById("guesses-remaining").innerHTML = "60";
    // Hide New Game Button
    document.getElementById("new-game-button").style.visibility = "hidden";
};

/*
======================================
Function Calls
======================================
*/

// console.log(code);

// Initialize first round
newGame();



