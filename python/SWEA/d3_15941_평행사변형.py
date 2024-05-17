T = int(input())
result = []

for t in range(1, T + 1):
    n = int(input())

    result.append(f"#{t} {n * n}")

print("\n".join(result))