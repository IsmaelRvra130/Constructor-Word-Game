# Constructor-Word-Game

<h1>Advanced JavaScript Assignment using NodeJS.</h1><br>

<h2>Demonstration:</h2><br>
<img src =" ">

<h3>Instructions</h3>

The completed game should meet the following criteria:

1.The completed game should be able to receive user input using the inquirer or prompt npm packages.<br>
2.Your solution should have, at minimum, three files:<br>

<li><b>Letters.js:</b> Contains a constructor, Letter. This constructor should be able to either display an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. That means the constructor should define:</li>
        <li>A string value to store the underlying character for the letter</li>
        <li>A boolean value that stores whether that letter has been guessed yet</li>
        <li>A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed</li>
        <li>A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly</li>
        <br>
        <br>

<li><b>Word.js:</b>Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:</li><br>

<li>An array of new Letter objects representing the letters of the underlying word</li>
<li>A function that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.</li>
<li>A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)</li>
<br>
<br>

<li><b>index.js</b>The file containing the logic for the course of the game, which depends on Word.js and:</li><br>

<li>Randomly selects a word and uses the Word constructor to store it</li>
<li>Prompts the user for each guess and keeps track of the user's remaining guesses</li>

3.Letter.js should not require any other files.<br>
4.Word.js should only require Letter.js.

