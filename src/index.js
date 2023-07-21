import { Gameboard } from './gameboard';
import { Ship } from './ship';
import { playGame } from './gameplay';
import './style.css';

export const startButton = document.getElementById('start');

export function startAndRemoveButton() {
  playGame();
  startButton.remove();
}

startButton.addEventListener('click', startAndRemoveButton);
