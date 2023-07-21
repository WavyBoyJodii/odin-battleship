import { experiments } from 'webpack';
import { Gameboard } from './gameboard';

test('Gameboard creates 10 x 10 grid for battleship placement', () => {
  const player1 = Gameboard();
  expect(player1.board).toHaveLength(10);
});

test('Gameboard creates ships', () => {
  const player1 = Gameboard();
  player1.createAndAddShips();
  expect(player1.ships).toHaveLength(5);
});

test('Gameboard can Recieve attacks at correct coordinates', () => {
  const player1 = Gameboard();
  player1.receiveAttack(5, 7);
  expect(player1.board[5][7]).toBe('HIT');
});

test('Gameboard cant be attacked at same coordinates twice', () => {
  const player1 = Gameboard();
  player1.receiveAttack(5, 7);
  expect(player1.receiveAttack(5, 7)).toBe(Error);
});

test('If a ship is hit the adjacent diagonal squares will be hit as well', () => {
  const player1 = Gameboard();
  player1.createAndAddShips();
  const coordinates = player1.getShipCoordinates();
  const { row, col } = coordinates[0];
  player1.receiveAttack(row, col);
  expect(player1.receiveAttack(row + 1, col + 1)).toBe(Error);
});

test('Gameboard can report if all ships are sunk or not', () => {
  const player1 = Gameboard();
  player1.createAndAddShips();
  expect(player1.allSunk()).toBe(false);
});
