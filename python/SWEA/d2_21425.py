T = int(input())
result = []

for t in range(T):
    [a, b, n] = map(int, input().split())
    count = 0

    if a > b:
        originA = a
        a = b
        b = originA

    while b <= n:
        a += b
        count += 1

        if a > n: break

        b += a
        count += 1

    result.append(str(count))

print("\n".join(result))