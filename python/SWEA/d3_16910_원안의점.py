import math

T = int(input())
result = []

for t in range(1, T + 1):
    n = int(input())
    count = 0

    for x in range(n + 1):
        y = int(math.sqrt(n * n - x * x))
        count += y + 1

    totalCount = 4 * count - 4 * n - 3
    result.append(f"#{t} {totalCount}")
print("\n".join(result))