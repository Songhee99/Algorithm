function solution(sizes) {
  let maxArr = [];
  let minArr = [];

  sizes.forEach((ele) => {
    ele.sort((a, b) => b - a);
    maxArr.push(ele[0]);
    minArr.push(ele[1]);
  });

  return Math.max(...maxArr) * Math.max(...minArr);
}
