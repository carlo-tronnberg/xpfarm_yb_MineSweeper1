class Game {
  GAME_RUNNING = 'running';
  GAME_OVER = 'Game Over';
  GAME_WIN = 'You Win';

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
      .map(() => Array(width).fill(' '));
    this.log('Game created');
  }

  log(message) {
    console.log(
      this.drawGameBoard() + '\n\n[Sandbox %ix%i] %s',
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
        gameBoardString += this.gameBoard[i][j] + '|';
      }
      gameBoardString += '\n';
    }
    gameBoardString += '+-'.repeat(this.gameBoard[0].length) + '+';
    return gameBoardString;
  }
  allowOperation(x, y) {
    return (
      this.getSquareValue(x, y) === ' ' || this.getSquareValue(x, y) === '*'
    );
  }

  stepOnSquare(x, y) {
    //if (!this.allowOperation(x, y)) return;
    var message = '';
    if (this.getBombAt(x, y) == 1) {
      this.status = this.GAME_OVER;
      this.setSquareValue(x, y, 'X');
      message = 'BOOM! - Game Over';
    } else {
      this.startRecursiveCheck(x, y);
      //this.setSquareValue(x, y, this.getNeighbouringBombsCount(x, y));
      if (this.winner()) {
        this.showBombs();
        this.status = this.GAME_WIN;
        message = 'the land is cleared! GOOD JOB!';
      } else {
        this.status = this.GAME_RUNNING;
        message = this.getSquareValue(x, y) + ' bomb(s) around your square.';
      }
    }
    this.log(message);
  }

  check;

  getStatus() {
    return this.status;
  }

  getBombAt(x, y) {
    if (
      this.valueIsBetween(x, 0, this.gameBoard[0].length - 1) &&
      this.valueIsBetween(y, 0, this.gameBoard.length - 1)
    ) {
      return this.bombBoard[this.bombBoard[0].length - 1 - y][x];
    }
    return 0;
  }

  valueIsBetween(value, min, max) {
    return value >= min && value <= max;
  }

  getNeighbouringBombsCount(x, y) {
    // Get bomb count for the 8 neighboring squares (but only within the board)
    var count = 0;
    count += this.getBombAt(x - 1, y - 1);
    count += this.getBombAt(x - 1, y);
    count += this.getBombAt(x - 1, y + 1);
    count += this.getBombAt(x, y - 1);
    count += this.getBombAt(x, y + 1);
    count += this.getBombAt(x + 1, y - 1);
    count += this.getBombAt(x + 1, y);
    count += this.getBombAt(x + 1, y + 1);
    if (count == 0) count = '_';
    return count;
  }

  startRecursiveCheck(x, y) {
    this.checkedBoard = Array(this.gameBoard.length)
      .fill()
      .map(() => Array(this.gameBoard[0].length).fill(false));
    // Recursive call
    this.checkNeighboringSquares(x, y);
  }

  checkNeighboringSquares(x, y) {
    if (
      this.valueIsBetween(x, 0, this.gameBoard[0].length - 1) &&
      this.valueIsBetween(y, 0, this.gameBoard.length - 1) &&
      this.getBombAt(x, y) == 0 &&
      this.checkedBoard[this.gameBoard[0].length - 1 - y][x] == false
    ) {
      this.setSquareValue(x, y, this.getNeighbouringBombsCount(x, y));
      this.checkedBoard[this.gameBoard[0].length - 1 - y][x] = true;
      this.checkNeighboringSquares(x - 1, y);
      this.checkNeighboringSquares(x - 1, y + 1);
      this.checkNeighboringSquares(x, y - 1);
      this.checkNeighboringSquares(x, y + 1);
      this.checkNeighboringSquares(x + 1, y - 1);
      this.checkNeighboringSquares(x + 1, y);
      this.checkNeighboringSquares(x + 1, y + 1);
    }
  }

  setSquareValue(x, y, value) {
    if (this.allowOperation(x, y))
      this.gameBoard[this.gameBoard[0].length - 1 - y][x] = value;
  }

  getSquareValue(x, y) {
    return this.gameBoard[this.gameBoard[0].length - 1 - y][x];
  }

  markBomb(x, y) {
    this.setSquareValue(x, y, '*');
    this.log('Square [' + x + ',' + y + '] flagged as bomb');
  }

  unmarkBomb(x, y) {
    this.setSquareValue(x, y, ' ');
    this.log('Square [' + x + ',' + y + '] unflagged as bomb');
  }

  winner() {
    var isWinner = true;

    this.gameBoard.forEach((row, i) => {
      row.forEach((square, j) => {
        if (this.squareIsSet(i, j)) {
          isWinner = false;
        }
      });
    });
    return isWinner;
  }

  squareIsSet(i, j) {
    return this.gameBoard[i][j] == ' ' && this.bombBoard[i][j] != 1;
  }

  showBombs() {
    for (var i = 0; i < this.gameBoard.length; i++) {
      for (let j = 0; j < this.gameBoard[i].length; j++) {
        if (this.bombBoard[i][j] == 1 && this.gameBoard[i][j] != '*')
          this.gameBoard[i][j] = 'X';
      }
    }
  }
}
module.exports = { Game };
