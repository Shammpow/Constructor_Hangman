var Word = require('./Word.js')

function Game(choice) {
    this.classes = ['paladin', 'barbarian', 'cleric', 'bard', 'monk', 'warlock', 'fighter', 'druid', 'ranger'];
    this.races = ['dwarf', 'elf', 'halfling', 'human', 'dragonborn', 'gnome', 'tiefling'];
    this.randoWord = this[choice][Math.floor(Math.random() * this[choice].length)];
    this.word = new Word(this.randoWord);
    this.displayWord = this.word.displayWordToGuess();

    this.userGuesses = [];
    this.incorrectGuesses = [];
    this.displayincorrectGuesses = ' ';
    this.guessesRemaining = 10;
};

Game.prototype.checkLetters = function (guessedLetter) {
    var letters = /^[A-Za-z]+$/;
    if (!guessedLetter.value.match(letters)) {
        console.log("Only letters!")
    }
    else {
        if (this.guesses.indexOf(guessedLetter) > -1) {
            console.log("You guessed that already!")
        }
        else if (this.targetWord.toUpperCase().indexOf(guessedLetter) === -1) {
            this.incorrectGuesses.push(guessedLetter);
            this.displayIncorrectGuesses = this.incorrectGuesses.join(" ");
            this.guessesRemaining--;
            console.log("Incorrect!");
        }
        else {
            this.word.checkLetters(guessedLetter);
            this.displayWord = this.word.displayWordToGuess();
            console.log("Correct!");
        };
        this.userGuesses.push(guessedLetter);
    };

};


module.exports = Game;