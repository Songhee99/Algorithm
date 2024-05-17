t = int(input())
result = []

for k in range(1, t+1):
    curList = list(input())
    hoemun = True

    for i in range(len(curList) // 2):
        lastAlp = curList.pop()
        if curList[i] != lastAlp:
            hoemun = not hoemun
            break

    result.append(f"#{k} {1 if hoemun == True else 0}")
print("\n".join(result))