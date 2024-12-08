function solution(topping) {
  let count = 0;
  const prevPiece = new Set();
  const prevArr = [];
  const nextPiece = new Set();

  for (let i = 0; i < topping.length - 1; i++) {
    prevPiece.add(topping[i]);
    prevArr.push(prevPiece.size);
  }

  for (let j = topping.length - 1; j > 0; j--) {
    nextPiece.add(topping[j]);

    if (prevArr[j - 1] == nextPiece.size) count++;
  }

  return count;
}
