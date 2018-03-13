function Letter(letter) {
    this.letter = letter;
    if (letter === " ") {
        this.guess = true;
    }
    else {
        this.guess = false;
    }
};

Letter.prototype.showLetter = function() {
    if(this.guess === true) {
        return this.value;
    }
};

Letter.prototype.userGuess = function(guessedLetter) {
    if(this.value === guessedLetter) {
        this.guess = true;
    }
}

module.exports = Letter;