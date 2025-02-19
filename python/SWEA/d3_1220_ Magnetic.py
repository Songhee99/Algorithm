result = []

for t in range(10):
    n = int(input())
    graph = [list(map(int, input().split())) for _ in range(n)]
    count = 0

    for i in range(n):
        stack = []
        curCount = 0
        for j in range(n):
            if graph[j][i] == 0: continue
            stack.append(graph[j][i])

        stopZone = []
        for k in stack:
            if k == 1: stopZone.append(k)
            elif stopZone:
                if stopZone[-1] == 1: curCount += 1
                stopZone.append(k)
        count += curCount

    result.append(f"#{t + 1} {count}")

print("\n".join(result))
