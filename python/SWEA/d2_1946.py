T = int(input())
result = []

for t in range(T):
    n = int(input())
    totalStr = ""
    subStrList = []

    for _ in range(n):
        [alp, num] = input().split()
        totalStr += (alp * int(num))

    subStrList = [totalStr[i:i + 10] for i in range(0, len(totalStr), 10)]
    result.append(f"#{t + 1}" + "\n" + "\n".join(subStrList))

print("\n".join(result))