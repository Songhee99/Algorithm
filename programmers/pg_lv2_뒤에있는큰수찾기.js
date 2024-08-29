function solution(numbers) {
  const reverseNums = numbers.reverse();
  const result = [];
  const stack = [];

  reverseNums.forEach((ele) => {
    let flag = false;

    while (stack.length != 0) {
      const prev = stack.pop();
      if (prev > ele) {
        result.push(prev);
        stack.push(prev);
        stack.push(ele);
        flag = true;
        break;
      }
    }

    if (!flag) {
      result.push(-1);
      stack.push(ele);
    }
  });

  return result.reverse();
}
