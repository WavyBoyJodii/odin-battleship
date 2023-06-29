import { Ship } from './ship';

export const Gameboard = () => {
  const board = [];
  for (let i = 0; i < 10; i += 1) {
    board.push(Array(10).fill(null));
  }

  const ships = [];

  const generateRandomPosition = () => {
    const row = Math.floor(Math.random() * 10);
    const col = Math.floor(Math.random() * 10);
    return { row, col };
  };

  const isPositionValid = (grid, row, col) => {
    if (row < 0 || row >= 10 || col < 0 || col >= 10) {
      return false;
    }
    if (grid[row][col] !== null) {
      return false;
    }
    for (let i = Math.max(0, row - 1); i <= Math.min(row + 1, 9); i += 1) {
      for (let j = Math.max(0, col - 1); j <= Math.min(col + 1, 9); j += 1) {
        if (grid[i][j] !== null) {
          return false;
        }
      }
    }
    return true;
  };

  function placeShipOnGrid(grid, ship) {
    const { length } = ship;
    // const { grid } = gameboard;

    let placed = false;
    while (!placed) {
      const { row, col } = generateRandomPosition();
      const orientation = Math.random() < 0.5 ? 'horizontal' : 'vertical';

      let valid = true;
      for (let i = 0; i < length; i += 1) {
        let currentRow = row;
        let currentCol = col;
        if (orientation === 'horizontal') {
          currentCol += i;
        } else {
          currentRow += i;
        }
        if (!isPositionValid(grid, currentRow, currentCol)) {
          valid = false;
          break;
        }
      }

      if (valid) {
        for (let i = 0; i < length; i += 1) {
          let currentRow = row;
          let currentCol = col;
          if (orientation === 'horizontal') {
            currentCol += i;
          } else {
            currentRow += i;
          }
          grid[currentRow][currentCol] = ship;
          //   ship.positions[i] = { row: currentRow, col: currentCol };
        }
        placed = true;
      }
    }
  }

  const createAndAddShips = () => {
    const shipLengths = [5, 4, 3, 3, 2];
    for (let i = 0; i < shipLengths.length; i += 1) {
      const ship = Ship(shipLengths[i]);
      placeShipOnGrid(board, ship);
      ships.push(ship);
    }
  };

  return {
    board,
    createAndAddShips,
    generateRandomPosition,
    isPositionValid,
    placeShipOnGrid,
  };
};
