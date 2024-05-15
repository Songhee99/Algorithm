t = int(input())
result = []

for k in range(1, t+1):
    p, q, r, s, w = map(int, input().split())

    priceA = w * p
    priceB = (q + (w - r) * s if w > r else q)

    result.append(f"#{k} {priceA if priceA < priceB else priceB}")

print("\n".join(result))