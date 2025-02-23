T = int(input())
result = []

for t in range(T):
    b, w, x, y, z = map(int, input().split())
    count = 0

    if x + y < 2 * z:
        if b > w: count = (b - w) * x + 2 * w * z
        else: count = (w - b) * y + 2 * b * z
    else: count = b * x + w * y

    result.append(f"{count}")
print("\n".join(result))