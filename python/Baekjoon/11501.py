import sys

t = int(sys.stdin.readline().rstrip())
result = []

for _ in range(t):
    n = int(sys.stdin.readline().rstrip())
    nList = list(map(int, sys.stdin.readline().rstrip().split()))
    sortNList = sorted([(i, idx) for idx, i in enumerate(nList)], key = lambda x: x[0], reverse=True)
    curIdx = -1
    maxNumsIdx = []
    profit = 0

    for i, idx in sortNList:
        if idx == n - 1 or idx == n - 2:
            maxNumsIdx.append(idx)
            break
        elif curIdx < idx:
            maxNumsIdx.append(idx)
            curIdx = idx

    prevIdx = -1
    curIdx = 0
    for i in maxNumsIdx:
        curIdx = i
        if curIdx - prevIdx != 1:
            profit += ((curIdx - prevIdx - 1) * nList[curIdx] - sum(nList[prevIdx + 1:curIdx]))
        prevIdx = i

    result.append(str(profit))

print("\n".join(result))