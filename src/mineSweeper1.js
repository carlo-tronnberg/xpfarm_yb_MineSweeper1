class Game {
  STEPPED_ON_BOMB = 'X';
  SQUARE_CLEAR = ' ';
  GAME_RUNNING = 'running';
  GAME_OVER = 'Game Over';

  constructor(width, height) {
    this.status = this.GAME_RUNNING;
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
    console.log(this.drawGameBoard());
    console.log('[Sandbox ' + width + 'x' + height + '] Game created');
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

  stepOnSquare(x, y) {
    console.log('x: %i, y:%i, bomb? %i', x, y, this.getBombAt(x, y));
    if (this.getBombAt(x, y) == 1) {
      this.status = this.GAME_OVER;
    } else this.status = this.GAME_RUNNING;
  }

  getStatus() {
    return this.status;
  }

  getBombAt(x, y) {
    return this.bombBoard[this.bombBoard[0].length - 1 - y][x];
  }
}
module.exports = { Game };
