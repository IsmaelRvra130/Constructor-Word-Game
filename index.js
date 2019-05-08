
//Adding the word.js file.
var Word = require("./word.js");

//Adding the inquirer NPM.
var inquirer = require("inquirer");

// letters to guess.
var letterArray = "abcdefghijklmnopqrstuvwxyz";

// List of football teams that will be choosen to guess.
var footballTeams = [
  "cardinals",
  "falcons",
  "ravens",
  "bills",
  "panthers",
  "bears",
  "bengals",
  "browns",
  "cowboys",
  "broncos",
  "lions",
  "packers",
  "texans",
  "colts",
  "jaguars",
  "chiefs",
  "chargers",
  "rams",
  "dolphins",
  "vikings",
  "patriots",
  "saints",
  "giants",
  "jets",
  "raiders",
  "eagles",
  "steelers",
  "49rs",
  "seahawks",
  "buccaneers",
  "titans",
  "redskins"
];

// Pick Random football team letter from array
var randomIndex = Math.floor(Math.random() *footballTeams.length);
//Pick Random football team name
var randomName = footballTeams[randomIndex];

// Pass random name through Word constructor
var computerWord = new Word(randomName);

var requireNewName = false;

// Array for guessed letters
var incorrectLetters = [];

var correctLetters = [];

// Guesses left
var guessesLeft = 10;

function theLogic() {

  // Generates new word for Word constructor if true
  if (requireNewName) {

    // setting the random index for names.
    var randomIndex = Math.floor(Math.random() * footballTeams.length);
    
    var randomName =footballTeams[randomIndex];

    // Passes random word through the Word constructor
    computerWord = new Word(randomName);

    requireNewName = false;
  }

  //checking letters guessed is correct from object.
  var wordComplete = [];

  //checking throught he array
  computerWord.objArray.forEach(completeCheck);

  // prompt to began game.
  if (wordComplete.includes(false)) {
    inquirer
      .prompt([
        {
            //prompt to guess the NFL team name
          type: "input",
          message: "Guess this NFL football team name!!",
          name: "userinput"
        }
      ])
      .then(function(input) {
        if (
            //if no letters are correct.
          !letterArray.includes(input.userinput) ||
          input.userinput.length > 1
        ) {
            //prompts that you suck and to try again.
          console.log("\nPathetic, try again tough guy!\n");
          theLogic();
        } else {
          if (
              //true or false if user input choose index of the name already.
            incorrectLetters.includes(input.userinput) ||
            correctLetters.includes(input.userinput) ||
            input.userinput === ""
          ) {
              //prompt if already choosen.
            console.log("\nAlready Guessed this letter, dummy!\n");
            theLogic();
          } else {

            // Checks if guess is correct
            var wordCheckArray = [];

            computerWord.userGuess(input.userinput);

            // Checks if guess is correct or incorrect.
            computerWord.objArray.forEach(wordCheck);

            
            if (wordCheckArray.join("") === wordComplete.join("")) {
                //prompt that letter picked was incorrect
              console.log("\nWrong choice!\n");

                //adding wronge letters picked into array.
              incorrectLetters.push(input.userinput);

              //dropping the guesses left counter
              guessesLeft--;

            } else {
                //prompt if letter picked was correct.
              console.log("\nYou got it!!\n");

              //adding the right letters picked into the array.

              correctLetters.push(input.userinput);
            }

            computerWord.log();

            // Print guesses left
            console.log("Guesses Left: " + guessesLeft + "\n");

            // Print letters guessed already
            console.log(
              "Letters Guessed: " + incorrectLetters.join(" ") + "\n"
            );

            // if guesses left are none
            if (guessesLeft > 0) {
              // Call logic function
              theLogic();
            } else {
                //then prompt that you lost
              console.log("Apperently you dont know many football team names! Try again!\n");

                //call restart function
              restart();
            }
            //checking if guessed array is correct
            function wordCheck(key) {
              wordCheckArray.push(key.guessed);
            }
          }
        }
      });
  } else {
      //prompt that you won
    console.log("GOOD JOB, YOU WIN!\n");
    
    //calling restart function after the win.
    restart();
  }

  function completeCheck(key) {
    wordComplete.push(key.guessed);
  }
}

  