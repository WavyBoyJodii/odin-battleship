import { Gameboard } from './gameboard';
import { Ship } from './ship';
import { game } from './gameplay';

test('game loop starts', () => {
  const gameplay = game();
  gameplay.playGame();
  expect(gameplay.gameActive).toBe(true);
});
