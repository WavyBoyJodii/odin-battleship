import { Ship } from './ship';
import './style.css';

export const Gameboard = () => {
  const board = [];
  for (let i = 0; i < 10; i += 1) {
    board.push(Array(10).fill(null));
  }

  const ships = [];

  // Generate a random starting point for each ship.
  const generateRandomPosition = () => {
    const row = Math.floor(Math.random() * 10);
    const col = Math.floor(Math.random() * 10);
    return { row, col };
  };

  // check if it overlaps with existing ships or is adjacent to them.
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
          board[currentRow][currentCol] = ship;
          ship.positions[i] = { row: currentRow, col: currentCol };
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

  const getShipCoordinates = () => {
    const shipCoordinates = [];

    for (let row = 0; row < 10; row += 1) {
      for (let col = 0; col < 10; col += 1) {
        if (board[row][col] !== null && board[row][col] !== 'HIT') {
          shipCoordinates.push({ row, col });
        }
      }
    }

    return shipCoordinates;
  };

  // const recieveAttack = (x, y) => {
  //   if (x < 0 || y < 0 || x > 9 || y > 9) {
  //     return console.log(
  //       'input coordinates are off the board, values must be between 0 and 9'
  //     );
  //   }
  //   if (board[x][y] === 'HIT') return Error;
  //   if (board[x][y] !== null) {
  //     const search = board[x][y];
  //     const ship = ships.find(search);
  //     ship.hit();
  //     board[x][y] = 'HIT';
  //     board[x - 1][y - 1] = 'HIT';
  //     board[x - 1][y + 1] = 'HIT';
  //     board[x + 1][y - 1] = 'HIT';
  //     board[x + 1][y + 1] = 'HIT';
  //   } else board[x][y] = 'HIT';
  // };

  function receiveAttack(row, col) {
    // Check if the coordinates are already labeled "HIT"
    if (board[row][col] === 'HIT') {
      return Error;
    }

    // If the coordinates are null, mark it as "HIT"
    if (board[row][col] === null) {
      board[row][col] = 'HIT';
      return null;
    }

    // If the coordinates are occupied by a ship, get the ship and trigger its "hit" function
    const ship = board[row][col];
    ship.hit();

    // Mark the coordinates as "HIT"
    board[row][col] = 'HIT';

    // Check adjacent diagonal squares (if possible) and mark them as "HIT"
    const adjacentCoords = [
      { row: row - 1, col: col - 1 },
      { row: row - 1, col: col + 1 },
      { row: row + 1, col: col - 1 },
      { row: row + 1, col: col + 1 },
    ];

    for (const { row: r, col: c } of adjacentCoords) {
      if (r >= 0 && r < 10 && c >= 0 && c < 10) {
        board[r][c] = 'HIT';
      }
    }

    if (ship.isSunk()) {
      // Get the ship's positions and mark all adjacent squares as "HIT"
      const { positions } = ship;
      for (const { row: r, col: c } of positions) {
        const sunkCoords = [
          { sunkRow: r - 1, sunkCol: c },
          { sunkRow: r + 1, sunkCol: c },
          { sunkRow: r, sunkCol: c - 1 },
          { sunkRow: r, sunkCol: c + 1 },
        ];

        for (const { sunkRow, sunkCol } of sunkCoords) {
          if (sunkRow >= 0 && sunkRow < 10 && sunkCol >= 0 && sunkCol < 10) {
            board[sunkRow][sunkCol] = 'HIT';
          }
        }
      }
    }

    return ship;
  }

  const allSunk = () => {
    for (const ship of ships) {
      if (!ship.isSunk()) {
        return false;
      }
    }
    return true;
  };

  return {
    board,
    ships,
    createAndAddShips,
    generateRandomPosition,
    isPositionValid,
    placeShipOnGrid,
    getShipCoordinates,
    receiveAttack,
    allSunk,
  };
};
