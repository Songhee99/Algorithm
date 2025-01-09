const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [rs, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");
const [r, s] = rs.split(" ").map(Number);
const result = [];
const meteor = [];
let ground = [];

for (let i = 0; i < r; i++) {
  // 유성과 땅 분리
  const ele = input[i].split("");

  if (new Set(ele).size == 1 && ele[0] == ".") {
    while (true) {
      const nextEle = input[i + 1].split("");
      if (new Set(nextEle).size != 1 || nextEle[0] != ".") break;
      else i++;
    }
    ground = input.slice(i + 1).map((v) => v.split(""));
    break;
  } else meteor.push(ele);
}

const meteorLen = meteor.length;
const groundLen = ground.length;

let maxDest = -3001; // 가장 많이 겹치는 값인 -3000보다 더 작게 초기화

for (let i = 0; i < s; i++) {
  // 행 방향으로 나아가며 확인
  let x = -3001; // 유성의 가장 아래 idx
  let tag = -1; // 땅의 가장 위 idx

  for (let m = meteorLen - 1; m >= 0; m--) {
    // 유성 아래서부터 올라오며 가장 아래 idx 찾기
    if (meteor[m][i] == "X") {
      x = m;
      break;
    }
  }
  for (let t = 0; t < groundLen; t++) {
    // 땅 시작부터 내려기며 땅 시작되는 곳 찾기 (처음부터 시작되면 -1)
    if (ground[t][i] == "#") {
      tag = t - 1;
      break;
    }
  }

  const curMax = x - tag; // 겹치지 않는 유성의 줄 개수 (유성 맨 위부터 아래로 셈)
  maxDest = Math.max(maxDest, curMax);
}

if (maxDest < 0) {
  // 땅과 아예 겹친다는 뜻
  for (let air = 0; air < r - groundLen; air++) {
    result.push(".".repeat(s));
  }

  let gIdx = -maxDest; // 땅이 위에서부터 maxDest 만큼 안 겹치는 것 -> 원래 땅 그대로
  result.push(...ground.slice(0, gIdx).map((v) => v.join("")));

  for (let m = 0; m < meteorLen; m++) {
    // 유성과 땅이 겹치는 부분
    const tmpLine = [];
    for (let i = 0; i < s; i++) {
      if (ground[gIdx][i] == "#" && meteor[m][i] == ".") tmpLine.push("#");
      else if (ground[gIdx][i] == "." && meteor[m][i] == "X") tmpLine.push("X");
      else if (ground[gIdx][i] == "." && meteor[m][i] == ".") tmpLine.push(".");
    }

    result.push(tmpLine.join(""));
    gIdx++;
  }
  result.push(ground[groundLen - 1].join(""));
} else {
  for (let air = 0; air < r - (maxDest + groundLen); air++) {
    result.push(".".repeat(s));
  }
  result.push(...meteor.slice(0, maxDest).map((v) => v.join(""))); // 유성과 땅이 안 겹치는 부분

  let gIdx = 0;
  for (let m = maxDest; m < meteorLen; m++) {
    const tmpLine = [];
    for (let i = 0; i < s; i++) {
      if (ground[gIdx][i] == "#" && meteor[m][i] == ".") tmpLine.push("#");
      else if (ground[gIdx][i] == "." && meteor[m][i] == "X") tmpLine.push("X");
      else if (ground[gIdx][i] == "." && meteor[m][i] == ".") tmpLine.push(".");
    }

    result.push(tmpLine.join(""));
    gIdx++;
  }
  result.push(...ground.slice(gIdx).map((v) => v.join("")));
}

console.log(result.join("\n"));
