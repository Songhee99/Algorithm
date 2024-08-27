function solution(cacheSize, cities) {
  if (cacheSize == 0) return cities.length * 5;

  let result = 0;
  let cacheMap = new Map();

  cities.forEach((ele) => {
    const city = ele.toLowerCase();

    if (cacheMap.has(city)) {
      cacheMap.delete(city);
      result += 1;
    } else {
      if (cacheMap.size >= cacheSize) {
        const olderCache = cacheMap.keys().next().value;
        cacheMap.delete(olderCache);
      }
      result += 5;
    }
    cacheMap.set(city, true); // 키-값 형태여야하니까 값에 아무 값(true) 넣은 것
  });
  return result;
}
