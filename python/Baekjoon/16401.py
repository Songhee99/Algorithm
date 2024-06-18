import sys

n, m = map(int, sys.stdin.readline().rstrip().split())
snacks = list(map(int, sys.stdin.readline().rstrip().split()))

start = 1
end = max(snacks)

while start <= end:
    mid = (start + end) // 2
    count = 0

    for i in snacks:
        count += i // mid

    if count < n: end = mid - 1
    else: start = mid + 1

print(end)