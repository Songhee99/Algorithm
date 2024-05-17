t = int(input())
result = []

for k in range(1, t+1):
    testCase = input()
    testSet = set(testCase)
    if len(testSet) == 1:
        result.append(f"#{k} 1")
        continue

    for i in range(2, 11):
        repeatStr = testCase[:i]
        secondStartIdx = testCase.find(repeatStr, i)
        tmpStr = testCase[:secondStartIdx]

        if testCase.find(tmpStr, i) == secondStartIdx:
            result.append(f"#{k} {secondStartIdx}")
            break

print("\n".join(result))