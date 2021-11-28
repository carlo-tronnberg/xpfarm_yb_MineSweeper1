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

      it('Given a Game Board width 3 and height 3\nWhen starting the game\nThen I want to create the empty Game Board and get it back as a string', () => {
        let width = 3;
        let height = 3;
        let gameBoardString =
          '+-+-+-+\n| | | |+-+-+-+| | | |+-+-+-+| | | |+-+-+-+';
        const game = new Game(width, height);
        expect(game.drawGameBoard()).toEqual(gameBoardString);
      });
    });
    describe('Create the hidden Bombs Board, matching the Game Board', () => {
      it.each([
        [
          3,
          3,
          [
            [0, 0, 0],
            [1, 1, 0],
            [0, 1, 0],
          ],
        ],
      ])(
        'When creating a hidden Bombs Board of %i by %i, I should get %o',
        (width, height, bombBoard) => {
          const game = new Game(width, height);
          game.setBombs(bombBoard);
          expect(game.getBombs()).toEqual(bombBoard);
        }
      );
    });
  });
});
