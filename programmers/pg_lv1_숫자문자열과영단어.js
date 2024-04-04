function solution(s) {
  let numArr = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  let result = [];

  label: for (j = 0; j < s.length; ) {
    if (!isNaN(s[j])) {
      result.push(s[j]);
      j++;
    } else {
      for (i = 0; i < 10; i++) {
        if (s.slice(j).indexOf(numArr[i]) == 0) {
          result.push(i);
          j += numArr[i].length;
          continue label;
        }
      }
    }
  }
  return result.join("") * 1;
}
