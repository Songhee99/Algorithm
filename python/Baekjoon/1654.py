import sys

k, n = map(int, sys.stdin.readline().rstrip().split())
lans = []
for i in range(k):
    lans.append(int(sys.stdin.readline().rstrip()))
result = 0

start = 1
end = sum(lans) // n

while start <= end:
    mid = (start + end) // 2
    count = sum(i // mid for i in lans)

    if count >= n:
        result = mid
        start = mid + 1
    else: end = mid - 1

print(result)
