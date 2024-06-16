import sys

n, m = map(int, sys.stdin.readline().rstrip().split())
trees = list(map(int, sys.stdin.readline().rstrip().split()))

start = 0
end = max(trees)

while start <= end:
    mid = (start + end) // 2
    getTrees = sum([(i - mid) for i in trees if i > mid])

    if getTrees >= m:
        result = mid
        start = mid + 1
    else: end = mid - 1

print(end)

# Counter로 풀면 더 효율적