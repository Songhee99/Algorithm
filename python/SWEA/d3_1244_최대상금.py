T = int(input())
result = []

for t in range(T):
    n, c = map(int, input().split())
    nList = list(str(n))
    nLen = len(nList)
    maxNum = 0
    visited = set()

    def dfs(curList, count):
        if count == c:
            global maxNum
            maxNum = max(maxNum, int("".join(curList)))
            return

        for i in range(nLen - 1):
            for j in range(i + 1, nLen):
                tmpList = curList[:]
                tmpList[i], tmpList[j] = tmpList[j], tmpList[i]

                if (tuple(tmpList), count + 1) not in visited:
                    visited.add((tuple(tmpList), count + 1))
                    dfs(tmpList, count + 1)

    dfs(nList, 0)
    result.append(f"#{t + 1} {maxNum}")

print("\n".join(result))