// Iniciar váriaveis
let board = ['', '', '', '', '', '', '', '', ''];
let playerTime = 0;
let symbols = ['o', 'x'];

// Pega a posição que foi passada na Interface.js 
function handleMove(position) {

  // Garante que o board[position] é igual a vazio
  if (board[position] == '') {
    // Coloca o símbolo do jogador da vez
    board[position] = symbols[playerTime];

    // Muda a vez do jogador fazendo com que o símbolo seja alterado
    if (playerTime == 0) {
      playerTime = 1;
    } else {
      playerTime = 0;
    }
  }
}