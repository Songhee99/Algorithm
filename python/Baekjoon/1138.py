import sys
input = sys.stdin.readline

n = int(input())
nums = list(map(int, input().split()))
line = [0] * n
countList = [i for i in range(n)]

for (idx, num) in enumerate(nums):
    seat = countList[num]
    line[seat] = str(idx + 1)

    for i in range(num, n):
        if i == (n - 1) or countList[i + 1] == (n - 1):
            countList[i] = n - 1
            break
        countList[i] = countList[i + 1]

print(" ".join(line))
