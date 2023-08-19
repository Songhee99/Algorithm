function solution(arr) {
  let minNum = arr[0];
  let minIdx = 0;

  for (i = 1; i < arr.length; i++) {
    if (minNum > arr[i]) {
      minNum = arr[i];
      minIdx = i;
    }
  }
  arr.splice(minIdx, 1);

  if (arr.length == 0) return [-1];
  return arr;
}
