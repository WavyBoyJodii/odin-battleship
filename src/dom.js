import { playGame, getPlayerInput } from './gameplay';
import './style.css';

// export function initGameboard(player, containerId) {
//   const container = document.getElementById(containerId);
//   container.innerHTML = '';

//   for (let row = 0; row < 10; row += 1) {
//     for (let col = 0; col < 10; col += 1) {
//       const cell = document.createElement('div');
//       cell.dataset.row = row;
//       cell.dataset.col = col;
//       cell.addEventListener('click', () => getPlayerInput(row, col));

//       if (player.board[row][col] === null) {
//         cell.textContent = '';
//       } else if (player.board[row][col] === 'HIT') {
//         cell.textContent = 'H';
//         cell.classList.add('hit');
//       } else {
//         cell.textContent = 'M';
//         cell.classList.add('miss');
//       }

//       container.appendChild(cell);
//     }
//   }
// }
