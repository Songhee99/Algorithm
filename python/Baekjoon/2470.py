import sys

n = int(sys.stdin.readline().strip())
nums = list(map(int, sys.stdin.readline().strip().split()))
nums.sort()
result = []

minSum = 2000000001
start = 0
end = n - 1

while start < end:
    curSum = nums[start] + nums[end]

    if abs(curSum) < abs(minSum):
        minSum = curSum
        result = [str(nums[start]), str(nums[end])]
        if curSum == 0: break

    if curSum < 0: start += 1
    else: end -= 1

print(" ".join(result))