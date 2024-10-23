import sys

numList = sys.stdin.readline().strip().split()
nums = [int(i[::-1]) for i in numList]

print(max(nums))