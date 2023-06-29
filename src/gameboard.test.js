import { Gameboard } from './gameboard';

test('Gameboard creates 10 x 10 grid for battleship placement', () => {
  const player1 = Gameboard();
  expect(player1.board).toHaveLength(10);
});
