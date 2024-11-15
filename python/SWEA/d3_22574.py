T = int(input())
result = []

for t in range(T):
    [n, p] = map(int, input().split())
    total = 0

    for i in range(1, n + 1):
        total += i

        if total == p: total -= 1

    result.append(f"{total}")

print("\n".join(result))