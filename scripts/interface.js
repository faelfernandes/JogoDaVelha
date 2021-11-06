document.addEventListener('DOMContentLoaded', () => {
  let squares = document.querySelectorAll(".square");

  squares.forEach((squares) => {
    squares.addEventListener('click', handleClick);
  });
});

function handleClick(event) {
  let squares = event.target;
  let position = squares.id;

  console.log(squares);
  console.log(position);

  handleMove(position);
  updateSquares();
}

function updateSquares() {
  let squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    let position = square.id;
    let symbol = board[position];

    if (symbol != '') {
      square.innerHTML = `<div class='${symbol}'></div>`;
    }
  });
}