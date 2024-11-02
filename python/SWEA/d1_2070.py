T = int(input())
result = []

for t in range(T):
    [a, b] = map(int, input().split())

    sign = ">" if a > b else "=" if a == b else "<"
    result.append(f"#{t + 1} {sign}")

print("\n".join(result))