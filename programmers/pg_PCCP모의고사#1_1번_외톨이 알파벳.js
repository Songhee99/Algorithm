function solution(input_string) {
  const resultSet = new Set();
  const stack = [];
  const alpSet = new Set();

  for (const alp of input_string) {
    if (alpSet.has(alp) && stack[stack.length - 1] != alp) resultSet.add(alp);
    alpSet.add(alp);
    stack.push(alp);
  }
  const result = [...resultSet].sort();
  return result.length > 0 ? result.join("") : "N";
}
