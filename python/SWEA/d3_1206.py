result = []

for t in range(10):
    n = int(input())
    nList = list(map(int, input().split()))
    total = 0

    idx = 2
    while idx < (n - 2):
        minNum = 0
        if nList[idx] >= nList[idx - 1] and nList[idx] >= nList[idx - 2]:
            if nList[idx] >= nList[idx + 1]:
                if nList[idx] >= nList[idx + 2]:
                    minNum = min((nList[idx] - nList[idx - 1]), (nList[idx] - nList[idx - 2]), (nList[idx] - nList[idx + 1]), (nList[idx] - nList[idx + 2]))
                    idx += 2
                else: idx += 1
        idx += 1
        total += minNum

    result.append(f'#{t + 1} {total}')

print("\n".join(result))