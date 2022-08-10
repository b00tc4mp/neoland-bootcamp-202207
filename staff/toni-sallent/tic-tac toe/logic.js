function makeAMove(index, state) {
  let winner = state.winner;
  if (winner) return;

  let player = state.player;
  const board = state.board.slice(0);

  if (board[index]) return;
  else board[index] = player;

  if (checkLine(board, 0, 1, 2)) winner = player;
  else if (checkLine(board, 3, 4, 5)) winner = player;
  else if (checkLine(board, 6, 7, 8)) winner = player;
  else if (checkLine(board, 0, 3, 6)) winner = player;
  else if (checkLine(board, 1, 4, 7)) winner = player;
  else if (checkLine(board, 2, 5, 8)) winner = player;
  else if (checkLine(board, 0, 4, 8)) winner = player;
  else if (checkLine(board, 2, 4, 6)) winner = player;
  else if (checkDraw(board)) winner = "Draw";

  if (player === "x") player = "o";
  else player = "x";

  return { player, board, winner };
}
