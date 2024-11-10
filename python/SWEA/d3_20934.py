T = int(input())
result = []

for t in range(T):
    [s, k] = input().split()
    sList = []
    bellIdx = 0
    for (idx, i) in enumerate(s):
        sList.append(i)
        if i == "o": bellIdx = idx

    for _ in range(int(k)):
        if bellIdx == 2: bellIdx = 1
        elif bellIdx == 1: bellIdx = 0
        else: bellIdx = 1

    result.append(f"#{t + 1} {bellIdx}")

print("\n".join(result))