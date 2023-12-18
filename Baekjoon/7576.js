const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [sizes, ...tomato] = fs.readFileSync(filePath).toString().trim().split("\n");
const [m, n] = sizes.split(" ");
const tomatoes = tomato.map((v, i) => v.split(" "));
class Node {
  // 토마토 좌표(x, y)와 그 토마토가 익기까지 걸린 시간(count) 저장
  constructor(x, y, count) {
    this.x = x;
    this.y = y;
    this.count = count;
    this.next = null;
  }
}

class Queue {
  // BFS에 사용할 큐 (연결리스트)
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  push(node) {
    if (!this.head) this.head = node;
    if (this.tail) this.tail.next = node;
    this.tail = node;
    this.size++;
  }

  shift() {
    if (!this.size) return null;
    const node = this.head;
    this.head = this.head.next;
    this.size--;
    return node;
  }
}

const queue = new Queue();
const xArr = [-1, 1, 0, 0];
const yArr = [0, 0, -1, 1];
let unripeTomato = 0;
let finalDays = 0;

for (let y = 0; y < +n; y++) {
  // 주어진 토마토들 길이만큼 상하 좌우 돌면서 토마토 확인
  for (let x = 0; x < +m; x++) {
    if (tomatoes[y][x] == 1) queue.push(new Node(x, y, 0)); // 익은 토마토(== 1) 이면 큐에 좌표 추가 (원래 익어져 있던 거니 count는 0)
    else if (tomatoes[y][x] == 0) unripeTomato++; // 아니면 안 익은 토마토 개수 증가
  }
}

while (queue.size != 0) {
  // BFS 수행 -> 익은 토마토 주변의 안 익은 토마토 찾아 큐에 추가
  const node = queue.shift(); // 큐에서 노드 하나 추출 (익은 토마토 위치, 익는데 걸린 시간)
  const x = node.x;
  const y = node.y;
  const count = node.count;

  for (let i = 0; i < 4; i++) {
    // 상하좌우 확인
    const newX = x + yArr[i];
    const newY = y + xArr[i];
    if (tomatoes[newY] && tomatoes[newY][newX] == 0) {
      // tomatoes[newY] 존재, tomatoes[newY][newX] == 0 확인 (익지 않은 토마토 찾았을 때)
      queue.push(new Node(newX, newY, count + 1)); // 안 익은 그 토마토 좌표 큐에 추가, 걸린 날짜 증가
      tomatoes[newY][newX] = 1; // 익은 토마토로 바꿈
      unripeTomato--; // 안 익은 토마토 수 감소
      finalDays = Math.max(finalDays, count + 1); // 최소 일수 갱신
      // finalDays는 현재까지 최대 일수, count + 1는 현재 위치의 토마토가 익은데 걸린 일수
      // -> BFS를 통해 토마토가 익는데 걸린 일수를 계산하는 동안에는 여러 경로에서 동시에 진행되기 때문에, 각 경로에서 계산된 일수 중 가장 큰 값을 최종적으로 저장해야함
    }
  }
}

if (unripeTomato != 0) return console.log(-1);
console.log(finalDays);

// 다시 풀기
