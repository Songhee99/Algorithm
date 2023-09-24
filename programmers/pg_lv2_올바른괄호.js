function solution(s) {
  let tempS = [];
  let sArr = s.split("");

  for (const item of sArr) {
    if (item == "(") {
      tempS.push(item);
    } else {
      if (!tempS.pop()) return false;
    }
  }
  if (tempS.length != 0) return false;
  return true;
}
