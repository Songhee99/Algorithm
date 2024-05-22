T = int(input())
result = []

for t in range(1, T + 1):
    n = int(input())
    count = n // 3
    result.append(f"#{t} {count}")

print("\n".join(result))