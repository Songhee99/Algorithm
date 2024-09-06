function solution(fees, records) {
  const [defaultTime, defaultFee, extraTime, extraFee] = fees;
  const result = new Map();
  const inMap = new Map();

  records.forEach((ele) => {
    const [time, num, state] = ele.split(" ");
    let totalTime = 0;
    time.split(":").forEach((ele, idx) => {
      if (idx == 0) totalTime += +ele * 60;
      else totalTime += +ele;
    });

    if (state == "IN") inMap.set(num, totalTime);
    else {
      const inTime = inMap.get(num);
      const stayTime = totalTime - inTime;

      if (result.has(num)) result.set(num, result.get(num) + stayTime);
      else result.set(num, stayTime);

      inMap.delete(num);
    }
  });

  inMap.forEach((value, key, map) => {
    const inTime = inMap.get(key);
    const stayTime = 1439 - inTime;

    if (result.has(key)) result.set(key, result.get(key) + stayTime);
    else result.set(key, stayTime);
  });

  const resultArr = [...result].sort((a, b) => +a[0] - +b[0]);
  const finalArr = [];
  resultArr.forEach((ele) => {
    const [num, time] = ele;
    const overTime = time - defaultTime;

    if (overTime <= 0) finalArr.push(defaultFee);
    else {
      const overFee = Math.ceil(overTime / extraTime) * extraFee;
      finalArr.push(defaultFee + overFee);
    }
  });
  return finalArr;
}
