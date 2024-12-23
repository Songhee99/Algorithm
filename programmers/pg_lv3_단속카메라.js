function solution(routes) {
  let result = 0;
  let camera = -30001;
  routes.sort((a, b) => a[1] - b[1]);

  for (const [start, end] of routes) {
    if (camera < start) {
      result += 1;
      camera = end;
    }
  }

  return result;
}
