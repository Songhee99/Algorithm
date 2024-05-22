T = int(input())
result = []

for t in range(1, T + 1):
    l, u, x = map(int, input().split())

    if x > u:
        result.append(f"#{t} -1")
        continue
    elif x < l:
        result.append(f"#{t} {l - x}")
        continue
    else: result.append(f"#{t} 0")

print("\n".join(result))