import { Ship } from './ship';

test('Ship Factory Function Works as is Supposed to', () => {
  const boat = Ship(3);
  expect(boat.length).toBe(3);
  expect(boat.isSunk()).toBe(false);
  expect(boat.hit()).toBe(1);
  expect(boat.hit()).toBe(2);
  expect(boat.hit()).toBe(3);
  expect(boat.isSunk()).toBe(true);
});
