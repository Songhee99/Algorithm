import sys
from collections import deque

n = int(sys.stdin.readline().strip())
queue = deque()
for _ in range(n):
    line = sys.stdin.readline().strip().split()
    queueSize = len(queue)

    if line[0] == "push": queue.append(line[1])
    elif line[0] == "size": print(queueSize)
    elif line[0] == "empty": print(1 if queueSize == 0 else 0)
    elif queueSize == 0: print(-1)
    elif line[0] == "pop": print(queue.popleft())
    elif line[0] == "front": print(queue[0])
    else: print(queue[-1])