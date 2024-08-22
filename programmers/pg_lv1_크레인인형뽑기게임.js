function solution(board, moves) {
  const width = board.length;
  let count = 0;
  let result = [];

  moves.forEach((num) => {
    for (let i = 0; i < width; i++) {
      if (board[i][num - 1] != 0) {
        const tmpDoll = board[i][num - 1];
        if (result[result.length - 1] != tmpDoll) result.push(tmpDoll);
        else {
          result.pop();
          count += 2;
        }
        board[i][num - 1] = 0;
        break;
      }
    }
  });

  return count;
}
