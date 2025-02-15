T = int(input())
result = []
for t in range(T):
    n = int(input())
    graph = [[0] * n for _ in range(n)]

    half = n // 2
    curNum = 1

    for i in range(half):
        for a in range(i, n - 1 - i):
            graph[i][a] = str(curNum)
            curNum += 1
        for b in range(i, n - 1 - i):
            graph[b][n - 1 - i] = str(curNum)
            curNum += 1
        for c in range(n - 1 - i, i , -1):
            graph[n - 1 - i][c] = str(curNum)
            curNum += 1
        for d in range(n - 1 - i, i, -1):
            graph[d][i] = str(curNum)
            curNum += 1

    if n % 2 != 0: graph[half][half] = str(curNum)

    result.append(f"#{t + 1}")
    for i in range(n):
        result.append(" ".join(graph[i]))

print("\n".join(result))