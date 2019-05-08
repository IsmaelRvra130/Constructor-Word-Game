# Constructor-Word-Game

<h1>Advanced JavaScript Assignment using NodeJS.</h1><br>

<h2>Demonstration:</h2><br>
<img src =" ">

<h3>Instructions</h3>

The completed game should meet the following criteria:

1.The completed game should be able to receive user input using the inquirer or prompt npm packages.
2.Your solution should have, at minimum, three files:

<li><b>Letters.js:</b> Contains a constructor, Letter. This constructor should be able to either display an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. That means the constructor should define:</li>
        <ul>A string value to store the underlying character for the letter</ul>
        <ul>A boolean value that stores whether that letter has been guessed yet</ul>
        <ul>A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed</ul>
        <ul>A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly</ul>

<li><b>Word.js:</b>Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:</li>

<ul>An array of new Letter objects representing the letters of the underlying word</ul>
<ul>A function that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.</ul>
<ul>A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)</ul>

<li><b>index.js</b>The file containing the logic for the course of the game, which depends on Word.js and:</li>

<ul>Randomly selects a word and uses the Word constructor to store it</ul>
<ul>Prompts the user for each guess and keeps track of the user's remaining guesses</ul>

3.Letter.js should not require any other files.
4.Word.js should only require Letter.js.

