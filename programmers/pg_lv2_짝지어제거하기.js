function solution(s) {
  let newArr = [];
  s = s.split("");

  s.forEach((ele) => {
    newArr.push(ele);
    if (newArr[newArr.length - 2] == ele) newArr.splice(newArr.length - 2, 2);
  });

  if (newArr.length != 0) return 0;
  else return 1;
}

//미완성
