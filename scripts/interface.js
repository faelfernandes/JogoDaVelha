// Criando Listener que será executado após o documento ser carregado
document.addEventListener('DOMContentLoaded', () => {
  // Pegar todos os squares do HTML
  let squares = document.querySelectorAll(".square");

  // Varrer array de squares
  squares.forEach((squares) => {
    // Pegar cada square dentro dele e colocar o eventL click e adicionar o handleClick para tratar o clique
    squares.addEventListener('click', handleClick);
  });
});

function handleClick(event) {
  let squares = event.target; // Elemento que recebeu o evento
  let position = squares.id; // Pega o id do square

  // Passa a posição para o handleMove do Game.js
  handleMove(position);
  // Executa a função updateSquares
  updateSquares();
}

//Update de todos os squares
function updateSquares() {
  // Pega novamente todos os squares
  let squares = document.querySelectorAll(".square");

  // Varre novamente cada um deles
  squares.forEach((square) => {
    // Pega novamente a posição
    let position = square.id;
    // Pega o símbolo que está no Array board que foi atualizado
    let symbol = board[position];

    // Verifica se o símbolo não é vazio
    // Se não for coloca X ou O
    if (symbol != '') {
      square.innerHTML = `<div class='${symbol}'></div>`;
    }
  });
}