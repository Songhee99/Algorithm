const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [nk, nLocations] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const [n, k] = nk.split(" ").map(Number);
const waters = nLocations.split(" ").map(Number);

const locationSet = new Set(waters);
let count = 0;
let plus = 1;
let result = 0;

const queue = [];
let head = 0;

const bfs = () => {
  queue.push(waters);

  while (queue.length > head) {
    const locations = queue[head++];
    const tmpLocations = [];

    for (const ele of locations) {
      for (const home of [ele - 1, ele + 1]) {
        if (!locationSet.has(home)) {
          locationSet.add(home);
          tmpLocations.push(home);
          count++;
          result += plus;

          if (count == k) return console.log(result);
        }
      }
    }
    plus++;
    queue.push(tmpLocations);
  }
};

bfs();
