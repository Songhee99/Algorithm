const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [T, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");
const result = [];
let idx = 0;

for (let t = 0; t < T; t++) {
  const martsCount = input[idx++].split(" ").map(Number);
  const home = input[idx++].split(" ").map(Number);
  const marts = [];
  for (let m = 0; m < martsCount; m++) {
    marts.push(input[idx++].split(" ").map(Number));
  }
  const festival = input[idx++].split(" ").map(Number);

  const visited = Array.from({ length: martsCount }, () => false);
  const queue = [];
  let head = 0;

  const bfs = () => {
    queue.push(home);

    while (queue.length > head) {
      const [curX, curY] = queue[head++];

      if (Math.abs(festival[0] - curX) + Math.abs(festival[1] - curY) <= 1000)
        return result.push("happy");

      for (let i = 0; i < martsCount; i++) {
        if (
          !visited[i] &&
          Math.abs(marts[i][0] - curX) + Math.abs(marts[i][1] - curY) <= 1000
        ) {
          queue.push(marts[i]);
          visited[i] = true;
        }
      }
    }
    return result.push("sad");
  };

  bfs();
}

return console.log(result.join("\n"));
