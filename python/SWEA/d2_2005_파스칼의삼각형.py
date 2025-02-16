T = int(input())
result = []

for t in range(T):
    n = int(input())
    graph = [["1"], ["1", "1"]]

    for i in range(2, n):
        tmpLine = ["1"]
        prev = 1
        for num in graph[i - 1][1:]:
            tmpLine.append(f"{prev + int(num)}")
            prev = int(num)
        tmpLine.append("1")
        graph.append(tmpLine)

    result.append(f"#{t + 1}")
    result.append("\n".join([" ".join(line) for line in graph]))

print("\n".join(result))
