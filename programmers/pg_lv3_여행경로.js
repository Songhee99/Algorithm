function solution(tickets) {
  const result = [];
  const ticketsMap = new Map();
  tickets.forEach((ele) => {
    if (ticketsMap.has(ele[0])) ticketsMap.get(ele[0]).push(ele[1]);
    else ticketsMap.set(ele[0], [ele[1]]);
  });

  for (const key of ticketsMap.keys()) {
    ticketsMap.get(key).sort((a, b) => (a > b ? -1 : 1));
  }

  const stack = ["ICN"];
  while (stack.length) {
    const airport = stack[stack.length - 1];

    if (!ticketsMap.has(airport) || ticketsMap.get(airport).length <= 0)
      result.push(stack.pop());
    else stack.push(ticketsMap.get(airport).pop());
  }

  return result.reverse();
}
