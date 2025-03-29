import sys

n = int(sys.stdin.readline().strip())
nums = list(map(int, sys.stdin.readline().strip().split()))
sumList = [nums[0]] * n
for i in range(1, n):
    sumList[i] = sumList[i - 1] + nums[i]
def fly(i, k):
    if i > k: return 0
    return sumList[k] - sumList[i]

def reverseFly(i, k):
    if k == 0: return sumList[i - 1]
    return sumList[i - 1] - sumList[k - 1]

result = fly(0, n - 2) + max(nums[1:n-1])

for i in range(1, n - 1):
    rightMoving = sumList[n - 1] - nums[0]
    leftMoving = sumList[n - 2]

    rightMoving += fly(i, n - 1)
    leftMoving += reverseFly(i, 0)

    rightMoving -= nums[i]
    leftMoving -= nums[i]

    result = max(result, rightMoving, leftMoving)

print(result)
