function solution(numbers) {
  let result = new Set();

  numbers.forEach((ele, idx) => {
    for (i = idx + 1; i < numbers.length; i++) {
      let sum = ele + numbers[i];
      if (!result.has(sum)) result.add(sum);
    }
  });

  return [...result].sort((a, b) => a - b);
}
