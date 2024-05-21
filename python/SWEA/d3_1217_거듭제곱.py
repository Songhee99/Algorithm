result = []

for t in range(1, 11):
    tc = input()
    n, m = map(int, input().split())
    num = 1

    for i in range(m):
        num *= n

    result.append(f"#{t} {num}")
print("\n".join(result))