const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [n, ...nums] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);
nums.unshift(0);
const result = [];

const visited = Array.from({ length: n + 1 }, () => false);
const included = Array.from({ length: n + 1 }, () => true);

const dfs = (i, path) => {
  visited[i] = true;
  path.push(i);

  const next = nums[i];
  if (!visited[next]) dfs(next, path);
  else if (included[next]) {
    const cycleStart = path.indexOf(next);
    result.push(...path.slice(cycleStart));
  }

  included[i] = false;
};

for (let i = 1; i <= n; i++) {
  if (!visited[i]) dfs(i, []);
}

result.sort((a, b) => a - b);
console.log(result.length + "\n" + result.join("\n"));
