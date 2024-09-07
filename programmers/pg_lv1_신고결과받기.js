function solution(id_list, report, k) {
  const result = Array.from({ length: id_list.length }, () => 0);
  const reportMap = new Map();
  const idMap = new Map();
  id_list.forEach((ele, idx) => {
    idMap.set(ele, idx);
  });

  report.forEach((ele) => {
    const [a, b] = ele.split(" ");

    if (reportMap.has(b)) {
      const [arr, num] = reportMap.get(b);
      if (!arr.includes(a)) {
        arr.push(a);
        reportMap.set(b, [arr, num + 1]);
      }
    } else reportMap.set(b, [[a], 1]);
  });

  id_list.forEach((ele) => {
    if (reportMap.has(ele)) {
      const [arr, num] = reportMap.get(ele);

      if (num >= k) {
        arr.forEach((ele) => {
          result[idMap.get(ele)]++;
        });
      }
    }
  });
  return result;
}
