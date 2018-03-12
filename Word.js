var Letter = require("./letter")

function Word(word) {
    this.wordArr = word,
    this.splitLetters = function(word) {
        var character = this.wordArr.split('');
        var charAr = [];
        charAr = character;

        for (i = 0; i < charAr.length; i++) {
            console.log(charAr[i]);
            new Letter (charAr[i], charAr[i])
        }
    }
}

var foo = new Word("foo");
foo.splitLetters(foo);

module.exports = Word;