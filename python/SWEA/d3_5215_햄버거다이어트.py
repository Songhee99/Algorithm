T = int(input())
result = []

for t in range(T):
    n, l = map(int, input().split())
    record = [list(map(int, input().split())) for _ in range(n)]
    record.sort(key = lambda x: x[1], reverse = True)
    maxScore = 0

    def dfs(i, score, kcal):
        if kcal > l: return

        for j in range(i + 1, n):
            dfs(j, score + record[j][0], kcal + record[j][1])

        global maxScore
        maxScore = max(maxScore, score)

    for i in range(n - 1):
        dfs(i, record[i][0], record[i][1])

    result.append(f"#{t + 1} {maxScore}")

print("\n".join(result))