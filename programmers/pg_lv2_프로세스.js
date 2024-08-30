function solution(priorities, location) {
  const queue = [];
  priorities.forEach((ele, idx) => {
    queue.push([ele, idx]);
  });
  let head = 0;
  const order = priorities.sort((a, b) => a - b);
  let count = 0;

  const bfs = () => {
    while (queue.length > head) {
      const [priority, target] = queue[head++];

      if (priority == order[order.length - 1] && target == location)
        return count + 1;

      if (priority != order[order.length - 1]) queue.push([priority, target]);
      else {
        order.pop();
        count++;
      }
    }
  };

  return bfs();
}
