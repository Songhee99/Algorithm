n = int(input())
result = []

for i in range(1, n+1):
    tmpStr = ""
    clap = False

    for j in str(i):
        if j != "0" and int(j) % 3 == 0:
            if clap: tmpStr += "-"
            else:
                tmpStr = "-"
                clap = True
        elif not clap: tmpStr += str(j)

    result.append(tmpStr)


print(" ".join(result))