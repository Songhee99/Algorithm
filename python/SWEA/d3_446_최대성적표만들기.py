T = int(input())
result = []

for t in range(1, T + 1):
    n, k = map(int, input().split())
    scores = list(map(int, input().split()))

    scores.sort(reverse=True)
    totalSum = sum(scores[:k])

    result.append(f"#{t} {totalSum}")
print("\n".join(result))