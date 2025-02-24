result = []

for t in range(10):
    n = int(input())
    graph = list(map(int, input().split()))

    while n > 0:
        graph[graph.index(max(graph))] -= 1
        graph[graph.index(min(graph))] += 1
        n -= 1

    result.append(f"#{t + 1} {max(graph) - min(graph)}")

print("\n".join(result))
