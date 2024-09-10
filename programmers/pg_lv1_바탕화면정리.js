function solution(wallpaper) {
  const h = wallpaper.length;
  const w = wallpaper[0].length;
  const map = Array.from({ length: h }, () => new Array(w).fill(0));
  let start = [];
  let end = [];

  wallpaper.forEach((ele1, idx1) => {
    const files = ele1.split("");

    files.forEach((ele2, idx2) => {
      if (ele2 == "#") {
        if (start.length == 0) start = [idx1, idx2];
        else if (end.length == 0) end = [idx1, idx2];
        else if (start[1] > idx2) start = [start[0], idx2];
        else if (end[1] < idx2) end = [idx1, idx2];
        else if (end[0] < idx1) end = [idx1, end[1]];
      }
    });
  });
  if (end.length == 0) return [...start, start[0] + 1, start[1] + 1];
  return [...start, end[0] + 1, end[1] + 1];
}
