import sys
input = sys.stdin.readline

nums = input().strip()

idx = 0
n = 1
while idx < len(nums):
    for j in str(n):
        if nums[idx] == j:
            idx += 1
            if idx == len(nums): break
    n += 1

print(n - 1)
