const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [n, ...words] = fs.readFileSync(filePath).toString().trim().split("\n");
let result = [];
class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }

  enqueue(value) {
    this.queue[this.rear++] = value;
  }

  dequeue() {
    if (this.front === this.rear) return undefined;
    let value = this.queue[this.front];
    delete this.queue[this.front];
    this.front++;
    return value;
  }

  peek() {
    return this.queue[this.front];
  }

  isEmpty() {
    return this.front === this.rear;
  }
}

let queue = new Queue();

words.forEach((ele) => {
  switch (ele) {
    case "pop":
      result.push(queue.isEmpty() ? -1 : queue.dequeue());
      break;

    case "size":
      result.push(queue.rear - queue.front);
      break;

    case "empty":
      result.push(queue.isEmpty() ? 1 : 0);
      break;

    case "front":
      result.push(queue.isEmpty() ? -1 : queue.peek());
      break;

    case "back":
      result.push(queue.isEmpty() ? -1 : queue.queue[queue.rear - 1]);
      break;

    default:
      let [push, num] = ele.split(" ");
      queue.enqueue(num);
      break;
  }
});

console.log(result.join("\n"));
