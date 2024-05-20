T = int(input())
result = []

for m in range(1, T + 1):
    n, k = map(int, input().split())
    graph = []
    for i in range(n):
        graph.append(list(input().split()))
    count = 0

    for i in range(n):
        line = graph[i][:]
        stack = []

        while len(line) > 0:
            num = line.pop()
            if num == "1": stack.append(num)
            else:
                if len(stack) == k: count += 1
                stack = []
        if len(stack) == k: count += 1

    for i in range(n):
        stack = []
        for j in range(n):
            if graph[j][i] == "1": stack.append("1")
            else:
                if len(stack) == k: count += 1
                stack = []
        if len(stack) == k: count += 1

    result.append(f"#{m} {count}")

print("\n".join(result))