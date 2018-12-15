class letter {
  constructor(letter = "") {
    this.letter = letter;
    if (letter === " ") {
      this.guessed = true;
    } else {
      this.guessed = false;
    }
  }
  retLetter() {
    return this.guessed ? this.letter : "_";
  }
  check(char) {
    this.guessed = char.toLowerCase() === this.letter.toLowerCase();
    return this.guessed;
  }
}

module.exports = letter;
