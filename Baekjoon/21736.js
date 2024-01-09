const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [nm, ...map] = fs.readFileSync(filePath).toString().trim().split("\n");
let [n, m] = nm.split(" ");
let campus = [];
let doyeon = "";

for (i = 0; i < +n; i++) {
  let row = map[i].split("");
  for (j = 0; j < +m; j++) {
    if (row[j] === "I") doyeon = [i, j];
  }
  campus.push(row);
}

let directions = [
  [1, 0],
  [0, 1],
  [-1, 0],
  [0, -1],
];
let visited = Array.from({ length: +n }, () => new Array(+m).fill(false));
let peopleNum = 0;
let queue = [doyeon];
visited[doyeon[0]][doyeon[1]] = true;

while (queue.length > 0) {
  let [x, y] = queue.shift();
  for (let [dx, dy] of directions) {
    let nx = x + dx;
    let ny = y + dy;

    if (nx >= 0 && nx < +n && ny >= 0 && ny < +m) {
      if (campus[nx][ny] != "X" && !visited[nx][ny]) {
        queue.push([nx, ny]);
        visited[nx][ny] = true;
        if (campus[nx][ny] == "P") peopleNum++;
      }
    }
  }
}

console.log(peopleNum > 0 ? peopleNum : "TT");
