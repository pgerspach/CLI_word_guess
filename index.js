let letter = require("./letter");
let word = require("./word");

let inquirer = require("inquirer");

let wordArray = [
  "Lord of the Rings",
  "The Emperors New Groove",
  "The Departed",
  "Caddyshack",
  "Shutter Island",
  "Dunkirk",
  "Prisoners",
  "Austin Powers"
];

startRound();

function startRound() {
  let wordNo = Math.floor(Math.random() * wordArray.length);
  let gameWord = new word(wordArray[wordNo]);
  let right = 0;
  let rem = 8;
  let guessedArray = [];

  console.log(gameWord.retStr());
  playGame(gameWord, right, wordNo, rem, guessedArray);
}

function playGame(gameWord, right, wordNo, rem, guessedArray) {
  inquirer
    .prompt([
      {
        name: "guess",
        messages: "Guess a letter: ",
        validate: input => {
          for (let guessed of guessedArray) {
            if (input.toLowerCase() === guessed.toLowerCase()) {
              console.log("\nLetter already guessed\n");
              console.log(gameWord.retStr());
              return false;
            }
          }
          return true;
        }
      }
    ])
    .then(response => {
      guessedArray.push(response.guess);
      let newRight = gameWord.guess(response.guess);
      console.log(gameWord.retStr());
      if (right - newRight === 0) {
        rem--;
        console.log("Incorrect guess\n");
      } else {
        console.log("Nice guess!\n");
      }

      right = newRight;

      if (right < gameWord.wordArray.length) {
        if (rem <= 0) {
          console.log("You lose");
        } else {
          playGame(gameWord, right, wordNo, rem, guessedArray);
        }
      } else {
        console.log("You got it!\n");
        wordArray.splice(wordNo, 1);
        if (wordArray.length === 0) {
            console.log("You got them all!")
          reset();
        }
        startRound();
      }
    });
}

function reset() {
  wordArray = [
    "Lord of the Rings",
    "The Emperors New Groove",
    "The Departed",
    "Caddyshack",
    "Shutter Island",
    "Dunkirk",
    "Prisoners",
    "Austin Powers"
  ];
  startRound();
}
