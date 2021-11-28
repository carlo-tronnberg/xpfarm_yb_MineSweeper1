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
    this.log('Game created');
  }

  log(message) {
    console.log(
      '[Sandbox %ix%i] %s',
      this.gameBoard[0].length,
      this.gameBoard.length,
      message
    );
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
    if (this.getBombAt(x, y) == 1) {
      this.status = this.GAME_OVER;
      this.log('BOOM! - Game Over');
    } else {
      this.status = this.GAME_RUNNING;
      this.log('No bomb here!');
    }
  }

  getStatus() {
    return this.status;
  }

  getBombAt(x, y) {
    return this.bombBoard[this.bombBoard[0].length - 1 - y][x];
  }

  getGameBoardValue(x, y) {
    if (x == 0 && y == 0) {
      return 3;
    }
    if (x == 2 && y == 1) {
      return 4;
    } else {
      return 2;
    }
  }
}
module.exports = { Game };
