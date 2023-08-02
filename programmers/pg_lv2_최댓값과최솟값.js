function solution(s) {
  let sArr = s.split(" ").map((ele) => {
    return +ele;
  });

  var answer = Math.min(...sArr) + " " + Math.max(...sArr);
  return answer;
}
