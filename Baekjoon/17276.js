const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [T, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");
const result = [];
let idx = 0;

for (let t = 0; t < T; t++) {
  const [n, d] = input[idx++].split(" ").map(Number);
  let graph = [];

  for (let i = 0; i < n; i++) {
    graph.push(input[idx++].split(" ").map(Number));
  }

  const turn = ((d + 360) % 360) / 45; // 음수 보정 후 360 이상인 경우 정리 후 회전 수 계산
  const mid = Math.floor(n / 2);

  for (let i = 0; i < turn; i++) {
    const copyReference = graph.map((row) => row.slice());

    for (let d = 0; d < n; d++) {
      graph[d][mid] = copyReference[d][d]; // 참고본 왼대각선 -> 그래프 중앙으로
      graph[d][n - 1 - d] = copyReference[d][mid]; // 참고본 중앙열 -> 그래프 오른대각선으로
      graph[mid][n - 1 - d] = copyReference[d][n - 1 - d]; // 참고본 오른대각선 -> 그래프 중앙행으로
      graph[d][d] = copyReference[mid][d]; // 참고본 중앙행 -> 그래프 왼대각선으로
    }
  }

  result.push(graph.map((row) => row.join(" ")).join("\n"));
}

console.log(result.join("\n"));
