function solution(park, routes) {
  const h = park.length;
  const w = park[0].length;
  const parkArr = Array.from({ length: h }, () => new Array(w).fill(0));
  let location = [0, 0];

  park.forEach((ele1, idx1) => {
    const maps = ele1.split("");
    maps.forEach((ele2, idx2) => {
      if (ele2 == "S") location = [idx1, idx2];
      else if (ele2 == "X") parkArr[idx1][idx2] = 1;
    });
  });

  routes.forEach((ele) => {
    const [direction, num] = ele.split(" ");
    const prevLocation = location;
    let [y, x] = location;

    if (
      (direction == "N" && y - +num < 0) ||
      (direction == "S" && y + +num >= h) ||
      (direction == "W" && x - +num < 0) ||
      (direction == "E" && x + +num >= w)
    )
      return;

    for (let d = 0; d < num; d++) {
      if (direction == "N") {
        if (parkArr[y - 1][x] == 0) y--;
        else return (location = prevLocation);
      } else if (direction == "S") {
        if (parkArr[y + 1][x] == 0) y++;
        else return (location = prevLocation);
      } else if (direction == "W") {
        if (parkArr[y][x - 1] == 0) x--;
        else return (location = prevLocation);
      } else {
        if (parkArr[y][x + 1] == 0) x++;
        else return (location = prevLocation);
      }
    }
    location = [y, x];
  });
  return location;
}
