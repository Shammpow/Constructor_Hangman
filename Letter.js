function Letter(letter, original) {
    this.letter = letter,
        this.guess = false,
        this.original = original,
        this.letterSelect = function () {
            if (this.guess === false) {
                console.log("here")
                this.letter = "_ "
                console.log(this.letter)
            }
            else {
                this.letter = this.original;
                console.log(this.original)
            }

        }

    this.guessTrue = function (a) {
        if (a === this.original) {
            this.guess = true;
            console.log("there");

            this.letterSelect();

        }
        else {
            console.log("here?")
            console.log(this.letter)
        }
    }
}

var A = new Letter("A", "A");

A.letterSelect();
var a = "A";
A.guessTrue(a);
module.exports = Letter;