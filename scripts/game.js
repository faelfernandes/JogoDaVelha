// Iniciar váriaveis
let board = ['', '', '', '', '', '', '', '', ''];
let playerTime = 0;
let symbols = ['o', 'x'];
let gameOver = false;

// Pega a posição que foi passada na Interface.js 
function handleMove(position) {

  // Verificar se o game terminou
  if (gameOver) {
    return;
  }

  // Garante que o board[position] é igual a vazio
  if (board[position] == '') {
    // Coloca o símbolo do jogador da vez
    board[position] = symbols[playerTime];

    gameOver = isWin();

    // Muda a vez do jogador fazendo com que o símbolo seja alterado
    if(gameOver == false) {
      if (playerTime == 0) {
        playerTime = 1;
      } else {
        playerTime = 0;
      }
    }
  }
  return gameOver;
}

function isWin() {

  let winStates = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]

  for (let i = 0; i < winStates.length; i++) {
    let seq = winStates[i];

    let pos1 = seq[0];
    let pos2 = seq[1];
    let pos3 = seq[2];

    if (board[pos1] == board[pos2] &&
      board[pos1] == board[pos3] &&
      board[pos1] != '') {
      return true;
    }
  }
  return false;

}