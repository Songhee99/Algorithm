import sys
from collections import deque

T = int(sys.stdin.readline().strip())
result = []

for t in range(T):
    martsCount = int(sys.stdin.readline().strip())
    home = list(map(int, sys.stdin.readline().strip().split()))
    marts = []
    for _ in range(martsCount):
        marts.append(list(map(int, sys.stdin.readline().strip().split())))
    festival = list(map(int, sys.stdin.readline().strip().split()))

    def bfs():
        queue = deque([home])
        visited = [False for _ in range(martsCount)]

        while queue:
            x, y = queue.popleft()

            if abs(x - festival[0]) + abs(y - festival[1]) <= 50 * 20:
                result.append("happy")
                return

            for i in range(martsCount):
                if not visited[i]:
                    if abs(x - marts[i][0]) + abs(y - marts[i][1]) <= 50 * 20:
                        queue.append((marts[i][0], marts[i][1]))
                        visited[i] = True

        result.append("sad")

    bfs()
    
print("\n".join(result))
