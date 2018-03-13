var Letter = require("./letter")

function Word(word) {

    for (i = 0; i < word.length; i++) {
        console.log(word[i]);
        new Letter(word[i])
    }
};

Word.prototype.displayWordToGuess = function() {
    var letterArr = [];
    for (letter in this) {
        if (this[letter].showLetter) {
            letterArr.push(this[letter].showLetter())
        }
    };
    return letterArr.join(' ')
};

Word.prototype.checkLetters = function(guessedLetter) {
    for(letter in this) {
        if(this[letter].userGuess) {
            this[letter].userGuess(guessedLetter)
        }
    }
};

module.exports = Word;