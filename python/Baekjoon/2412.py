import sys
from collections import deque
input = sys.stdin.readline

n, t = map(int, input().split())
locations = [(0, 0)] + [list(map(int, input().split())) for _ in range(n)]
locations.sort(key = lambda x: (x[1], x[0]))

def bfs():
    queue = deque([(0, 0)])
    visited = [False] * (n + 1)
    visited[0] = True

    while queue:
        idx, move = queue.popleft()
        x, y = locations[idx]

        if y == t: return move

        for uIdx in range(idx + 1, n + 1):
            a, b = locations[uIdx]
            if b - y > 2: break
            if not visited[uIdx] and abs(a - x) <= 2:
                visited[uIdx] = True
                queue.append((uIdx, move + 1))

        for dIdx in range(idx - 1, -1, -1):
            a, b = locations[dIdx]
            if y - b > 2: break
            if not visited[dIdx] and abs(a - x) <= 2:
                visited[dIdx] = True
                queue.append((dIdx, move + 1))
    return -1

print(bfs())
