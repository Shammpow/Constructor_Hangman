var GameLogic = require("./GameLogic.js");
var inquirer = require('inquirer');

function newGame() {
    startPrompt = {
        type: 'list',
        message: 'Choose a topic',
        choices: ['classes', 'races'],
        name: 'choice'
    };

}

function guessingFunc(game) {
	function guessALetter() {
		var guessALetterPrompt = {
			type: "input",
			message: "Guess a letter!",
			name: "guessedLetter"
		};

		return inquirer.prompt(guessALetterPrompt)
	}; 
}

// What's left to do is actually get the functions called to this file.
// Have the prompt accept user input and display the underscores on the terminal.
// Update if it's wrong by adding it to incorrect guess array.
// Update guesses left.
// If the guess is a letter in the word, then display word.
// If all letters are displayed, game over and ask to play again.
// If all guesses are gone, game over and ask to play again.