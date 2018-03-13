var GameLogic = require("./GameLogic.js");
var inquirer = require('inquirer');

function newGame() {
    startPrompt = {
        type: 'list',
        message: 'Choose a topic',
        choices: ['classes', 'races'],
        name: 'choice'
    };

    inquirer.prompt(startPrompt).then(function(res) {
        var game = new Game(res.choice);
    })
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
