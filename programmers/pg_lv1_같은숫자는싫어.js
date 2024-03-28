function solution(arr) {
  let result = [];

  arr.forEach((ele) => {
    if (result[result.length - 1] != ele) result.push(ele);
  });
  return result;
}
