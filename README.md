[![Run Tests](https://github.com/carlo-tronnberg/xpfarm_yb_MineSweeper1/actions/workflows/main.yml/badge.svg)](https://github.com/carlo-tronnberg/xpfarm_yb_MineSweeper1/actions/workflows/main.yml/badge.svg)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=carlo-tronnberg_xpfarm_yb_MineSweeper1&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=carlo-tronnberg_xpfarm_yb_MineSweeper1)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=carlo-tronnberg_xpfarm_yb_MineSweeper1&metric=bugs)](https://sonarcloud.io/summary/new_code?id=carlo-tronnberg_xpfarm_yb_MineSweeper1)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=carlo-tronnberg_xpfarm_yb_MineSweeper1&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=carlo-tronnberg_xpfarm_yb_MineSweeper1)
[![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=carlo-tronnberg_xpfarm_yb_MineSweeper1&metric=ncloc)](https://sonarcloud.io/summary/new_code?id=carlo-tronnberg_xpfarm_yb_MineSweeper1)
[![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=carlo-tronnberg_xpfarm_yb_MineSweeper1&metric=sqale_index)](https://sonarcloud.io/summary/new_code?id=carlo-tronnberg_xpfarm_yb_MineSweeper1)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=carlo-tronnberg_xpfarm_yb_MineSweeper1&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=carlo-tronnberg_xpfarm_yb_MineSweeper1)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=carlo-tronnberg_xpfarm_yb_MineSweeper1&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=carlo-tronnberg_xpfarm_yb_MineSweeper1)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=carlo-tronnberg_xpfarm_yb_MineSweeper1&metric=reliability_rating)](https://sonarcloud.io/summary/new_code?id=carlo-tronnberg_xpfarm_yb_MineSweeper1)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=carlo-tronnberg_xpfarm_yb_MineSweeper1&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=carlo-tronnberg_xpfarm_yb_MineSweeper1)
[![Open Issues](https://img.shields.io/github/issues/carlo-tronnberg/badge.svg)](https://github.com/carlo-tronnberg/xpfarm_yb_MineSweeper1/issues)

[![Build Status](coverage/badge-branches.svg)](coverage/badge-branches.svg)
[![Build Status](coverage/badge-functions.svg)](coverage/badge-functions.svg)
[![Build Status](coverage/badge-lines.svg)](coverage/badge-lines.svg)
[![Build Status](coverage/badge-statements.svg)](coverage/badge-statements.svg)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

[Metrics report](metrics.md) -
[Complexity report](complexity-report.md)

# xpfarm_yb_MineSweeper1

xpfarm_yb_MineSweeper1

---

## Installation

To set up the project, you need node installed.

To install dependencies, run the following:

```sh
npm install
```

## Run the tests

To run the tests, there is a script in the project root called `test`. It calculates code coverage, incorporates
watch mode, and prints in verbose mode, so all test file's test report will be visible. Alternatively, you
can achieve the same with the command the script contains:

```sh
npm test -- --watchAll --collect-coverage --verbose
```

## Stories with few scenarios

## UAT Scenario

As a gamer, I want to play a game of Mine Sweeper where I'll win if I clear the board without stepping on a bomb.

### User story #1 - Game Board Creation

```
As a gamer
I want to get a board of squares with hidden mines
So that I play the game
```

#### Scenario #1

```
  Given a Game Board width and height
  When starting the game
  Then I want to create the empty Game Board
```

#### Scenario #2

```
  Given the Game Board
  When starting the game
  Then I want to create the hidden Bombs Board, matching the Game Board dimension
```

### User story #2 - Game Over - Lose the game by stepping on a bomb

```
As a gamer
I want to lose the game if I step on a bomb
So that I can try again with a new game
```

#### Scenario #1

```
  Given the Game Board
  When stepping on a square without a bomb
  Then the game with continue
```

#### Scenario #2

```
  Given the Game Board
  When stepping on a square having a bomb
  Then I will lose the game
```

### User story #3 - Get the number of neighbouring bombs when stepping on a clean square

```
As a gamer
I want to know how many bombs are around me
So that I can try to avoid them
```

#### Scenario #1

```
  Given the Game Board
  When stepping on a square without a bomb but having neighboring bomb(s)
  Then I want to see a count of neighboring bombs in the square
```

### User story #4 - Mark the bombs around

```
As a gamer
I want to be able to mark the potential bombs on the board
So that I can work on my winning moves
```

#### Scenario #1

```
  Given the Game Board
  When identifying a potential bomb square
  Then I want to be able to mark it with a '*'
```

### User story #5 - Game Victory

```
As a gamer
I want to win the game when all squares without bombs have been cleared
So that I can feel proud of my achievement
```

#### Scenario #1

```
  Given the Game Board
  When stepping on the last bomb-free square
  Then I want to win the Game
```

### User story #6 - Massive cleaning and victory

```
As a gamer
I want to clear all the neighboring empty squares until a neighboring bomb is found whne stepping on an empty square
So that I avoid trivial steps and complete the game quicker
```

#### Scenario #1

```
  Given the Game Board
  When stepping on a clear square with no neighboring bombs
  Then all neighboring squares with no bombs shall be cleared
```
