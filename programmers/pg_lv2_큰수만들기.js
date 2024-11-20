function solution(number, k) {
  const n = number.length;
  const target = n - k;
  let result = Array.from({ length: target }, (v, idx) => +number[idx + k]);

  for (let i = k - 1; i >= 0; i--) {
    let curNum = +number[i];
    for (let j = 0; j < target; j++) {
      if (curNum >= result[j]) {
        let tmpNum = result[j];
        result[j] = curNum;
        curNum = tmpNum;
      } else break;
    }
  }

  return result.join("");
}
