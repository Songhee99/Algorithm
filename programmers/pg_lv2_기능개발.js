function solution(progresses, speeds) {
  const n = progresses.length;
  const result = [];
  const stack = [];
  let count = 1;

  for (let i = 0; i < n; i++) {
    const remainPercent = 100 - progresses[i];
    const remainTime = Math.ceil(remainPercent / speeds[i]);

    if (i == 0) stack.push(remainTime);
    else if (remainTime <= stack[stack.length - 1]) count++;
    else {
      result.push(count);
      count = 1;
      stack.push(remainTime);
    }
  }
  result.push(count);
  return result;
}
