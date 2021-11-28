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
      let gameBoardString =
        '+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+';
      const game = new Game(3, 3);
      expect(game.drawGameBoard()).toEqual(gameBoardString);
    });
  });

  describe('US2 Game Over - Lose the game by stepping on a bomb', () => {
    it.each([
      [0, 0, GAME_RUNNING],
      [1, 1, GAME_OVER],
      [0, 1, GAME_OVER],
      [0, 2, GAME_RUNNING],
    ])(
      'Given the 3x3 Game Board,  When stepping on a square without a bomb (%i,%i),  Then the game will be %s',
      (x, y, status) => {
        const game = new Game(3, 3);
        game.setBombs([
          [0, 0, 0], // ▲
          [1, 1, 0], // |
          [0, 1, 0], //  ——▶
        ]);
        game.stepOnSquare(x, y);
        expect(game.getStatus()).toEqual(status);
      }
    );
  });
  describe('US3 Get the number of neighbouring bombs when stepping on a clean square', () => {
    it.each([[0, 0, 3]])(
      'Given the Game Board,    When stepping on a square without a bomb (%i,%i) but having neighboring bomb(s),    Then I should get the count of %i neighboring bombs in the square',
      (x, y, count) => {
        const game = new Game(4, 4);
        game.setBombs([
          [0, 0, 0, 0],
          [1, 1, 0, 0],
          [1, 1, 0, 0],
          [0, 1, 0, 1],
        ]);
        game.stepOnSquare(x, y);
        expect(game.getGameBoardValue(x, y)).toBe(count);
      }
    );
  });
});
