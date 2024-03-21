function solution(s) {
  let sArr = s.split("");
  let alphabetMap = new Map();
  let result = [];

  sArr.forEach((ele, idx) => {
    if (!alphabetMap.has(ele)) {
      result.push(-1);
      alphabetMap.set(ele, idx);
    } else {
      let prevIdx = alphabetMap.get(ele);
      result.push(idx - prevIdx);
      alphabetMap.set(ele, idx);
    }
  });

  return result;
}
