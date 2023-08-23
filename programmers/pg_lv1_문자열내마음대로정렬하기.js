function solution(strings, n) {
  strings.sort((a, b) => {
    if (a.slice(n, n + 1) > b.slice(n, n + 1)) return 1;
    if (a.slice(n, n + 1) < b.slice(n, n + 1)) return -1;
    for (i = 0; ; i++) {
      while (a.slice(i, i + 1) != b.slice(i, i + 1)) {
        if (a.slice(i, i + 1) > b.slice(i, i + 1)) return 1;
        else return -1;
      }
    }
  });
  return strings;
}
