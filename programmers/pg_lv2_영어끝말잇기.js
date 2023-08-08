function solution(n, words) {
  let num = undefined;
  let order = undefined;
  let newArr = [];
  newArr.push(words[0]);

  for (i = 1; i < words.length; i++) {
    if (newArr[newArr.length - 1].slice(-1) != words[i].slice(0, 1) || newArr.includes(words[i])) {
      num = (i + 1) % n;
      order = parseInt(i / n) + 1;
      break;
    }
    newArr.push(words[i]);
  }

  if (num == undefined) return [0, 0];
  if (num == 0) return [n, order];
  return [num, order];
}
