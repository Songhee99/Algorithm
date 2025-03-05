from collections import deque

result = []

for t in range(10):
    n = int(input())
    start = []
    end = []
    graph = []
    for col in range(16):
        line = input()
        if line.find("2") != -1: start = [col, line.find("2")]
        if line.find("3") != -1: end = [col, line.find("3")]
        graph.append([int(i) for i in line])

    dy = [-1, 1, 0, 0]
    dx = [0, 0, -1, 1]
    visited = [[False] * 16 for _ in range(16)]

    def bfs():
        queue = deque([start])
        visited[start[0]][start[1]] = True

        while queue:
            y, x = queue.popleft()

            for d in range(4):
                ny = y + dy[d]
                nx = x + dx[d]

                if ny == end[0] and nx == end[1]: return 1
                elif ny < 0 or ny >= 16 or nx < 0 or nx >= 16: continue

                if graph[ny][nx] == 0 and not visited[ny][nx]:
                    visited[ny][nx] = True
                    queue.append((ny, nx))
        return 0

    result.append(f"#{t + 1} {bfs()}")

print("\n".join(result))
