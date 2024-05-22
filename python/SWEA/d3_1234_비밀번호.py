result = []

for t in range(1, 11):
    length, password = map(str, input().split())
    strList = list(password)

    reverseList = []
    for i in range(len(strList)):
        tmpNum = strList.pop()

        if len(reverseList) == 0 or reverseList[-1] != tmpNum: reverseList.append(tmpNum)
        else: reverseList.pop()

    res = "".join(reversed(reverseList))
    result.append(f"#{t} {res}")
print("\n".join(result))