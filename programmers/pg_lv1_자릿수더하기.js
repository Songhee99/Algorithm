function solution(n) {
  let nArr = n.toString().split("");
  let result = nArr.reduce((acc, cur) => {
    return +acc + +cur;
  });

  return +result;
}
