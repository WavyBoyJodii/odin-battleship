import { Gameboard } from './gameboard';
import { Ship } from './ship';
import { startButton, startAndRemoveButton } from '.';
import './style.css';

function setupGame() {
  const player1 = Gameboard();
  const player2 = Gameboard();

  player1.createAndAddShips();
  player2.createAndAddShips();

  return { player1, player2 };
}

// function getRandomCoordinate() {
//   return {
//     row: Math.floor(Math.random() * 10),
//     col: Math.floor(Math.random() * 10),
//   };
// }

export function getPlayerInput(row, col) {
  // Implement a function to get the attack coordinates from the player's input
  // You can use the 'prompt' method or any other method to get the input
  return { row, col };
}

function isCoordinateValid(player, row, col) {
  const { board } = player;
  return (
    row >= 0 && row < 10 && col >= 0 && col < 10 && board[row][col] !== 'HIT'
  );
}

// function isGameOver() {
//   if (
//     (currentPlayer === player1 ? player2.allSunk() : player1.allSunk()) === true
//   ) {
//     console.log("Congratulations! You've sunk all the opponent's ships!");
//     dialogBox.textContent =
//       "Congratulations! You've sunk all the opponent's ships!";
//     console.log('Player', currentPlayer === player1 ? '1' : '2', 'wins!');
//     if (currentPlayer === player1) {
//       dialogBox.textContent =
//         "Congratulations! You've sunk all the opponent's ships!";
//     } else {
//       dialogBox.textContent = 'The Computer Wins!';
//     }
//     //   break;
//     gameActive = false;
//   }
// }

let gameActive = null;

export function playGame() {
  const { player1, player2 } = setupGame();
  let currentPlayer = player1;
  gameActive = true;

  // const player1Board = document.getElementById('player1-board');
  // const player2Board = document.getElementById('player2-board');
  function initGameboard(player, containerId, isPlayerBoard) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';

    for (let row = 0; row < 10; row += 1) {
      for (let col = 0; col < 10; col += 1) {
        const cell = document.createElement('div');
        cell.dataset.row = row;
        cell.dataset.col = col;

        if (isPlayerBoard) {
          if (player.board[row][col] === null) {
            cell.textContent = '';
          } else if (player.board[row][col] === 'HIT') {
            cell.textContent = 'H';
            cell.classList.add('hit');
          } else {
            cell.textContent = 'M';
            cell.classList.add('miss');
          }
        } else if (player.board[row][col] === 'HIT') {
          cell.textContent = 'H';
          cell.classList.add('hit');
        } else {
          cell.textContent = '';
        }
        if (!isPlayerBoard) {
          cell.addEventListener('click', () => makeMove(row, col));
        }

        container.appendChild(cell);
      }
    }
  }
  function displayShipsLeft(gameboard, containerId) {
    const container = document.getElementById(containerId);
    const remainingShips = gameboard.ships.filter(
      (ship) => !ship.isSunk()
    ).length;

    container.textContent = `Ships Left: ${remainingShips}`;
  }

  function isGameOver() {
    if (
      (currentPlayer === player1 ? player2.allSunk() : player1.allSunk()) ===
      true
    ) {
      console.log("Congratulations! You've sunk all the opponent's ships!");
      dialogBox.textContent =
        "Congratulations! You've sunk all the opponent's ships!";
      console.log('Player', currentPlayer === player1 ? '1' : '2', 'wins!');
      if (currentPlayer === player1) {
        dialogBox.textContent =
          "Congratulations! You've sunk all the opponent's ships!";
      } else {
        dialogBox.textContent = 'The Computer Wins!';
      }
      //   break;
      gameActive = false;
      startButton.addEventListener('click', startAndRemoveButton);
      document.body.append(startButton);
    }
  }

  initGameboard(player1, 'player1-board', true);
  initGameboard(player2, 'player2-board');
  console.log("Current Player's Gameboard:");
  console.table(currentPlayer.board);

  const dialogBox = document.getElementById('dialog');

  dialogBox.textContent = "Player 1's turn";
  // Potential targets for the computer-controlled Player 2
  const computerTargets = [];
  for (let row = 0; row < 10; row += 1) {
    for (let col = 0; col < 10; col += 1) {
      computerTargets.push({ row, col });
    }
  }
  function makeMove(row, col) {
    if (gameActive) {
      console.log(`${row} ${col}`);
      if (isCoordinateValid(player2, row, col)) {
        // Perform the attack on the opponent's gameboard
        const attackedShip = player2.receiveAttack(row, col);
        // Display the result of the attack
        if (attackedShip) {
          console.log('You hit a ship!');
          dialogBox.textContent = 'You hit a ship!';
          if (attackedShip.isSunk()) {
            console.log('The ship has been sunk!');
            dialogBox.textContent = 'You hit a ship! The Ship has been Sunk!';
          }
        } else {
          console.log('You missed!');
          dialogBox.textContent = 'You Missed!';
        }
      } else {
        console.log('Invalid coordinates. Try again.');
        dialogBox.textContent = 'Invalid coordinates. Try again.';
        return;
      }
      initGameboard(player2, 'player2-board');
      displayShipsLeft(player2, 'ships-player2');
      isGameOver();
      currentPlayer = currentPlayer === player1 ? player2 : player1;
      computerMove();
    }
  }

  function computerMove() {
    if (gameActive) {
      const aiTargetIndex = Math.floor(Math.random() * computerTargets.length);
      const { row, col } = computerTargets[aiTargetIndex];
      console.log(`computers moves ${row} ${col}`);
      if (isCoordinateValid(player1, row, col)) {
        // Perform the attack on the opponent's gameboard
        const attackedShip = player1.receiveAttack(row, col);

        // Remove the attacked coordinate from the potential targets list
        computerTargets.splice(aiTargetIndex, 1);

        // Add adjacent coordinates to the potential targets list if they are valid and not attacked
        const adjacentCoords = [
          { row: row - 1, col },
          { row: row + 1, col },
          { row, col: col - 1 },
          { row, col: col + 1 },
        ];
        for (const { row: r, col: c } of adjacentCoords) {
          if (isCoordinateValid(player1, r, c)) {
            computerTargets.push({ row: r, col: c });
          }
        }

        // Display the result of the attack
        if (attackedShip) {
          console.log('Computer hit a ship!');
          // dialogBox.textContent = 'The Computer hit a ship!';
          if (attackedShip.isSunk()) {
            console.log('The ship has been sunk!');
            // dialogBox.textContent =
            //   'The Computer hit a ship! The Ship Has Been Sunk!';
          }
        } else {
          console.log('Computer missed!');
          // dialogBox.textContent = 'The Computer missed!';
        }
      }
      initGameboard(player1, 'player1-board', true);
      displayShipsLeft(player1, 'ships-player1');
      console.log("Current Player's Gameboard:");
      console.table(player1.board);
      isGameOver();
      currentPlayer = currentPlayer === player1 ? player2 : player1;
    }
  }
}
