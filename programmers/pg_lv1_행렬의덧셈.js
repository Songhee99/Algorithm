function solution(arr1, arr2) {
  let arr = Array.from(Array(arr1.length), () => new Array(arr1[0].length));
  for (i = 0; i < arr1.length; i++) {
    for (j = 0; j < arr1[0].length; j++) {
      arr[i][j] = arr1[i][j] + arr2[i][j];
    }
  }
  return arr;
}
