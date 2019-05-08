//Letters function to determine if letter is guessed correctly or incorrectly.

function Letter(v) {

    //setting the value.
    this.letter = v;
    //letter is initially unguessed so set to false.
    this.guessed = false;


    //method to log guessed letter into a string.

    this.toString = function() {

      // if letter in object compares to the input,show the value.
      if (this.letter === " ") {
        this.guessed = true;
        return " ";
        
      } else {

        // if incorrect show underscore.
        if (this.guessed === false) {
          return "_";
        } else {
          return this.letter;
        }
      }
    };
    

    //If guess correct change guessed to true.
    this.guess = function(guess) {
      if (guess === this.letter) {
        this.guessed = true;
      }
    };
  }
   
  //Exporting the function.
  module.exports = Letter;