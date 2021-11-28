const { Game } = require('../src/mineSweeper1');
const STEPPED_ON_BOMB = 'X';
const SQUARE_CLEAR = ' ';
const GAME_RUNNING = 'running';
const GAME_OVER = 'Game Over';

describe("I want to play a game of Mine Sweeper where I'll win if I clear the board without stepping on a bomb", () => {
  describe('US1 Game Board Creation', () => {
    it.each([
      [1, 1, [[0]]],
      [2, 1, [[0, 0]]],
      [1, 2, [[0], [0]]],
      [
        2,
        2,
        [
          [0, 0],
          [0, 0],
        ],
      ],
      [
        3,
        3,
        [
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0],
        ],
      ],
    ])(
      'Given a Game Board width %i and height %i,    When starting the game,    Then I should get the empty Game Board %o',
      (width, height, gameBoard) => {
        const game = new Game(width, height);
        expect(game.getBoard()).toEqual(gameBoard);
      }
    );

    it('Given a Game Board width 3 and height 3,    When starting the game,    Then I want to create the hidden Bombs Board, matching the Game Board dimension', () => {
      let width = 3;
      let height = 3;
      let bombBoard = [
        [0, 0, 0],
        [1, 1, 0],
        [0, 1, 0],
      ];
      const game = new Game(width, height);
      game.setBombs(bombBoard);
      expect(game.getBombs()).toEqual(bombBoard);
    });

    it('Given a Game Board width 3 and height 3,    When starting the game,    Then I want to create the empty Game Board and get it back as a string', () => {
      let width = 3;
      let height = 3;
      let gameBoardString =
        '+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+';
      const game = new Game(width, height);
      expect(game.drawGameBoard()).toEqual(gameBoardString);
    });
  });
});

describe('US2 Game Over - Lose the game by stepping on a bomb', () => {
  it('Given the 3x3 Game Board,  When stepping on a square without a bomb,  Then the game with continue', () => {
    let width = 3;
    let height = 3;
    let bombBoard = [
      [0, 0, 0],
      [1, 1, 0],
      [0, 1, 0],
    ];
    let gameBoardString =
      '+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+';
    const game = new Game(width, height);
    game.setBombs(bombBoard);
    game.stepOnSquare(0, 0);
    expect(game.stepOnSquare(0, 0)).toEqual(SQUARE_CLEAR);
    expect(game.getStatus()).toEqual(GAME_RUNNING);
  });
  it('Given the 3x3 Game Board,  When stepping on a square with a bomb,  Then it will be Game Over', () => {
    let width = 3;
    let height = 3;
    let bombBoard = [
      [0, 0, 0],
      [1, 1, 0],
      [0, 1, 0],
    ];
    let gameBoardString =
      '+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+';
    const game = new Game(width, height);
    game.setBombs(bombBoard);
    expect(game.stepOnSquare(1, 1)).toEqual(STEPPED_ON_BOMB);
    //expect(game.getStatus()).toEqual(GAME_OVER);
  });
});
