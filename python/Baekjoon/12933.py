str1 = input().replace("q", "0")
str2 = str1.replace("u", "1")
str3 = str2.replace("a", "2")
str4 = str3.replace("c", "3")
str5 = str4.replace("k", "4")

countList = [0] * 5
start = 0
end = 0

for i in str5:
    if i == "0":
        if end > 0: end -= 1
        else: start += 1
        countList[int(i)] += 1
    elif countList[int(i) - 1] > countList[int(i)]:
        if i == "4": end += 1
        countList[int(i)] += 1
    else:
        start = -1
        break

countSet = set(countList)
if len(countSet) == 1: print(start)
else: print(-1)