from collections import deque

T = int(input())
result = []

for t in range(T):
    n = int(input())
    graph = [list(map(int, input().split())) for _ in range(n)]
    visited = [0] * (n * n + 1)

    dy = [-1, 1, 0, 0]
    dx = [0, 0, -1, 1]

    maxNum = [n * n + 1, -1]

    def bfs(i, j):
        queue = deque([(i, j)])
        total = 1

        while queue:
            y, x = queue.popleft()
            num = graph[y][x]

            if num == n * n: return total

            for d in range(4):
                ny = y + dy[d]
                nx = x + dx[d]

                if ny < 0 or ny >= n or nx < 0 or nx >= n: continue

                if graph[ny][nx] == num + 1:
                    if visited[num + 1] != 0:
                        total += visited[num + 1]
                        return total

                    queue.append((ny, nx))
                    total += 1
                    break
        return total

    for i in range(n):
        for j in range(n):
            num = graph[i][j]
            if visited[num] == 0:
                count = bfs(i, j)
                if count > maxNum[1]: maxNum = [num, count]
                elif count == maxNum[1] and num < maxNum[0]: maxNum = [num, count]
                visited[num] = count

    result.append(f"#{t + 1} {maxNum[0]} {maxNum[1]}")
print("\n".join(result))
