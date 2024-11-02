T = int(input())
result = []

for t in range(T):
    nSum = sum(list(map(int, input().split())))

    result.append(f"#{t + 1} {round(nSum / 10)}")

print("\n".join(result))