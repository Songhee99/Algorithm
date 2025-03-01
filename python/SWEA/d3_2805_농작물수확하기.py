T = int(input())
result = []

for t in range(T):
    n = int(input())
    graph = [[int(i) for i in input()] for _ in range(n)]
    half = n // 2
    total = sum(graph[half])

    for i in range(half):
        total += sum(graph[i][0 + half - i : n - half + i])
        total += sum(graph[n - 1 - i][0 + half - i: n - half + i])

    result.append(f"#{t + 1} {total}")

print("\n".join(result))