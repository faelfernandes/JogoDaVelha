// Criando Listener que será executado após o documento ser carregado
document.addEventListener('DOMContentLoaded', () => {
  // Pegar todos os squares do HTML
  let squares = document.querySelectorAll(".square");
  let reset = document.getElementById("reset");

  // Pega botão reset e executa uma função ao clicar
  reset.addEventListener('click', resetGame);

  // Varrer array de squares
  squares.forEach((squares) => {
    // Pegar cada square dentro dele e colocar o eventL click e adicionar o handleClick para tratar o clique
    squares.addEventListener('click', handleClick);
  });
});

function handleClick(event) {
  // Pega o id do square
  let position = event.target.id;

  if (!position) {
    return;
  }

  // Passa a posição para o handleMove do Game.js
  if (handleMove(position)) {
    setTimeout(() => {
      alert("O player " + playerTime + " venceu o jogo")
    }, 10);
  }
  // Executa a função updateSquares
  updateSquare(position);
}

// Update de somento um square
function updateSquare(position) {
  let square = document.getElementById(position.toString());
  let symbol = board[position];
  square.innerHTML = `<div class='${symbol}'></div>`;
}

// Update de todos os squares
function updateSquares() {
  // Pega todos os squares
  let squares = document.querySelectorAll(".square");

  // Varre cada um deles
  squares.forEach((square) => {
    // Limpa as divs
    square.innerHTML = ``;
  });
}