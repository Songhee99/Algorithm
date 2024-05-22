T = int(input())
result = []

for t in range(1, T + 1):
    a, b = map(int, input().split())

    value = -1 if max(a, b) >= 10 else a * b

    result.append(f"#{t} {value}")
print("\n".join(result))