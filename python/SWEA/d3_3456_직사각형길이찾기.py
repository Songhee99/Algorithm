T = int(input())
result = []

for t in range(1, T + 1):
    a, b, c = map(int, input().split())

    if a == b: result.append(f"#{t} {c}")
    elif a == c: result.append(f"#{t} {b}")
    else: result.append(f"#{t} {a}")

print("\n".join(result))