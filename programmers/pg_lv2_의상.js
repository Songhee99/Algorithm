function solution(clothes) {
  let clothesMap = new Map();
  clothes.forEach((ele) => {
    let [name, kind] = ele;

    if (clothesMap.has(kind)) clothesMap.set(kind, clothesMap.get(kind) + 1);
    else clothesMap.set(kind, 1);
  });

  let clothesArr = [...clothesMap];

  let result = clothesArr.reduce((acc, cur) => acc * (cur[1] + 1), 1);

  return result - 1;
}
