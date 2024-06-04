let currentPlayer = 'S';
let board = ['', '', '', '', '', '', '', '', ''];
let gameOver = false;

function handleClick(index) {
  if (board[index] === '' && !gameOver) {
    board[index] = currentPlayer;
    document.getElementById('board').children[index].innerText = currentPlayer;
    checkWin();
    togglePlayer();
  }
}

function togglePlayer() {
  currentPlayer = currentPlayer === 'S' ? 'O' : 'S';
}

function checkWin() {
  const winPatterns = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

  for (const pattern of winPatterns) {
    const [a, b, c] = pattern;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      gameOver = true;
      document.getElementById('message').innerText = `Player ${board[a]} wins!`;
    }
  }

  if (!board.includes('') && !gameOver) {
    gameOver = true;
    document.getElementById('message').innerText = "It's a draw!";
  }
}

function resetBoard() {
  board = ['', '', '', '', '', '', '', '', ''];
  currentPlayer = 'S';
  gameOver = false;
  document.getElementById('message').innerText = '';
  const cells = document.getElementById('board').children;
  for (const cell of cells) {
    cell.innerText = '';
  }
}

document.getElementById('board').addEventListener('click', (e) => {
  const index = Array.from(e.target.parentElement.children).indexOf(e.target);
  handleClick(index);
});

resetBoard();
