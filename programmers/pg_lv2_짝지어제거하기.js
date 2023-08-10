function solution(s) {
  let newArr = [];

  s.split("").forEach((ele) => {
    newArr.push(ele);
    if (newArr[newArr.length - 2] == ele) newArr.splice(newArr.length - 2, 2);
  });

  if (newArr.length != 0) return 0;
  else return 1;
}
//시간초과

function solution(s) {
  let newArr = [];

  s.split("").forEach((ele) => {
    if (newArr[newArr.length - 1] == ele) {
      newArr.splice(newArr.length - 1, 2);
    } else {
      newArr.push(ele);
    }
  });

  if (newArr.length != 0) return 0;
  else return 1;
}
// 시간초과
