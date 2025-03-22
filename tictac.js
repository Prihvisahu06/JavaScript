const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const board = document.getElementById('board');
  const squares = document.getElementsByClassName('square'); // Fixed selector
  const players = ['X', '0'];
  let currentPlayer = players[0];
  const endMessage = document.createElement('h2');
  endMessage.textContent = "X's turn"; // Fixed typo
  endMessage.style.marginTop = '30px';
  endMessage.style.textAlign = 'center';
  
  board.after(endMessage);
  
  let someonewon = false;
  
  for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', function () {
      if (someonewon) return;
      if (squares[i].textContent !== '') return;
      squares[i].textContent = currentPlayer;
      if (checkWin()) {
        someonewon = true;
        endMessage.textContent = "Player " + currentPlayer + " won!"; // Fixed typo
        return;
      }
      if (checkTie()) {
        someonewon = true;
        endMessage.textContent = "It's a tie!";
        return;
      }
      currentPlayer = currentPlayer === players[0] ? players[1] : players[0];
      endMessage.textContent = currentPlayer + "'s turn";
    });
  }
  
  function checkWin() {
    for (let i = 0; i < winningCombinations.length; i++) { // Fixed loop condition
      const [a, b, c] = winningCombinations[i];
      if (
        squares[a].textContent === currentPlayer &&
        squares[b].textContent === currentPlayer &&
        squares[c].textContent === currentPlayer
      ) {
        return true;
      }
    }
    return false; // Moved outside the loop
  }
  
  function checkTie() {
    for (let i = 0; i < squares.length; i++) {
      if (squares[i].textContent === '') return false;
    }
    return true;
  }
  
  function restartButton() { // Fixed function definition
    someonewon = false;
    for (let i = 0; i < squares.length; i++) {
      squares[i].textContent = '';
    }
    endMessage.textContent = "X's turn";
    currentPlayer = players[0];
  }