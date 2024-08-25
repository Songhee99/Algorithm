function solution(s) {
  const n = s.length;
  const ss = s.repeat(2);
  let count = 0;

  for (let i = 0; i < n; i++) {
    const tmpS = ss.slice(i, i + n).split("");
    const stack = [];

    while (tmpS.length > 0) {
      const tmpE = tmpS.pop();
      if (tmpE == "]" || tmpE == "}" || tmpE == ")") stack.push(tmpE);
      else {
        const stackPop = stack.pop();

        if (tmpE == "[" && stackPop == "]") continue;
        else if (tmpE == "{" && stackPop == "}") continue;
        else if (tmpE == "(" && stackPop == ")") continue;
        else {
          tmpS.push(tmpE);
          break;
        }
      }
    }
    if (tmpS.length == 0 && stack.length == 0) count++;
  }
  return count;
}
