function solution(want, number, discount) {
  const nameMap = new Map();
  want.forEach((ele, idx) => {
    nameMap.set(ele, idx);
  });

  for (let i = 0; i < 10; i++) {
    if (!nameMap.has(discount[i])) continue;

    const curIdx = nameMap.get(discount[i]);
    number[curIdx]--;
  }

  let numberSet = new Set(number);
  let count = numberSet.size == 1 && numberSet.has(0) ? 1 : 0;
  let start = 0;
  let end = 10;

  while (end < discount.length) {
    if (nameMap.has(discount[start])) {
      const startIdx = nameMap.get(discount[start]);
      number[startIdx]++;
    }
    if (nameMap.has(discount[end])) {
      const endIdx = nameMap.get(discount[end]);
      number[endIdx]--;
    }

    const tmpNumSet = new Set(number);
    if (tmpNumSet.size == 1 && tmpNumSet.has(0)) count++;

    start++;
    end++;
  }

  return count;
}
