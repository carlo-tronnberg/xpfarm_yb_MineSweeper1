const mineSweeper1 = require('../src/mineSweeper1');

test('adds 1 + 2 to equal 3', () => {
  expect(mineSweeper1(1, 2)).toBe(3);
});

describe('UAT description (what the user would accept)', () => {
  describe('Scenario #1 - Adding numbers', () => {
    test.each`
      a    | b    | expected
      ${1} | ${2} | ${3}
      ${3} | ${2} | ${5}
    `(
      'GIVEN numbers $a and $b WHEN adding them THEN we should get $expected',
      ({ a, b, expected }) => {
        expect(mineSweeper1(a, b)).toEqual(expected);
      }
    );
  });
});

