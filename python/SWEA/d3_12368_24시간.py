T = int(input())
result = []

for t in range(1, T + 1):
    a, b = map(int, input().split())
    time = a + b

    if time >= 24: time -= 24

    result.append(f"#{t} {time}")

print("\n".join(result))