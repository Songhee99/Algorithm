function solution(str1, str2) {
  const makeTwo = (originStr) => {
    const str = originStr.toUpperCase();
    const n = str.length;
    const checkEng = /^[A-Z]+$/;
    const twoArr = [];

    for (let i = 0; i < n - 1; i++) {
      let result = "";
      result += str[i] + str[i + 1];
      if (checkEng.test(result)) twoArr.push(result);
    }
    return twoArr;
  };

  const str1Arr = makeTwo(str1);
  const str2Arr = makeTwo(str2);

  if (str1Arr.length == 0 && str2Arr.length == 0) return 65536;
  if (str1Arr.length == 0 || str2Arr.length == 0) return 0;

  const str1Map = new Map();
  const str2Map = new Map();
  const intersectionMap = new Map();
  const emptyMap = new Map();

  const chechHas = (arr, map1, map2) => {
    arr.forEach((ele) => {
      if (map1.has(ele)) {
        if (intersectionMap.has(ele))
          intersectionMap.set(ele, intersectionMap.get(ele) + 1);
        else intersectionMap.set(ele, 1);
      } else if (map2.has(ele)) map2.set(ele, map2.get(ele) + 1);
      else map2.set(ele, 1);
    });
  };

  chechHas(str1Arr, emptyMap, str1Map);
  chechHas(str2Arr, str1Map, str2Map);

  str1Map.forEach((value, key, map) => {
    if (
      intersectionMap.has(key) &&
      str1Map.get(key) < intersectionMap.get(key)
    ) {
      const str1Count = str1Map.get(key);
      const intersectionCount = intersectionMap.get(key);
      str1Map.set(key, intersectionCount);
      intersectionMap.set(key, str1Count);
    }
  });

  const sumFunc = (map) => {
    let sum = 0;
    map.forEach((ele) => {
      sum += ele;
    });
    return sum;
  };

  const intersectionSum = sumFunc(intersectionMap);
  let unionSum = sumFunc(str1Map);
  unionSum += sumFunc(str2Map);

  const similarity = (intersectionSum / unionSum) * 65536;
  return parseInt(similarity);
}
