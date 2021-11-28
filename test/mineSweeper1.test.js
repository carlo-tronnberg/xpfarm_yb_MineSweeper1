const { Game } = require('../src/mineSweeper1');

describe("I want to play a game of Mine Sweeper where I'll win if I clear the board without stepping on a bomb", () => {
  describe('US1 Game Board Creation', () => {
    describe('Create the empty Game Board', () => {
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
        'When creating a Game Board of %i by %i, I should get %o',
        (width, height, gameBoard) => {
          const game = new Game(width, height);
          expect(game.getBoard()).toEqual(gameBoard);
        }
      );
    });
  });
});
