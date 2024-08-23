function solution(arr) {
  const result = arr.reduce((acc, cur) => {
    let a = Math.max(acc, cur);
    let b = Math.min(acc, cur);
    const ab = a * b;
    let remain = a % b;

    while (remain != 0) {
      a = b;
      b = remain;
      remain = a % b;
    }

    const gcd = b;
    const lcm = ab / b;
    return lcm;
  });
  return result;
}
