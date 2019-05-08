
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
  computerWord.objArray.forEach(completeCheck);

  