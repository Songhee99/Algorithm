t = int(input())
result = []

for k in range(1, t+1):
    n, m = map(int, input().split())
    aList = list(map(int, input().split()))
    bList = list(map(int, input().split()))
    maxSum = 0

    def compareFunc(big, small):
        for i in range(len(big) - len(small) + 1):
            tmpSum = 0
            for j in range(len(small)):
                tmpSum += big[i + j] * small[j]
            global maxSum
            maxSum = max(maxSum, tmpSum)

    compareFunc(aList, bList) if n > m else compareFunc(bList, aList)
    result.append(f"#{k} {maxSum}")

print("\n".join(result))