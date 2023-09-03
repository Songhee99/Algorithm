function solution(arr, divisor) {
  let result = [];
  arr
    .sort((a, b) => a - b)
    .forEach((ele) => {
      if (ele % divisor == 0) result.push(ele);
    });

  if (result.length == 0) return [-1];
  return result;
}
