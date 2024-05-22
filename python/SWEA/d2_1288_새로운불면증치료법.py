t = int(input())
result = ""

for k in range(1, t+1):
    n = int(input())
    numArr = [str(i) for i in range(10)]
    numSet = set(numArr)
    count = 1

    while len(numSet) > 0:
        numStr = str(n * count)

        for j in numStr:
            if j in numSet: numSet.remove(j)

        count += 1

    result += f"#{k} {numStr}" + "\n"

print(result)