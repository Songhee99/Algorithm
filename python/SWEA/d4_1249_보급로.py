from collections import deque

T = int(input())
result = []

for t in range(T):
    n = int(input())
    graph = [[int(i) for i in input()] for _ in range(n)]

    dy = [-1, 1, 0, 0]
    dx = [0, 0, -1, 1]
    nGraph = [[float("inf")] * n for _ in range(n)]

    def bfs():
        queue = deque([(0, 0)])
        nGraph[0][0] = 0

        while queue:
            y, x = queue.popleft()

            for d in range(4):
                ny = y + dy[d]
                nx = x + dx[d]

                if ny < 0 or ny >= n or nx < 0 or nx >= n: continue
                elif ny == n - 1 and nx == n - 1:
                    nGraph[n - 1][n - 1] = min(nGraph[ny][nx], nGraph[y][x])
                    continue

                tmpCount = nGraph[y][x] + graph[ny][nx]
                if nGraph[ny][nx] > tmpCount:
                    nGraph[ny][nx] = tmpCount
                    queue.append((ny, nx))

    bfs()
    result.append(f"#{t + 1} {nGraph[n - 1][n - 1]}")

print("\n".join(result))
