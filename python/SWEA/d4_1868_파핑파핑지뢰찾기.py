from collections import deque

T = int(input())
result = []

for t in range(T):
    n = int(input())
    graph = [[i for i in input()] for _ in range(n)]
    total = 0

    dy = [-1, 1, 0, 0, -1, -1, 1, 1]
    dx = [0, 0, -1, 1, -1, 1, -1, 1]

    def countStar(y, x):
        count = 0

        for d in range(8):
            ny = y + dy[d]
            nx = x + dx[d]

            if ny < 0 or ny >= n or nx < 0 or nx >= n: continue
            if graph[ny][nx] == "*": count += 1

        return count

    def bfs(i, j):
        queue = deque([(i, j)])

        while queue:
            y, x = queue.popleft()
            if graph[y][x] != ".": continue

            count = countStar(y, x)
            graph[y][x] = count

            if count == 0:
                for d in range(8):
                    ny = y + dy[d]
                    nx = x + dx[d]

                    if ny < 0 or ny >= n or nx < 0 or nx >= n: continue
                    queue.append((ny, nx))

    for i in range(n):
        for j in range(n):
            if graph[i][j] == ".":
                if countStar(i, j) == 0:
                    bfs(i, j)
                    total += 1

    for i in range(n):
        for j in range(n):
            if graph[i][j] == ".": total += 1

    result.append(f"#{t + 1} {total}")

print("\n".join(result))
