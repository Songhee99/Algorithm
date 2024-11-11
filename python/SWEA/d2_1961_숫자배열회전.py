T = int(input())
result = []

for t in range(T):
    n = int(input())
    graph = []
    for _ in range(n):
        nums = list(map(int, input().split()))
        graph.append(nums)

    def turns():
        lines = []
        for i in range(n):
            lines.append([])
            tmpStr90 = ""
            tmpStr180 = ""
            tmpStr270 = ""
            for j in range(n):
                tmpStr90 += str(graph[(n - 1) - j][i])
                tmpStr180 += str(graph[(n - 1) - i][(n - 1) - j])
                tmpStr270 += str(graph[j][(n - 1) - i])
            lines[i].append(tmpStr90)
            lines[i].append(tmpStr180)
            lines[i].append(tmpStr270)
        return lines

    turnsList = turns()

    result.append(f"#{t + 1}")
    for k in range(n):
        result.append(" ".join(turnsList[k]))

print("\n".join(result))