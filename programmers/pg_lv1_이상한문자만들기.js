function solution(s) {
  let sArr = s.split(" ");
  let result = "";

  sArr.forEach((ele) => {
    let strArr = ele.split("");
    for (i = 0; i < strArr.length; i++) {
      if (i % 2 == 0) strArr[i] = strArr[i].toUpperCase();
      else strArr[i] = strArr[i].toLowerCase();
      result += strArr[i];
    }
    result += " ";
  });

  return result.slice(0, -1);
}
