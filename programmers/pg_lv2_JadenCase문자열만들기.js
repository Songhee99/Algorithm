function solution(s) {
  let sArr = s.split(" ").map((ele) => {
    return ele.slice(0, 1).toUpperCase() + ele.slice(1).toLowerCase();
  });

  var answer = sArr.join(" ");
  return answer;
}
