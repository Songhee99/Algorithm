from collections import deque

T = int(input())
result = []

for t in range(T):
    graph = [input().split() for _ in range(4)]

    dy = [-1, 1, 0, 0]
    dx = [0, 0, -1, 1]
    nums = set()

    def bfs(i, j):
        str = f"{graph[i][j]}"
        queue = deque([(i, j, str)])

        while queue:
            y, x, curStr = queue.popleft()

            if len(curStr) == 7:
                nums.add(curStr)
                continue

            for d in range(4):
                ny = y + dy[d]
                nx = x + dx[d]

                if ny < 0 or ny >= 4 or nx < 0 or nx >= 4: continue
                queue.append((ny, nx, curStr + graph[ny][nx]))

    for i in range(4):
        for j in range(4):
            bfs(i, j)

    result.append(f"#{t + 1} {len(nums)}")
print("\n".join(result))