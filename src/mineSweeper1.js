class Game {
  constructor(width, height) {
    if (width == 1) {
      this.gameBoard = [[0]];
    } else {
      this.gameBoard = [[0, 0]];
    }
  }
  getBoard() {
    return this.gameBoard;
  }
}
module.exports = { Game };
