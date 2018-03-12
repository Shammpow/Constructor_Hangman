function Letter(letter){
    this.letter = letter,
    this.guess = false,
    this.letterSelect = function() {
        if(this.guess === false) {
            console.log("here")
            this.letter = "_ "
        }
        else {
            console.log(this.letter);
        }

    }

    this.guessTrue = function(a) {
        if (a === this.letter) {
            this.guess = true;
            console.log("there");

            this.letterSelect();

        }
        console.log("here?")
    }
}

var A = new Letter("A");

A.letterSelect();
var a = "A";
A.guessTrue(a);
module.exports = Letter;