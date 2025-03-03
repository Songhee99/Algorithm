result = []

for t in range(10):
    n = int(input())
    graph = []
    end = []
    for col in range(100):
        line = list(map(int, input().split()))
        if col == 99:
            for (idx, v) in enumerate(line):
                if v == 2:
                    end = [col, idx]
                    break
        graph.append(line)

    start = -1

    def dfs(i, j):
        if i == 0:
            global start
            start = j
            return

        if j - 1 >= 0 and graph[i][j - 1] == 1:
            left = j - 1
            while True:
                if left - 1 >= 0 and graph[i][left - 1] == 1: left -= 1
                else: break
            dfs(i - 1, left)
        elif j + 1 < 100 and graph[i][j + 1] == 1:
            right = j + 1
            while True:
                if right + 1 < 100 and graph[i][right + 1] == 1: right += 1
                else: break
            dfs(i - 1, right)
        else:
            dfs(i - 1, j)

    dfs(end[0] - 1, end[1])
    result.append(f"#{t + 1} {start}")

print("\n".join(result))
