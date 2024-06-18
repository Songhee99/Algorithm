import sys

n, m = map(int, sys.stdin.readline().rstrip().split())
snacks = list(map(int, sys.stdin.readline().rstrip().split()))

start, end = 1, max(snacks)

while start <= end:
    mid = (start + end) // 2
    count = sum([(i // mid) for i in snacks])

    if count < n: end = mid - 1
    else: start = mid + 1

print(end)