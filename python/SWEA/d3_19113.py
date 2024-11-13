T = int(input())
result = []

for t in range(T):
    n = int(input())
    nums = list(map(int, input().split()))

    saleList = []
    possibleList = []
    possibleIdx = 0

    for i in nums[::-1]:
        if possibleIdx < len(possibleList) and possibleList[possibleIdx] == i:
            possibleIdx += 1
            saleList.append(i)
        else: possibleList.append(i * 0.75)

    result.append(f"#{t + 1} {' '.join(map(str, sorted(saleList)))}")

print("\n".join(result))