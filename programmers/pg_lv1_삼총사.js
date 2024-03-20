function solution(number) {
  let count = 0;

  for (i = 0; i < number.length - 2; i++) {
    for (j = i + 1; j < number.length - 1; j++) {
      let twoSum = number[i] + number[j];
      for (k = j + 1; k < number.length; k++) {
        if (twoSum == -number[k]) count++;
      }
    }
  }

  return count;
}
