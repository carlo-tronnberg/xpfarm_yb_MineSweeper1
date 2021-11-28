class Game {
  constructor(width, height) {
    this.createGameBoard(width, height);
  }

  getBoard() {
    return this.gameBoard;
  }

  setBombs(bombBoard) {
    this.bombBoard = bombBoard;
  }

  getBombs() {
    return this.bombBoard;
  }

  createGameBoard(width, height) {
    this.gameBoard = Array(height)
      .fill()
      .map(() => Array(width).fill(0));
  }
  drawGameBoard() {
    let gameBoardString = '';
    for (var i = 0; i < this.gameBoard.length; i++) {
      gameBoardString += '+-'.repeat(this.gameBoard[0].length) + '+\n|';
      for (let j = 0; j < this.gameBoard[i].length; j++) {
        gameBoardString += ' |';
      }
      gameBoardString += '\n';
    }
    gameBoardString += '+-'.repeat(this.gameBoard[0].length) + '+';
    return gameBoardString;
  }
}
module.exports = { Game };
