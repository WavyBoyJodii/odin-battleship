export const Ship = (x) => {
  const length = x;
  let hits = 0;
  const hit = () => (hits += 1);
  const isSunk = () => {
    if (hits === length) return true;
    return false;
  };
  return { length, hits, hit, isSunk, positions: Array(length).fill(null) };
};
