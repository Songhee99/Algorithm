function solution(s, n) {
  let result = "";

  for (i = 0; i < s.length; i++) {
    if (s.charCodeAt(i) == 32) {
      result += String.fromCharCode(32);
      continue;
    }
    if (s.charCodeAt(i) >= 97) {
      if (s.charCodeAt(i) + n > 122) result += String.fromCharCode(s.charCodeAt(i) + n - 26);
      else result += String.fromCharCode(s.charCodeAt(i) + n);
      continue;
    }
    if (s.charCodeAt(i) + n > 90) result += String.fromCharCode(s.charCodeAt(i) + n - 26);
    else result += String.fromCharCode(s.charCodeAt(i) + n);
    continue;
  }
  return result;
}
