function solution(name, yearning, photo) {
  let matchMap = new Map();
  let result = [];

  for (i = 0; i < name.length; i++) {
    matchMap.set(name[i], yearning[i]);
  }

  photo.forEach((arr) => {
    let sum = 0;
    arr.forEach((ele) => {
      if (matchMap.has(ele)) sum += matchMap.get(ele);
    });
    result.push(sum);
  });
  return result;
}
