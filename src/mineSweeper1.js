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
}
module.exports = { Game };
