T = int(input())
result = []

for t in range(T):
    [n, m] = map(int, input().split())
    graph = []
    maxNum = 0
    for _ in range(n):
        nums = list(map(int, input().split()))
        graph.append(nums)

    for j in range(n - m + 1):
        for k in range(n - m + 1):
            tmpSum = 0
            for a in range(m):
                for b in range(m):
                    tmpSum += graph[j + a][k + b]

            maxNum = max(maxNum, tmpSum)

    result.append(f"#{t + 1} {maxNum}")

print("\n".join(result))