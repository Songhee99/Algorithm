T = int(input())
result = []

for _ in range(T):
    t = int(input())
    nums = list(map(int, input().split()))
    nums.sort()

    max = [0, 0]
    tmpCount = 0
    tmpNum = -1
    for i in nums:
        if tmpNum != i:
            if tmpCount >= max[1]: max = [tmpNum, tmpCount]
            tmpNum = i
            tmpCount = 1
        else: tmpCount += 1

    result.append(f"#{t} {max[0]}")

print("\n".join(result))