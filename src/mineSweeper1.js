class Game {
  constructor(width, height) {
    this.gameBoard = Array(height)
      .fill()
      .map(() => Array(width).fill(0));
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
}
module.exports = { Game };
